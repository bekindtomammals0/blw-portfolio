import process from 'node:process';

const baseUrl = new URL(
  process.argv[2] ?? 'https://bekindtomammals0.github.io/blw-portfolio/',
);

async function fetchRequired(url, expectedType) {
  let response;
  for (let attempt = 1; attempt <= 12; attempt += 1) {
    response = await fetch(url, { redirect: 'follow' }).catch(() => undefined);
    if (response?.ok) break;
    if (attempt < 12) await new Promise((resolve) => setTimeout(resolve, 5000));
  }
  if (!response?.ok) {
    throw new Error(`${url} returned ${response?.status ?? 'no response'}`);
  }
  if (
    expectedType &&
    !response.headers.get('content-type')?.includes(expectedType)
  ) {
    throw new Error(`${url} did not return ${expectedType}`);
  }
  return response;
}

const pageResponse = await fetchRequired(baseUrl, 'text/html');
const html = await pageResponse.text();
for (const value of [
  'Brian Christopher Bulawan',
  'rel="canonical"',
  'property="og:image"',
]) {
  if (!html.includes(value))
    throw new Error(`Production HTML is missing ${value}`);
}

const assetPaths = [...html.matchAll(/(?:src|href)="([^"#?]+)"/g)]
  .map((match) => new URL(match[1], baseUrl))
  .filter((url) => url.origin === baseUrl.origin);
const scripts = [];
for (const assetUrl of assetPaths) {
  const response = await fetchRequired(assetUrl);
  if (assetUrl.pathname.endsWith('.js')) scripts.push(await response.text());
}

await fetchRequired(new URL('social-preview.webp', baseUrl), 'image/webp');
await fetchRequired(new URL('favicon.svg', baseUrl), 'image/svg+xml');
for (const fragment of [
  '#work',
  '#approach',
  '#about',
  '#contact',
  '#project-ui-greenmetric',
  '#project-badminton-tournament-operations',
  '#project-blwfinbot',
  '#project-b-loom',
  'brianbulawan5@gmail.com',
  'https://github.com/bekindtomammals0',
  'https://www.linkedin.com/in/bbulawan/',
]) {
  if (!scripts.some((script) => script.includes(fragment))) {
    throw new Error(`Production bundle is missing ${fragment}`);
  }
}

for (const fragment of ['#work', '#project-b-loom', '#contact']) {
  const deepLink = new URL(baseUrl);
  deepLink.hash = fragment;
  await fetchRequired(deepLink, 'text/html');
}

console.log(`Production smoke check passed for ${baseUrl}`);
