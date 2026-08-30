import process from 'node:process';

import { chromium } from 'playwright';

const baseUrl = new URL(
  process.argv[2] ?? 'https://bekindtomammals0.github.io/blw-portfolio/',
);
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

let loaded = false;
for (let attempt = 1; attempt <= 12; attempt += 1) {
  const response = await page
    .goto(baseUrl.href, { waitUntil: 'networkidle' })
    .catch(() => undefined);
  if (response?.ok()) {
    loaded = true;
    break;
  }
  if (attempt < 12) await page.waitForTimeout(5000);
}
if (!loaded) throw new Error(`${baseUrl} did not return the portfolio`);

const expectedLinks = new Map([
  ['Work', '#work'],
  ['Approach', '#approach'],
  ['About', '#about'],
  ['Contact', '#contact'],
]);
const primaryNavigation = page.getByRole('navigation', {
  name: 'Primary navigation',
});
for (const [name, href] of expectedLinks) {
  const link = primaryNavigation.getByRole('link', { name, exact: true });
  if ((await link.getAttribute('href')) !== href) {
    throw new Error(`${name} does not link to ${href}`);
  }
  if ((await page.locator(href).count()) !== 1) {
    throw new Error(`${href} does not resolve to one production target`);
  }
}

for (const fragment of [
  '#project-ui-greenmetric',
  '#project-badminton-tournament-operations',
  '#project-blwfinbot',
  '#project-b-loom',
]) {
  const deepLink = new URL(baseUrl);
  deepLink.hash = fragment;
  await page.goto(deepLink.href, { waitUntil: 'networkidle' });
  await page.locator(fragment).waitFor({ state: 'visible' });
  if (page.url() !== deepLink.href) {
    throw new Error(`${fragment} did not remain addressable in production`);
  }
}

await page.goto(baseUrl.href, { waitUntil: 'networkidle' });
for (const [name, href] of [
  ['Email', 'mailto:brianbulawan5@gmail.com'],
  ['GitHub', 'https://github.com/bekindtomammals0'],
  ['LinkedIn', 'https://www.linkedin.com/in/bbulawan/'],
]) {
  const actual = await page
    .getByRole('link', { name, exact: true })
    .getAttribute('href');
  if (actual !== href) throw new Error(`${name} contact link is incorrect`);
}

const socialImage = await page
  .locator('meta[property="og:image"]')
  .getAttribute('content');
if (!socialImage) throw new Error('Open Graph image metadata is missing');
const socialResponse = await page.request.get(socialImage);
if (
  !socialResponse.ok() ||
  !socialResponse.headers()['content-type']?.includes('image/webp')
) {
  throw new Error('Social preview is not a working WebP image');
}
const faviconResponse = await page.request.get(
  new URL('favicon.svg', baseUrl).href,
);
if (!faviconResponse.ok()) throw new Error('Favicon is unavailable');

await browser.close();
console.log(`Production browser smoke check passed for ${baseUrl}`);
