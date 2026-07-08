'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const Detail = dynamic(() => import('../../components/Detail').then(m => m.Detail), { ssr: false });
const PlaceDrawer = dynamic(() => import('../../components/PlaceDrawer').then(m => m.PlaceDrawer), { ssr: false });

export default function Page() {
  const [place, setPlace] = useState(null);
  
  return (
    <>
      <Detail openPlace={setPlace} />
      {place && <PlaceDrawer place={place} closeDrawer={() => setPlace(null)} />}
    </>
  );
}
