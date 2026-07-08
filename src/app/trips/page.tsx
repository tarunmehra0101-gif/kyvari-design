'use client';
import dynamic from 'next/dynamic';

const Trips = dynamic(() => import('../../components/Trips').then(m => m.Trips), { ssr: false });

export default function Page() {
  return <Trips />;
}
