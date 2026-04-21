import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ferrari SF90 Stradale | Showcase',
  description: 'Ferrari SF90 Stradale Scrollytelling Showcase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}
