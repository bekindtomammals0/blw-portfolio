import { createInterface } from 'node:readline/promises';
import { spawn } from 'node:child_process';
import process from 'node:process';

import {
  approvalReceiptId,
  loadApprovalLedger,
  loadManifest,
  promoteApprovedEvidence,
  saveApprovalLedger,
  saveManifest,
} from './evidence.mjs';

const replace = process.argv.includes('--replace');
const [projectSlug, imageId] = process.argv
  .slice(2)
  .filter((argument) => argument !== '--replace');
if (!projectSlug || !imageId) {
  throw new Error(
    'Usage: npm run evidence:approve -- <project-slug> <image-id>',
  );
}

const root = process.cwd();
const manifest = await loadManifest(root, projectSlug);
const image = manifest.images.find((entry) => entry.id === imageId);
if (!image)
  throw new Error(`Image ${imageId} is not in ${projectSlug}'s manifest`);

console.log('\nReview both exact final public variants and their metadata:');
const preparedPaths = [];
for (const [variantName, variant] of Object.entries(image.variants)) {
  const filename = variant.src.split('/').at(-1);
  const preparedPath = `${root}/evidence-prepared/${projectSlug}/${filename}`;
  preparedPaths.push(preparedPath);
  console.log(
    `${variantName}: ${preparedPath} (${variant.width}×${variant.height})`,
  );
}
console.log(`Representation: ${image.representation}`);
console.log(`Alt text: ${image.alt}`);
console.log(`Caption: ${image.caption}\n`);

const previewCommand =
  process.platform === 'darwin'
    ? ['open', preparedPaths]
    : process.platform === 'win32'
      ? ['cmd', ['/c', 'start', '', ...preparedPaths]]
      : ['xdg-open', [preparedPaths[0]]];
const preview = spawn(previewCommand[0], previewCommand[1], {
  detached: true,
  stdio: 'ignore',
});
preview.on('error', () => {
  console.warn('Could not open the image viewer; review the printed paths.');
});
preview.unref();

const prompt = createInterface({
  input: process.stdin,
  output: process.stdout,
});
const factual = await prompt.question(
  'Do both exact variants accurately represent the stated working behavior? Type YES: ',
);
if (factual !== 'YES') {
  prompt.close();
  throw new Error('Factual attestation was not granted');
}
const disclosure = await prompt.question(
  'Are both exact variants safe and approved for public disclosure? Type YES: ',
);
if (disclosure !== 'YES') {
  prompt.close();
  throw new Error('Disclosure approval was not granted');
}
const approver = await prompt.question(
  'Approval attribution (name or GitHub login): ',
);
prompt.close();
if (!approver.trim()) throw new Error('Approval attribution is required');

const hashes = await promoteApprovedEvidence(root, projectSlug, image, {
  replace,
});
const at = new Date().toISOString();
image.factualAttestation = { by: approver.trim(), at, hashes };
image.disclosureApproval = { by: approver.trim(), at, hashes };
await saveManifest(root, manifest);

const ledger = await loadApprovalLedger(root);
ledger.receipts = ledger.receipts.filter(
  (receipt) =>
    receipt.projectSlug !== projectSlug || receipt.imageId !== imageId,
);
const receiptId = approvalReceiptId(projectSlug, image);
ledger.receipts.push({
  id: receiptId,
  projectSlug,
  imageId,
  recordedBy: 'evidence:approve',
});
await saveApprovalLedger(root, ledger);
console.log(`Approval receipt ${receiptId} written for both public variants.`);
