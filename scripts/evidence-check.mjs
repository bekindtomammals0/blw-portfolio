import process from 'node:process';

import { validateEvidence } from './evidence.mjs';

const errors = await validateEvidence(process.cwd());
if (errors.length) {
  console.error(`Evidence validation failed:\n- ${errors.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log('Evidence manifests and selected public artifacts are valid.');
}
