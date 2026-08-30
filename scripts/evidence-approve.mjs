import { createInterface } from 'node:readline/promises';
import process from 'node:process';

import { loadManifest, saveManifest, sha256 } from './evidence.mjs';

const [projectSlug, imageId] = process.argv.slice(2);
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

const variant =
  image.placement === 'card' ? image.variants.card : image.variants.caseStudy;
const publicPath = `${root}/src/${variant.src}`;
console.log('\nReview this exact final public artifact and metadata:');
console.log(`Artifact: ${publicPath}`);
console.log(`Dimensions: ${variant.width}×${variant.height}`);
console.log(`Representation: ${image.representation}`);
console.log(`Alt text: ${image.alt}`);
console.log(`Caption: ${image.caption}\n`);

const prompt = createInterface({
  input: process.stdin,
  output: process.stdout,
});
const factual = await prompt.question(
  'Does this exact artifact accurately represent the stated working behavior? Type YES: ',
);
if (factual !== 'YES') {
  prompt.close();
  throw new Error('Factual attestation was not granted');
}
const disclosure = await prompt.question(
  'Is this exact artifact safe and approved for public disclosure? Type YES: ',
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

const hash = await sha256(publicPath);
const at = new Date().toISOString();
image.factualAttestation = { by: approver.trim(), at, sha256: hash };
image.disclosureApproval = { by: approver.trim(), at, sha256: hash };
await saveManifest(root, manifest);
console.log(`Approval records written for SHA-256 ${hash}.`);
