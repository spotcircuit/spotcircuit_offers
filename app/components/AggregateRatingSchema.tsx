
import Script from 'next/script';

// Valid item types according to Google's guidelines
type ValidItemType = 
  | 'Book'
  | 'Course'
  | 'CreativeWorkSeason'
  | 'CreativeWorkSeries'
  | 'Episode'
  | 'Event'
  | 'Game'
  | 'HowTo'
  | 'LocalBusiness'
  | 'MediaObject'
  | 'Movie'
  | 'MusicPlaylist'
  | 'MusicRecording'
  | 'Organization'
  | 'Product'
  | 'Recipe'
  | 'Service'
  | 'SoftwareApplication';

interface AggregateRatingSchemaProps {
  itemName: string;
  itemType: ValidItemType; // Using the strict type for better validation
  ratingValue: number;
  reviewCount: number;
  ratingCount?: number; // Google requires either reviewCount or ratingCount
  bestRating?: number;
  worstRating?: number;
  description?: string;
  url?: string;
  image?: string;
  // Additional fields for LocalBusiness or Organization
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  priceRange?: string;
}

/**
 * AggregateRatingSchema component for adding aggregate rating schema markup
 * This follows Google's guidelines for review snippets
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data/review-snippet
 */
export default function AggregateRatingSchema({
  itemName,
  itemType,
  ratingValue,
  reviewCount,
  ratingCount,
  bestRating = 5,
  worstRating = 1,
  description,
  url,
  image,
  address,
  telephone,
  priceRange
}: AggregateRatingSchemaProps) {
  // Ensure rating value is within range
  const safeRatingValue = Math.max(worstRating, Math.min(bestRating, ratingValue));
  
  // Format the rating value with a dot instead of comma for decimals
  const formattedRatingValue = typeof safeRatingValue === 'number' ? 
    safeRatingValue.toString().replace(',', '.') : 
    safeRatingValue;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': itemType,
    name: itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: formattedRatingValue,
      reviewCount: reviewCount,
      ...(ratingCount && { ratingCount }),
      bestRating: bestRating,
      worstRating: worstRating
    },
    ...(description && { description }),
    ...(url && { url }),
    ...(image && { image }),
    ...(address && { 
      address: {
        '@type': 'PostalAddress',
        ...address
      }
    }),
    ...(telephone && { telephone }),
    ...(priceRange && { priceRange })
  };

  return (
    <Script id="aggregate-rating-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema, null, 0)}
    </Script>
  );
}
