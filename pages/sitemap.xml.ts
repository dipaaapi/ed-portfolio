import type { GetServerSideProps } from 'next'
import { absoluteUrl, routes } from '../lib/site'

// Served at /sitemap.xml, built from lib/site.ts so new pages only need adding there.
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const lastmod = new Date().toISOString().split('T')[0];
    const urls = routes.map((path) => `  <url>\n    <loc>${absoluteUrl(path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`).join('\n');

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.write(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
    res.end();
    return { props: {} };
};

const Sitemap = () => null;
export default Sitemap;
