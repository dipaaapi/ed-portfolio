import type { GetServerSideProps } from 'next'
import { absoluteUrl } from '../lib/site'

// Served at /robots.txt so the sitemap link always uses the configured domain.
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.write(`User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`);
    res.end();
    return { props: {} };
};

const Robots = () => null;
export default Robots;
