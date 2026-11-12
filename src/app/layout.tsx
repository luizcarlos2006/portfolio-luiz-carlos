import type { Metadata } from 'next';
import { Sora, JetBrains_Mono } from 'next/font/google';
import { perfil } from '@/data/perfil';
import './globals.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono-var', display: 'swap' });

const descricao = `Portfólio de ${perfil.nome}, ${perfil.cargo} em ${perfil.cidade}. Sites, automações e agentes de IA em produção.`;

export const metadata: Metadata = {
  metadataBase: new URL(perfil.site),
  title: `${perfil.nomeCurto} — ${perfil.cargo}`,
  description: descricao,
  openGraph: {
    title: `${perfil.nomeCurto} — ${perfil.cargo}`,
    description: descricao,
    url: perfil.site,
    siteName: `${perfil.nomeCurto} — Portfólio`,
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
