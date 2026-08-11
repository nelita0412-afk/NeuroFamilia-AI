import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import { QueryProvider } from '@/components/providers/query-provider';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
});

const space = Space_Grotesk({
  variable: '--font-space',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NeuroFamilia AI',
  description: 'Plataforma oficial de acompanamiento familiar y desarrollo integral',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${space.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-slate-900">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
