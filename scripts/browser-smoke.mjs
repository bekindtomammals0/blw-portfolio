import { chromium } from 'playwright';

const approvedContacts = new Map([
  ['Email', 'mailto:brianbulawan5@gmail.com'],
  ['GitHub', 'https://github.com/bekindtomammals0'],
  ['LinkedIn', 'https://www.linkedin.com/in/bbulawan/'],
]);

const expectedPrimaryLinks = new Map([
  ['Work', '#work'],
  ['Approach', '#approach'],
  ['About', '#about'],
  ['Contact', '#contact'],
]);

const expectedFeaturedLinks = new Map([
  ['Explore UI GreenMetric Coordination Dashboard', '#project-ui-greenmetric'],
  [
    'Explore Badminton Tournament Operations System',
    '#project-badminton-tournament-operations',
  ],
  ['Explore BLWFinBot', '#project-blwfinbot'],
  ['Explore B-Loom Class & Exam Scheduling System', '#project-b-loom'],
]);

export async function validatePortfolio(baseUrl, { retries = 1 } = {}) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    let loaded = false;
    for (let attempt = 1; attempt <= retries; attempt += 1) {
      const response = await page
        .goto(baseUrl.href, { waitUntil: 'networkidle' })
        .catch(() => undefined);
      if (response?.ok()) {
        loaded = true;
        break;
      }
      if (attempt < retries) await page.waitForTimeout(5000);
    }
    if (!loaded) throw new Error(`${baseUrl} did not return the portfolio`);

    const primaryNavigation = page.getByRole('navigation', {
      name: 'Primary navigation',
    });
    for (const [name, expectedHref] of expectedPrimaryLinks) {
      const link = primaryNavigation.getByRole('link', { name, exact: true });
      const href = await link.getAttribute('href');
      if (href !== expectedHref) {
        throw new Error(`${name} does not link to ${expectedHref}`);
      }
      if (!href?.startsWith('#') || (await page.locator(href).count()) !== 1) {
        throw new Error(`Primary navigation target ${href} is invalid`);
      }
    }

    for (const [name, expectedFragment] of expectedFeaturedLinks) {
      const link = page.getByRole('link', { name, exact: true });
      const fragment = await link.getAttribute('href');
      if (fragment !== expectedFragment) {
        throw new Error(`${name} does not link to ${expectedFragment}`);
      }
      const deepLink = new URL(baseUrl);
      deepLink.hash = fragment;
      await page.goto(deepLink.href, { waitUntil: 'networkidle' });
      await page.locator(fragment).waitFor({ state: 'visible' });
      if (page.url() !== deepLink.href) {
        throw new Error(`${fragment} did not remain addressable`);
      }
    }

    await page.goto(baseUrl.href, { waitUntil: 'networkidle' });
    for (const [name, expectedHref] of approvedContacts) {
      const actualHref = await page
        .getByRole('link', { name, exact: true })
        .getAttribute('href');
      if (actualHref !== expectedHref) {
        throw new Error(`${name} contact link is incorrect`);
      }
    }

    const socialImage = await page
      .locator('meta[property="og:image"]')
      .getAttribute('content');
    if (
      socialImage !==
      'https://bekindtomammals0.github.io/blw-portfolio/social-preview.webp'
    ) {
      throw new Error('Open Graph image metadata is incorrect');
    }
    const socialResponse = await page.request.get(
      new URL('social-preview.webp', baseUrl).href,
    );
    if (
      !socialResponse.ok() ||
      !socialResponse.headers()['content-type']?.includes('image/webp')
    ) {
      throw new Error('Social preview is not a working WebP image');
    }

    const faviconHref = await page
      .locator('link[rel="icon"]')
      .getAttribute('href');
    if (faviconHref !== '/blw-portfolio/favicon.svg') {
      throw new Error('Favicon metadata is incorrect');
    }
    const faviconResponse = await page.request.get(
      new URL('favicon.svg', baseUrl).href,
    );
    if (!faviconResponse.ok()) throw new Error('Favicon is unavailable');
  } finally {
    await browser.close();
  }
}
