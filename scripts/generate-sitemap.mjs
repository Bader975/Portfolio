import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const siteUrl = 'https://www.bader-alyami.com';
const routes = ['/', '/cv'];
const outputFile = join(process.cwd(), 'dist', 'analog', 'public', 'sitemap.xml');
const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

await mkdir(dirname(outputFile), { recursive: true });
await writeFile(outputFile, sitemap, 'utf8');
