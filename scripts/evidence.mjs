import { createHash } from 'node:crypto';
import {
  access,
  copyFile,
  mkdir,
  readFile,
  readdir,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

export const projectSlugs = [
  'ui-greenmetric',
  'badminton-tournament-operations',
  'blwfinbot',
  'b-loom',
];

export const representations = [
  'original',
  'redacted',
  'reconstructed',
  'synthetic',
];

const placements = ['card', 'case-study'];
const supportedExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp']);

export function manifestPath(root, projectSlug) {
  return path.join(root, 'evidence', 'manifests', `${projectSlug}.json`);
}

export async function loadManifest(root, projectSlug) {
  return JSON.parse(await readFile(manifestPath(root, projectSlug), 'utf8'));
}

export async function saveManifest(root, manifest) {
  await writeFile(
    manifestPath(root, manifest.projectSlug),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
}

export async function sha256(filePath) {
  return createHash('sha256')
    .update(await readFile(filePath))
    .digest('hex');
}

export function approvalReceiptId(projectSlug, image) {
  const approval = image.factualAttestation;
  const disclosure = image.disclosureApproval;
  return createHash('sha256')
    .update(
      JSON.stringify({
        version: 1,
        projectSlug,
        imageId: image.id,
        by: approval?.by,
        at: approval?.at,
        cardSha256: approval?.hashes?.card,
        caseStudySha256: approval?.hashes?.caseStudy,
        disclosureBy: disclosure?.by,
        disclosureAt: disclosure?.at,
      }),
    )
    .digest('hex');
}

export async function loadApprovalLedger(root) {
  return JSON.parse(
    await readFile(path.join(root, 'evidence', 'approvals.json'), 'utf8'),
  );
}

export async function saveApprovalLedger(root, ledger) {
  await writeFile(
    path.join(root, 'evidence', 'approvals.json'),
    `${JSON.stringify(ledger, null, 2)}\n`,
  );
}

export async function validateEvidence(root) {
  const errors = [];
  let ledger = { version: 0, receipts: [] };
  try {
    ledger = await loadApprovalLedger(root);
  } catch {
    errors.push(
      'evidence/approvals.json: missing or unreadable approval ledger',
    );
  }
  if (ledger.version !== 1 || !Array.isArray(ledger.receipts)) {
    errors.push('evidence/approvals.json: invalid approval ledger');
  }

  for (const projectSlug of projectSlugs) {
    let manifest;
    try {
      manifest = await loadManifest(root, projectSlug);
    } catch {
      errors.push(`${projectSlug}: missing or unreadable manifest`);
      continue;
    }

    if (manifest.projectSlug !== projectSlug || manifest.version !== 1) {
      errors.push(`${projectSlug}: manifest identity or version is invalid`);
    }

    const ids = new Set();
    let cardCount = 0;
    for (const image of manifest.images ?? []) {
      if (!image.id || ids.has(image.id)) {
        errors.push(`${projectSlug}: image IDs must be present and unique`);
      }
      ids.add(image.id);

      if (!representations.includes(image.representation)) {
        errors.push(`${projectSlug}/${image.id}: unsupported representation`);
      }
      if (!placements.includes(image.placement)) {
        errors.push(`${projectSlug}/${image.id}: unsupported placement`);
      }
      if (image.placement === 'card') cardCount += 1;
      if (!image.alt?.trim() || !image.caption?.trim()) {
        errors.push(
          `${projectSlug}/${image.id}: alt text and caption are required`,
        );
      }
      if (!Number.isInteger(image.order) || image.order < 0) {
        errors.push(
          `${projectSlug}/${image.id}: order must be a non-negative integer`,
        );
      }

      for (const variantName of ['card', 'caseStudy']) {
        const variant = image.variants?.[variantName];
        if (!variant?.src || !variant.width || !variant.height) {
          errors.push(
            `${projectSlug}/${image.id}: ${variantName} variant is incomplete`,
          );
          continue;
        }
        const filePath = path.join(root, 'src', variant.src);
        try {
          await access(filePath);
          const metadata = await sharp(filePath).metadata();
          if (
            metadata.width !== variant.width ||
            metadata.height !== variant.height
          ) {
            errors.push(
              `${projectSlug}/${image.id}: ${variantName} dimensions do not match the public artifact`,
            );
          }
        } catch {
          errors.push(`${projectSlug}/${image.id}: missing ${variant.src}`);
        }
      }

      const currentHashes = {};
      for (const variantName of ['card', 'caseStudy']) {
        const variant = image.variants?.[variantName];
        if (!variant?.src) continue;
        for (const approvalName of [
          'factualAttestation',
          'disclosureApproval',
        ]) {
          const approval = image[approvalName];
          try {
            currentHashes[variantName] = await sha256(
              path.join(root, 'src', variant.src),
            );
          } catch {
            continue;
          }
          if (
            !approval?.by ||
            !approval?.at ||
            approval.hashes?.[variantName] !== currentHashes[variantName]
          ) {
            errors.push(
              `${projectSlug}/${image.id}: valid ${approvalName} is required for the ${variantName} artifact`,
            );
          }
        }
      }

      const receiptId = approvalReceiptId(projectSlug, image);
      const receipt = ledger.receipts.find(
        (entry) =>
          entry.id === receiptId &&
          entry.projectSlug === projectSlug &&
          entry.imageId === image.id,
      );
      if (!receipt) {
        errors.push(
          `${projectSlug}/${image.id}: guided approval receipt is required; manifest fields alone are not approval`,
        );
      }
    }

    const imageCount = manifest.images?.length ?? 0;
    if (imageCount > 0 && cardCount !== 1) {
      errors.push(
        `${projectSlug}: screenshot evidence requires exactly one card image`,
      );
    }
  }

  return errors;
}

export async function prepareEvidence(root, projectSlug) {
  if (!projectSlugs.includes(projectSlug)) {
    throw new Error(`Unknown project slug: ${projectSlug}`);
  }

  const inbox = path.join(root, 'evidence-inbox', projectSlug);
  const candidates = await readdir(inbox, { withFileTypes: true }).catch(
    () => [],
  );
  const files = candidates
    .filter((entry) => entry.isFile() && !entry.name.startsWith('.'))
    .map((entry) => entry.name);
  if (files.length === 0) {
    throw new Error(`No evidence candidates found in ${inbox}`);
  }

  const manifest = await loadManifest(root, projectSlug);
  const existingIds = new Set((manifest.images ?? []).map((image) => image.id));
  const outputDirectory = path.join(root, 'evidence-prepared', projectSlug);
  const prepared = [];

  for (const filename of files) {
    const extension = path.extname(filename).toLowerCase();
    if (!supportedExtensions.has(extension)) {
      throw new Error(
        `${filename}: unsupported format; use PNG, JPEG, or WebP`,
      );
    }
    const imageId = path.basename(filename, extension);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(imageId)) {
      throw new Error(
        `${filename}: filename must be a stable kebab-case image ID`,
      );
    }
    if (existingIds.has(imageId)) {
      throw new Error(
        `${filename}: image ID already exists; choose a new ID or perform an explicit replacement`,
      );
    }

    const source = path.join(inbox, filename);
    const metadata = await sharp(source, { animated: true }).metadata();
    if ((metadata.pages ?? 1) > 1) {
      throw new Error(`${filename}: animated images are not supported`);
    }

    await mkdir(outputDirectory, { recursive: true });
    const variants = {};
    for (const [variantName, maxWidth] of [
      ['card', 800],
      ['caseStudy', 1600],
    ]) {
      const outputName = `${imageId}-${variantName === 'card' ? 'card' : 'case-study'}.webp`;
      const outputPath = path.join(outputDirectory, outputName);
      try {
        await access(outputPath);
        throw new Error(
          `${outputName}: output already exists; nothing was overwritten`,
        );
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
      const result = await sharp(source)
        .rotate()
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: 82, effort: 5, alphaQuality: 100 })
        .toFile(outputPath);
      variants[variantName] = {
        src: `assets/projects/${projectSlug}/${outputName}`,
        width: result.width,
        height: result.height,
      };
    }
    prepared.push({ imageId, variants });
  }

  return prepared;
}

export async function promoteApprovedEvidence(
  root,
  projectSlug,
  image,
  { replace = false } = {},
) {
  const outputDirectory = path.join(
    root,
    'src',
    'assets',
    'projects',
    projectSlug,
  );
  await mkdir(outputDirectory, { recursive: true });
  const hashes = {};

  for (const variantName of ['card', 'caseStudy']) {
    const publicVariant = image.variants[variantName];
    const filename = path.basename(publicVariant.src);
    const preparedPath = path.join(
      root,
      'evidence-prepared',
      projectSlug,
      filename,
    );
    const publicPath = path.join(root, 'src', publicVariant.src);
    await access(preparedPath);
    if (!replace) {
      try {
        await access(publicPath);
        throw new Error(
          `${filename}: public artifact exists; use evidence:replace for an explicit replacement`,
        );
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }
    const metadata = await sharp(preparedPath).metadata();
    if (
      metadata.width !== publicVariant.width ||
      metadata.height !== publicVariant.height
    ) {
      throw new Error(
        `${filename}: manifest dimensions do not match prepared bytes`,
      );
    }
    await copyFile(preparedPath, publicPath);
    hashes[variantName] = await sha256(publicPath);
  }
  return hashes;
}
