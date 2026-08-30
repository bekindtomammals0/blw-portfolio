import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

import sharp from 'sharp';
import { describe, expect, it } from 'vitest';

import {
  approvalReceiptId,
  prepareEvidence,
  projectSlugs,
  sha256,
  validateEvidence,
} from './evidence.mjs';

async function scaffoldManifests(root: string) {
  const directory = path.join(root, 'evidence/manifests');
  await mkdir(directory, { recursive: true });
  await Promise.all(
    projectSlugs.map((projectSlug) =>
      writeFile(
        path.join(directory, `${projectSlug}.json`),
        JSON.stringify({ projectSlug, version: 1, images: [] }),
      ),
    ),
  );
  await writeFile(
    path.join(root, 'evidence/approvals.json'),
    JSON.stringify({ version: 1, receipts: [] }),
  );
}

describe('verified screenshot workflow', () => {
  it('prepares metadata-free bounded WebP variants without selecting them', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'blw-evidence-'));
    await scaffoldManifests(root);
    const inbox = path.join(root, 'evidence-inbox/ui-greenmetric');
    await mkdir(inbox, { recursive: true });
    await sharp({
      create: {
        width: 1800,
        height: 900,
        channels: 4,
        background: { r: 201, g: 154, b: 66, alpha: 0.5 },
      },
    })
      .png()
      .withMetadata({ comment: 'must not survive' })
      .toFile(path.join(inbox, 'system-overview.png'));

    const [prepared] = await prepareEvidence(root, 'ui-greenmetric');

    expect(prepared.imageId).toBe('system-overview');
    expect(prepared.variants.card.width).toBe(800);
    expect(prepared.variants.caseStudy.width).toBe(1600);
    const card = path.join(
      root,
      'evidence-prepared/ui-greenmetric/system-overview-card.webp',
    );
    const metadata = await sharp(card).metadata();
    expect(metadata.format).toBe('webp');
    expect(metadata.comments).toBeUndefined();
    expect(
      JSON.parse(
        await readFile(
          path.join(root, 'evidence/manifests/ui-greenmetric.json'),
          'utf8',
        ),
      ).images,
    ).toEqual([]);
  });

  it('invalidates approval when the selected public bytes change', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'blw-evidence-'));
    await scaffoldManifests(root);
    const assetDirectory = path.join(
      root,
      'src/assets/projects/ui-greenmetric',
    );
    await mkdir(assetDirectory, { recursive: true });
    const card = path.join(assetDirectory, 'overview-card.webp');
    const caseStudy = path.join(assetDirectory, 'overview-case-study.webp');
    await sharp({
      create: {
        width: 800,
        height: 400,
        channels: 3,
        background: '#c99a42',
      },
    })
      .webp()
      .toFile(card);
    await sharp({
      create: {
        width: 1600,
        height: 800,
        channels: 3,
        background: '#25231f',
      },
    })
      .webp()
      .toFile(caseStudy);
    const hashes = {
      card: await sha256(card),
      caseStudy: await sha256(caseStudy),
    };
    const approval = {
      by: 'bekindtomammals0',
      at: '2026-08-30T00:00:00.000Z',
      hashes,
    };
    const image = {
      id: 'overview',
      representation: 'synthetic',
      alt: 'Synthetic overview.',
      caption: 'Synthetic system overview.',
      order: 0,
      placement: 'card',
      variants: {
        card: {
          src: 'assets/projects/ui-greenmetric/overview-card.webp',
          width: 800,
          height: 400,
        },
        caseStudy: {
          src: 'assets/projects/ui-greenmetric/overview-case-study.webp',
          width: 1600,
          height: 800,
        },
      },
      factualAttestation: approval,
      disclosureApproval: approval,
    };
    await writeFile(
      path.join(root, 'evidence/manifests/ui-greenmetric.json'),
      JSON.stringify({
        projectSlug: 'ui-greenmetric',
        version: 1,
        images: [image],
      }),
    );
    await writeFile(
      path.join(root, 'evidence/approvals.json'),
      JSON.stringify({
        version: 1,
        receipts: [
          {
            id: approvalReceiptId('ui-greenmetric', image),
            projectSlug: 'ui-greenmetric',
            imageId: 'overview',
            recordedBy: 'evidence:approve',
          },
        ],
      }),
    );
    await sharp({
      create: {
        width: 800,
        height: 400,
        channels: 3,
        background: '#ffffff',
      },
    })
      .webp()
      .toFile(card);

    await expect(validateEvidence(root)).resolves.toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'valid factualAttestation is required for the card artifact',
        ),
        expect.stringContaining(
          'valid disclosureApproval is required for the card artifact',
        ),
      ]),
    );
  });
});
