import { spawn } from 'node:child_process';
import process from 'node:process';

import { validatePortfolio } from './browser-smoke.mjs';

const baseUrl = new URL('http://127.0.0.1:4173/blw-portfolio/');
const preview = spawn(
  process.platform === 'win32' ? 'npm.cmd' : 'npm',
  ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '4173'],
  { stdio: 'inherit' },
);

try {
  await validatePortfolio(baseUrl, { retries: 12 });
  console.log(`Built-artifact browser smoke check passed for ${baseUrl}`);
} finally {
  preview.kill('SIGTERM');
}
