import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import '../styles/mobile-optimizations.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import AuthProvider from '@/components/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.maintafox.systems'),
  title: {
    default: 'Maintafox — CMMS for Proactive Maintenance',
    template: '%s | Maintafox',
  },
  description:
    "Maintafox is Algeria's locally supported CMMS. Centralize assets, work orders, PMs, inventory, and analytics to shift from reactive fixes to proactive maintenance.",
  openGraph: {
    title: 'Maintafox — CMMS for Proactive Maintenance',
    description:
      'Centralize assets, work orders, PMs, inventory, and analytics. Locally installed and supported in Algeria.',
    url: 'https://www.maintafox.systems',
    siteName: 'Maintafox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maintafox — CMMS for Proactive Maintenance',
    description:
      'Centralize assets, work orders, PMs, inventory, and analytics. Locally installed and supported in Algeria.',
  },
  alternates: { canonical: '/' },
};

// Force desktop-like layout on mobile by using a fixed viewport width.
// This makes small devices render the desktop breakpoints, just scaled down.
export const viewport: Viewport = {
  width: '1280',
  // Let browsers auto-scale to fit; avoid locking zoom for accessibility.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
