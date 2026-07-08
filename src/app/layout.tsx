import './globals.css';
import { Sidebar } from '../components/Sidebar';
import { Figtree, Fraunces } from 'next/font/google';
import Script from 'next/script';

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
        <div data-screen-label="Kyvari App" style={{
          display: 'flex',
          height: '100vh',
          overflow: 'hidden',
          background: '#ffffff', // Changed to pure white
          fontFamily: "var(--font-figtree), sans-serif",
          color: '#1d1f24'
        }}>
          <Sidebar />
          <main style={{flex:1,overflowY:"auto",position:"relative"}}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
