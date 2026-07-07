/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { Trips } from './components/Trips';
import { Detail } from './components/Detail';
import { PlaceDrawer } from './components/PlaceDrawer';
import { Library } from './components/Library';
import { Analytics } from './components/Analytics';
import { Settings } from './components/Settings';

export default function App() {
  const [view, setView] = useState('home');
  const [place, setPlace] = useState(null);

  return (
    <div data-screen-label="Kyvari App" style={{
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      background: '#ffffff',
      fontFamily: "'Figtree', sans-serif",
      color: '#0f1730'
    }}>
      <Sidebar view={view} setView={setView} />
      
      <main style={{flex:1,overflowY:"auto",position:"relative"}}>
        {view === 'home' && <Home setView={setView} />}
        {view === 'trips' && <Trips setView={setView} />}
        {view === 'detail' && <Detail setView={setView} openPlace={setPlace} />}
        {view === 'library' && <Library setView={setView} />}
        {view === 'analytics' && <Analytics setView={setView} />}
        {view === 'settings' && <Settings setView={setView} />}
      </main>
      {place && <PlaceDrawer place={place} closeDrawer={() => setPlace(null)} />}
    </div>
  );
}
