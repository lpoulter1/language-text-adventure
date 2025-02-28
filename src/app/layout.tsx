import '../index.css';
import { Inter, Orbitron } from 'next/font/google';
import type { Metadata } from 'next';

// Configure Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// Configure Orbitron font - important for cyber/futuristic look
const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
  // Optionally preload specific weights
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Language Text Adventure',
  description: 'A text adventure for language learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
