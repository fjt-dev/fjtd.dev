import type { Metadata } from 'next';
import { M_PLUS_1 } from 'next/font/google';
import './globals.css';

const mPlus1 = M_PLUS_1({
  variable: '--font-m-plus-1',
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false
});

export const metadata: Metadata = {
  title: 'fjtd.dev | Portfolio',
  description: 'New-Bee Frontend Engineer | Student',
  openGraph: {
    title: 'fjtd.dev',
    description: 'New-Bee Frontend Engineer | Student',
    url: 'https://fjtd.dev',
    siteName: 'fjtd.dev'
  },
  twitter: {
    title: 'fjtd.dev',
    description: 'New-Bee Frontend Engineer | Student',
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
      <body className={`${mPlus1.variable} antialiased`}>{children}</body>
    </html>
  );
}
