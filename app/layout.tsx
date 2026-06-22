import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const spaceMono = Space_Mono({
  variable: '--font-mono',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Hassan Ali | Full Stack Developer',
  description: 'Portfolio of Muhammad Hassan Ali - Full Stack Developer specializing in Next.js, React, and modern web development',
  keywords: [
    'Muhammad Hassan Ali',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Software Engineer',
    'Computer Engineering',
    'SSUET Karachi',
    'Web Developer Portfolio'
  ],
  authors: [{ name: 'Muhammad Hassan Ali' }],
  openGraph: {
    title: 'Muhammad Hassan Ali | Full Stack Developer',
    description: 'Portfolio of Muhammad Hassan Ali - Full Stack Developer specializing in Next.js, React, and modern web development',
    url: 'https://mhassan-ali.vercel.app',
    siteName: 'Hassan Portfolio',
    images: [
      {
        url: '/assets/images/screenshots/projects-hover-v2.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Hassan Ali Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Hassan Ali | Full Stack Developer',
    description: 'Portfolio of Muhammad Hassan Ali - Full Stack Developer specializing in Next.js, React, and modern web development',
    images: ['/assets/images/screenshots/projects-hover-v2.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
