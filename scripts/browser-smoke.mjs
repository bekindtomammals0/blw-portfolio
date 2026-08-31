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
  ['Explore BLWFinBot', '#project-blwfinbot'],
  [
    'Explore Badminton Tournament Operations System',
    '#project-badminton-tournament-operations',
  ],
  ['Explore B-Loom Class & Exam Scheduling System', '#project-b-loom'],
  ['Explore UI GreenMetric Coordination Dashboard', '#project-ui-greenmetric'],
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

    const responsiveWidths = [320, 375, 768, 1280];
    const zoomedWidths = responsiveWidths.map((width) => Math.ceil(width / 2));
    for (const width of [...zoomedWidths, ...responsiveWidths]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(baseUrl.href, { waitUntil: 'networkidle' });

      const layout = await page.evaluate(() => {
        const header = document.querySelector('.site-header');
        const navigation = header?.querySelector('nav');
        const links = [...(navigation?.querySelectorAll('a') ?? [])];
        const headerOffset = Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--header-offset',
          ),
        );

        return {
          hasOverflow:
            document.documentElement.scrollWidth >
            document.documentElement.clientWidth,
          headerHeight: header?.getBoundingClientRect().height ?? 0,
          headerOffset,
          navigationWidth: navigation?.getBoundingClientRect().width ?? 0,
          narrowestTarget: Math.min(
            ...links.map((link) => link.getBoundingClientRect().height),
          ),
          overflowers: [...document.querySelectorAll('body *')]
            .filter(
              (element) =>
                element.getBoundingClientRect().right >
                document.documentElement.clientWidth + 1,
            )
            .slice(0, 5)
            .map(
              (element) =>
                `${element.tagName.toLowerCase()}.${element.className}`,
            ),
        };
      });

      if (layout.hasOverflow) {
        throw new Error(
          `Page overflows horizontally at ${width}px: ${layout.overflowers.join(', ')}`,
        );
      }
      if (width <= 768 && layout.navigationWidth < width - 48) {
        throw new Error(`Primary navigation does not reflow at ${width}px`);
      }
      if (layout.narrowestTarget < 44) {
        throw new Error(
          `Primary navigation targets are too small at ${width}px`,
        );
      }
      if (Math.abs(layout.headerOffset - layout.headerHeight) > 1) {
        throw new Error(`Sticky-header offset is stale at ${width}px`);
      }

      const responsiveDeepLink = new URL(baseUrl);
      responsiveDeepLink.hash = '#project-blwfinbot';
      await page.goto(responsiveDeepLink.href, { waitUntil: 'networkidle' });
      const [responsiveHeader, responsiveTarget] = await Promise.all([
        page.locator('.site-header').boundingBox(),
        page.locator('#project-blwfinbot').boundingBox(),
      ]);
      if (
        responsiveHeader &&
        responsiveTarget &&
        responsiveTarget.y < responsiveHeader.y + responsiveHeader.height - 1
      ) {
        throw new Error(`Responsive deep link is obscured at ${width}px`);
      }
    }

    await page.setViewportSize({ width: 320, height: 900 });
    await page.goto(baseUrl.href, { waitUntil: 'networkidle' });
    await page.keyboard.press('Tab');
    if (
      (await page.locator(':focus').textContent())?.trim() !== 'Skip to content'
    ) {
      throw new Error('Skip link is not first in the keyboard order');
    }
    await page.keyboard.press('Enter');
    if ((await page.locator(':focus').getAttribute('id')) !== 'main-content') {
      throw new Error('Skip link does not move focus past the sticky header');
    }

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(baseUrl.href, { waitUntil: 'networkidle' });
    const reducedMotionStyles = await page.evaluate(() => ({
      scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
      transitionDuration: getComputedStyle(document.querySelector('.nav-link'))
        .transitionDuration,
    }));
    if (
      reducedMotionStyles.scrollBehavior !== 'auto' ||
      reducedMotionStyles.transitionDuration === '0.16s'
    ) {
      throw new Error('Reduced-motion treatment is not active');
    }
    await page.emulateMedia({ reducedMotion: 'no-preference' });

    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(baseUrl.href, { waitUntil: 'networkidle' });

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
      const [headerBounds, targetBounds] = await Promise.all([
        page.locator('.site-header').boundingBox(),
        page.locator(fragment).boundingBox(),
      ]);
      if (
        headerBounds &&
        targetBounds &&
        targetBounds.y < headerBounds.y + headerBounds.height - 1
      ) {
        throw new Error(`${fragment} is obscured by the sticky header`);
      }
    }

    await page.setViewportSize({ width: 320, height: 900 });
    await page.goto(baseUrl.href, { waitUntil: 'networkidle' });
    await page
      .getByRole('link', { name: 'Explore BLWFinBot', exact: true })
      .click();
    await page.goBack();
    await page.goForward();
    if (!page.url().endsWith('#project-blwfinbot')) {
      throw new Error('Project deep link did not survive Back and Forward');
    }
    const [historyHeader, historyTarget] = await Promise.all([
      page.locator('.site-header').boundingBox(),
      page.locator('#project-blwfinbot').boundingBox(),
    ]);
    if (
      historyHeader &&
      historyTarget &&
      historyTarget.y < historyHeader.y + historyHeader.height - 1
    ) {
      throw new Error('History-restored deep link is obscured on mobile');
    }

    const featuredCards = page.locator('#work article');
    const caseStudies = page.locator('#case-studies article');
    const expectedNames = [...expectedFeaturedLinks.keys()].map((name) =>
      name.replace('Explore ', ''),
    );
    if (
      JSON.stringify(
        await featuredCards
          .getByRole('heading', { level: 3 })
          .allTextContents(),
      ) !== JSON.stringify(expectedNames) ||
      JSON.stringify(
        await caseStudies.getByRole('heading', { level: 3 }).allTextContents(),
      ) !== JSON.stringify(expectedNames)
    ) {
      throw new Error(
        'Featured cards and case studies do not share the approved order',
      );
    }
    for (const card of await featuredCards.all()) {
      for (const label of ['System', 'Brian’s contribution', 'Outcome']) {
        if ((await card.getByText(label, { exact: true }).count()) !== 1) {
          throw new Error(`Featured card is missing ${label}`);
        }
      }
      for (const summary of await card
        .locator('.project-card-summary dd')
        .allTextContents()) {
        if (summary.trim().length < 20) {
          throw new Error('Featured card recruiter information is incomplete');
        }
      }
    }

    await page.goto(baseUrl.href, { waitUntil: 'networkidle' });
    const hero = page.locator('[aria-labelledby="hero-title"]');
    for (const name of ['GitHub', 'LinkedIn']) {
      const expectedHref = approvedContacts.get(name);
      if (
        (await hero
          .getByRole('link', { name, exact: true })
          .getAttribute('href')) !== expectedHref
      ) {
        throw new Error(`Hero ${name} link is incorrect`);
      }
    }
    const contactSection = page.locator('#contact');
    for (const [name, expectedHref] of approvedContacts) {
      const actualHref = await contactSection
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
