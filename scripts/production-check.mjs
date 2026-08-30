import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import { validateEvidence } from './evidence.mjs';
import { validateMetadata, validatePublicSource } from './release.mjs';

const root = process.cwd();
const errors = [
  ...validateMetadata(await readFile(path.join(root, 'index.html'), 'utf8')),
  ...(await validatePublicSource(root)),
  ...(await validateEvidence(root)),
];

for (const requiredAsset of [
  'public/favicon.svg',
  'public/social-preview.webp',
]) {
  try {
    await access(path.join(root, requiredAsset));
  } catch {
    errors.push(`${requiredAsset}: required production asset is missing`);
  }
}

if (errors.length) {
  console.error(`Production validation failed:\n- ${errors.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log(
    'Production metadata, links, secrets, and evidence gates passed.',
  );
}
