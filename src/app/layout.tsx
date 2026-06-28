import type { Metadata, Viewport } from 'next';
import { Poppins, Mulish, Cormorant_Garamond } from 'next/font/google';
import Shell from '@/components/Shell';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mulish',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'De Franse moestuin — jaarkalender per klimaatzone',
  description:
    'Wat te doen in de moestuin, maand per maand, voor jouw klimaatzone in Frankrijk. Van Bretagne tot Provence, van vlakland tot bergstreek.',
  applicationName: 'Franse moestuin',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Moestuin FR',
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: 'De Franse moestuin',
    description: 'Maandkalender voor de moestuin in Frankrijk, per klimaatzone.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export const viewport: Viewport = {
  themeColor: '#800000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${poppins.variable} ${mulish.variable} ${cormorant.variable}`}>
      <body className="bg-cream text-ink font-body antialiased">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
