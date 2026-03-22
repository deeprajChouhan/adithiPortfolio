import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Adithi Varma Sagi | Culinary Arts Student Portfolio',
  description:
    'A luxury-style chef portfolio for Adithi Varma Sagi, a Culinary Arts Management student presenting signature dishes, internships, education, and aspirations.',
  keywords: [
    'chef portfolio',
    'culinary student',
    'Adithi Varma Sagi',
    'culinary arts management',
    'aspiring chef',
  ],
  icons: {
    icon: '/branding/favicon.svg',
  },
  openGraph: {
    title: 'Adithi Varma Sagi | Culinary Portfolio',
    description:
      'Elegant chef portfolio showcasing student work, culinary philosophy, internship experience, and signature dishes.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} bg-cream font-sans text-charcoal antialiased`}>
        {children}
      </body>
    </html>
  );
}
