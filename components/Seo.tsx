import Head from 'next/head'
import { absoluteUrl, site } from '../lib/site'

type SeoProps = {
    title: string;
    description: string;
    path: string;
    image?: string;
    // Extra JSON-LD objects for this page (the Person schema is added on the home page).
    jsonLd?: object;
};

// Title, description, canonical, Open Graph and Twitter tags for one page.
const Seo = ({ title, description, path, image = site.image, jsonLd }: SeoProps) => {
    const fullTitle = path === '/' ? title : `${title} | ${site.tagline}`;
    const url = absoluteUrl(path);
    const img = absoluteUrl(image);

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={site.name} />
            <meta property="og:locale" content={site.locale} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={img} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={img} />

            {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
        </Head>
    );
};

export default Seo;
