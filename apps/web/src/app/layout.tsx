import type { Metadata } from 'next';
import { Nunito, Plus_Jakarta_Sans } from 'next/font/google';
import { QueryProvider } from '@/components/providers/query-provider';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
});

const nunito = Nunito({
  variable: '--font-nunito',
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
      className={`${jakarta.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-ink">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}