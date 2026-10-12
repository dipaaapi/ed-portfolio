// Public site settings used for SEO. Set NEXT_PUBLIC_SITE_URL to the production domain
// (e.g. https://edcabrera.dev) so canonical links, Open Graph images and the sitemap use absolute URLs.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

export const site = {
    name: 'Ed Cabrera Portfolio',
    author: 'John Edward Cabrera',
    tagline: 'ElevatED by Code | IllustratED by Design',
    description: 'Portfolio of John Edward Cabrera: computer instructor, web and game developer, and UI/UX designer from Camarines Sur, Philippines.',
    image: '/brand/og-image.png',
    locale: 'en_PH',
    sameAs: [
        'https://github.com/dipaaapi',
        'https://www.linkedin.com/in/john-edward-cabrera-956bba147/',
        'https://www.facebook.com/MasterEd28/',
    ],
};

// Every indexable route, used by the sitemap.
export const routes = ['/', '/projects', '/skills', '/workxp', '/education', '/certifications', '/aboutme', '/personal', '/hobbies', '/specialthanks'];

export const absoluteUrl = (path: string) => (/^https?:/.test(path) ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`);
