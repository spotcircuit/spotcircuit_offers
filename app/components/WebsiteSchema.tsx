import React from 'react';
import Script from 'next/script';

export default function WebsiteSchema() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.spotcircuit.com/#website',
    name: 'SpotCircuit',
    url: 'https://www.spotcircuit.com',
    description: 'AI-First SEO & LLM Optimization Platform',
    publisher: {
      '@id': 'https://www.spotcircuit.com/#organization'
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.spotcircuit.com/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    ]
  };

  return (
    <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(websiteSchema)}
    </Script>
  );
}