'use client';
import dynamic from 'next/dynamic';

const Settings = dynamic(() => import('../../components/Settings').then(m => m.Settings), { ssr: false });

export default function Page() {
  return <Settings />;
}
