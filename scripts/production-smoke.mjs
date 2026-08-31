import process from 'node:process';

import { validatePortfolio } from './browser-smoke.mjs';

const baseUrl = new URL(
  process.argv[2] ?? 'https://bekindtomammals0.github.io/blw-portfolio/',
);
await validatePortfolio(baseUrl, { retries: 12 });
console.log(`Production browser smoke check passed for ${baseUrl}`);
