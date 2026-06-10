import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'fjtd.dev | Portfolio',
  description: 'Student | Aspiring Web Frontend Engineer',
  openGraph: {
    title: 'fjtd.dev',
    description: 'Student | Aspiring Web Frontend Engineer',
    url: 'https://fjtd.dev',
    siteName: 'fjtd.dev'
  },
  twitter: {
    title: 'fjtd.dev',
    description: 'Student | Aspiring Web Frontend Engineer',
    creator: '@fjtd_dev'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
