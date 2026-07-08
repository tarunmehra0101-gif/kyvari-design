'use client';
import dynamic from 'next/dynamic';

const Library = dynamic(() => import('../../components/Library').then(m => m.Library), { ssr: false });

export default function Page() {
  return <Library />;
}
