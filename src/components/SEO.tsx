import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  structuredData?: object;
}

const SITE_NAME = 'Tsamaya - Cashless Transit Botswana';
const DEFAULT_IMAGE = '/assets/legaemobile/LOGOS WORKFILE (48) 1.png';
const BASE_URL = 'https://tsamaya.co.bw';

export default function SEO({
  title,
  description,
  keywords,
  url,
  image = DEFAULT_IMAGE,
  type = 'website',
  structuredData,
}: SEOProps) {
  const fullTitle = title.includes('Tsamaya') ? title : `${title} | Tsamaya`;
  const canonicalUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="theme-color" content="#12B5B0" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_BW" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Geo Tags for Botswana */}
      <meta name="geo.region" content="BW" />
      <meta name="geo.country" content="Botswana" />
      <meta name="geo.placename" content="Gaborone" />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
