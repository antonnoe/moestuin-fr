import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'De Franse moestuin — jaarkalender per klimaatzone',
    short_name: 'Moestuin FR',
    description:
      'Wat te doen in de moestuin, maand per maand, voor jouw klimaatzone in Frankrijk.',
    start_url: '/?utm_source=pwa',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FBF8F3',
    theme_color: '#800000',
    lang: 'nl-NL',
    categories: ['lifestyle', 'education', 'food'],
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
