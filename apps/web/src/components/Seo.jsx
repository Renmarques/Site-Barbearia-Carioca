import React from 'react';
import { Helmet } from 'react-helmet';

const SITE_NAME = 'Barbearia Carioca';

const LOCATIONS = [
  {
    '@type': 'HairSalon',
    '@id': '#ipanema',
    name: 'Barbearia Carioca Ipanema',
    telephone: '+55 21 99405-0680',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Visconde de Pirajá, 395, sobreloja',
      addressLocality: 'Rio de Janeiro',
      addressRegion: 'RJ',
      postalCode: '22410-003',
      addressCountry: 'BR',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '18:00' },
    ],
  },
  {
    '@type': 'HairSalon',
    '@id': '#leblon',
    name: 'Barbearia Carioca Leblon',
    telephone: '+55 21 97692-1084',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua General Venâncio Flores, 300, Loja B',
      addressLocality: 'Rio de Janeiro',
      addressRegion: 'RJ',
      postalCode: '22441-015',
      addressCountry: 'BR',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '17:00' },
    ],
  },
];

export default function Seo({ title, description, image = '/images/barbearia/og.png', path = '/', structuredData = [] }) {
  const configuredOrigin = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '');
  const origin = configuredOrigin || (typeof window !== 'undefined' ? window.location.origin : '');
  const canonical = `${origin}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${origin}${image}`;
  const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: origin,
    inLanguage: 'pt-BR',
  };
  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': LOCATIONS.map((location) => ({
      ...location,
      url: canonical,
      image: imageUrl,
      priceRange: '$$',
      sameAs: ['https://www.instagram.com/barbeariacariocaoficial/'],
    })),
  };

  return (
    <Helmet defer={false}>
      <html lang="pt-BR" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Barbearia Carioca — Ipanema e Leblon" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {[websiteSchema, graphSchema, ...schemas].filter(Boolean).map((schema, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
