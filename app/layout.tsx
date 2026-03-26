import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'PawCatDono — Help Save Stray Cats',
  description: 'A community-driven initiative to rescue and care for stray cats through crypto donations. Every cent goes directly to food, shelter, and medical care.',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  themeColor: '#f8fafc',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
