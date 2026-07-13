import './globals.css';
import { Figtree, Fraunces } from 'next/font/google';
import Script from 'next/script';
import ClientWrapper from './ClientWrapper';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });

export const metadata = {
  title: 'Kyvari Design',
  description: 'Kyvari Design Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${fraunces.variable}`}>
      <body style={{ margin: 0 }}>
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
