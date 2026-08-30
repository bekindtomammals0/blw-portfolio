import process from 'node:process';

import { prepareEvidence } from './evidence.mjs';

const projectSlug = process.argv[2];
if (!projectSlug) {
  throw new Error('Usage: npm run evidence:prepare -- <project-slug>');
}

const prepared = await prepareEvidence(process.cwd(), projectSlug);
console.log('Prepared metadata-free WebP variants:');
for (const item of prepared) {
  console.log(`- ${item.imageId}`);
  console.log(
    `  card: ${item.variants.card.width}×${item.variants.card.height}`,
  );
  console.log(
    `  case-study: ${item.variants.caseStudy.width}×${item.variants.caseStudy.height}`,
  );
}
console.log(
  `Add each prepared image to evidence/manifests/${projectSlug}.json with representation, alt text, caption, order, placement, and the printed variants before approval.`,
);
