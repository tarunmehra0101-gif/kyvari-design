"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from '../components/Sidebar';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Pages with their own navigation - don't wrap with old sidebar
  const standalonePages = ['/awesomic', '/mindtrip', '/home2', '/dashboard', '/detail2', '/preview2', '/analytics2', '/trips2', '/settings2', '/library2'];
  if (standalonePages.some(p => pathname?.startsWith(p))) {
    return <>{children}</>;
  }

  // Otherwise, show the default dashboard layout with sidebar
  return (
    <div data-screen-label="Kyvari App" style={{
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      background: '#ffffff',
      fontFamily: "var(--font-figtree), sans-serif",
      color: '#1d1f24'
    }}>
      <Sidebar />
      <main style={{flex:1,overflowY:"auto",position:"relative"}}>
        {children}
      </main>
    </div>
  );
}
