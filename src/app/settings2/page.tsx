'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  User, Mail, Building, CreditCard, Palette, Image,
  Link2, Eye, Save, Bell, Shield, Globe, Smartphone,
  Home, FileText, Search, BarChart3, Settings, ChevronLeft, ChevronRight
} from 'lucide-react';

/* ─── Cosmic Font ─── */
const FONT_CSS = `
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Semibold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Regular.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Bold.woff2) format('woff2');font-weight:800;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Medium.woff2) format('woff2');font-weight:600;font-style:normal;font-display:swap}
@font-face{font-family:Cosmic;src:url(https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Font/Cosmica-Book.woff2) format('woff2');font-weight:400;font-style:normal;font-display:swap}
`;

/* ─── Kyvari Logo ─── */
function KyvariLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="kyGradSettings" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a5c"/>
          <stop offset="100%" stopColor="#e8543f"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#kyGradSettings)"/>
      <path d="M8 22L22 10c1.2-1.3 3-1.3 3.7-.5.7.8.7 2.5-.5 3.7L10.2 24z" fill="white"/>
      <circle cx="10.2" cy="23" r="1.5" fill="#ffe08a"/>
    </svg>
  );
}

/* ─── Nav Item ─── */
function NavItem({ icon: Icon, label, href, active, collapsed }: { icon: any; label: string; href: string; active?: boolean; collapsed?: boolean }) {
  return (
    <Link href={href} style={{
      display: "flex", alignItems: "center", gap: collapsed ? "0" : "12px",
      padding: collapsed ? "12px" : "12px 16px",
      borderRadius: "12px", textDecoration: "none",
      color: active ? "#e8543f" : "#52525b",
      background: active ? "#fef2ef" : "transparent",
      fontWeight: active ? 600 : 400, fontSize: "14px",
      transition: "all 0.2s", justifyContent: collapsed ? "center" : "flex-start"
    }}>
      <Icon size={20} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}

export default function SettingsPage() {
  const [primaryColor, setPrimaryColor] = useState('#e8543f');
  const [secondaryColor, setSecondaryColor] = useState('#ffc24d');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const s = document.createElement('style');
    s.textContent = FONT_CSS;
    document.head.appendChild(s);
    setMounted(true);
    return () => { document.head.removeChild(s); };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #09090b; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .ky-settings-page { font-family: Cosmic, system-ui, sans-serif; background: #f8f8fa; min-height: 100vh; color: #09090b; display: flex; }
        .ky-settings-page * { box-sizing: border-box; }

        /* Cards */
        .ky-card { background: #fff; border: 1px solid #ececee; border-radius: 24px; padding: 28px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
        .ky-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
        .ky-card-title { font-size: 18px; font-weight: 700; display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }

        /* Form */
        .ky-form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .ky-label { display: block; font-size: 12px; font-weight: 600; color: #71717a; margin-bottom: 8px; text-transform: uppercase; letter-spacing: .05em; }
        .ky-input { width: 100%; padding: 12px 16px; border: 1px solid #ececee; border-radius: 12px; font-size: 14px; font-family: Cosmic, sans-serif; background: #fafafa; outline: none; transition: all .2s; }
        .ky-input:focus { border-color: #e8543f; box-shadow: 0 0 0 3px rgba(232,84,63,.1); }
        .ky-input:disabled { opacity: .6; }

        /* Pro Card */
        .ky-pro-card { background: linear-gradient(135deg, #1a1a2e, #16213e); border-radius: 20px; padding: 28px; margin-top: 24px; color: #fff; }
        .ky-pro-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,.1); padding: 6px 14px; border-radius: 100px; font-size: 11px; font-weight: 700; letter-spacing: .06em; margin-bottom: 16px; }
        .ky-pro-title { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
        .ky-pro-desc { font-size: 14px; color: rgba(255,255,255,.6); line-height: 1.6; margin-bottom: 24px; }
        .ky-pro-footer { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px; }
        .ky-pro-credits-label { font-size: 13px; margin-bottom: 8px; opacity: .8; }
        .ky-pro-bar { height: 6px; background: rgba(255,255,255,.15); border-radius: 3px; width: 220px; overflow: hidden; }
        .ky-pro-bar-fill { height: 100%; width: 24%; background: linear-gradient(90deg, #ff8a5c, #e8543f); border-radius: 3px; }
        .ky-pro-remaining { font-size: 12px; color: #22c55e; margin-top: 6px; font-weight: 600; }
        .ky-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 12px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all .2s; text-decoration: none; font-family: Cosmic, sans-serif; border: none; }
        .ky-btn-white { background: rgba(255,255,255,.1); color: #fff; border: 1px solid rgba(255,255,255,.2); }
        .ky-btn-white:hover { background: rgba(255,255,255,.2); }

        /* Brand */
        .ky-brand-row { display: flex; gap: 24px; margin-bottom: 24px; flex-wrap: wrap; }
        .ky-brand-logo-upload { flex: 1; min-width: 260px; background: #fafafa; padding: 16px; border-radius: 16px; border: 1px dashed #d4d4d8; display: flex; align-items: center; gap: 16px; }
        .ky-upload-box { width: 56px; height: 56px; border-radius: 12px; border: 1px dashed #d4d4d8; display: flex; align-items: center; justify-content: center; background: #fff; }
        .ky-upload-btn { padding: 8px 14px; border-radius: 10px; background: #fff; border: 1px solid #ececee; font-size: 13px; font-weight: 500; cursor: pointer; font-family: Cosmic, sans-serif; transition: all .2s; }
        .ky-upload-btn:hover { border-color: #09090b; }
        .ky-upload-hint { font-size: 11px; color: #a1a1aa; margin-top: 4px; }
        .ky-color-group { flex: 1; min-width: 200px; }
        .ky-color-row { display: flex; gap: 16px; }
        .ky-color-picker { flex: 1; background: #fafafa; padding: 10px 14px; border-radius: 12px; border: 1px solid #ececee; display: flex; align-items: center; gap: 10px; }
        .ky-color-input { width: 26px; height: 26px; border-radius: 8px; border: none; cursor: pointer; background: none; }
        .ky-color-hex { font-size: 13px; font-family: ui-monospace, monospace; }

        /* Domain */
        .ky-domain-card { background: linear-gradient(135deg, #fff, #f8faf9); position: relative; overflow: hidden; }
        .ky-domain-badge { position: absolute; top: 16px; right: 16px; display: flex; align-items: center; gap: 4px; background: #dcfce7; color: #16a34a; padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 600; border: 1px solid #bbf7d0; }
        .ky-domain-dot { width: 6px; height: 6px; border-radius: 50%; background: #16a34a; }

        /* Preview */
        .ky-preview { background: #fafafa; padding: 20px; border-radius: 16px; border: 1px solid #ececee; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
        .ky-preview-label { font-size: 11px; font-weight: 600; color: #a1a1aa; text-transform: uppercase; letter-spacing: .1em; }
        .ky-preview-hint { font-size: 13px; color: #71717a; margin-top: 2px; }
        .ky-preview-btn { background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor}); color: #fff; padding: 12px 24px; border-radius: 12px; font-size: 14px; font-weight: 600; border: none; cursor: pointer; font-family: Cosmic, sans-serif; box-shadow: 0 6px 14px rgba(0,0,0,.1); transition: all .2s; }
        .ky-preview-btn:hover { transform: translateY(-2px); }

        /* Save */
        .ky-save-btn { background: linear-gradient(135deg, #ff8a5c, #e8543f); color: #fff; padding: 14px 32px; border-radius: 14px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; font-family: Cosmic, sans-serif; box-shadow: 0 8px 20px rgba(232,84,63,.3); transition: all .2s; }
        .ky-save-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(232,84,63,.4); }

        @media (max-width: 768px) { .ky-form-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="ky-settings-page">

        {/* ─── LEFT SIDEBAR ─── */}
        <aside style={{
          width: sidebarCollapsed ? "72px" : "260px", minHeight: "100vh", background: "#fff",
          borderRight: "1px solid #ececee", padding: "20px", display: "flex", flexDirection: "column",
          position: "fixed", left: 0, top: 0, bottom: 0, transition: "width 0.3s", zIndex: 100,
          boxShadow: "4px 0 20px rgba(0,0,0,0.03)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
            <KyvariLogo size={40} />
            {!sidebarCollapsed && <span style={{ fontSize: "20px", fontWeight: 700 }}>Kyvari</span>}
          </div>
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} style={{
            position: "absolute", right: "-12px", top: "80px", width: "24px", height: "24px", borderRadius: "50%",
            background: "#fff", border: "1px solid #ececee", color: "#71717a", cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", zIndex: 101, boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
          }}>
            {sidebarCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
          <nav style={{ flex: 1 }}>
            <NavItem icon={Home} label="Dashboard" href="/dashboard" collapsed={sidebarCollapsed} />
            <NavItem icon={FileText} label="Trips" href="/trips2" collapsed={sidebarCollapsed} />
            <NavItem icon={Search} label="Library" href="/library2" collapsed={sidebarCollapsed} />
            <NavItem icon={BarChart3} label="Analytics" href="/analytics2" collapsed={sidebarCollapsed} />
            <div style={{ marginTop: "24px" }}>
              <NavItem icon={Settings} label="Settings" href="/settings2" active collapsed={sidebarCollapsed} />
            </div>
          </nav>
          <div style={{ paddingTop: "20px", borderTop: "1px solid #ececee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: sidebarCollapsed ? "center" : "flex-start" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #ff8a5c, #e8543f)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px", color: "#fff" }}>WL</div>
              {!sidebarCollapsed && (<div><div style={{ fontSize: "14px", fontWeight: 600 }}>Wanderlust</div><div style={{ fontSize: "12px", color: "#22c55e" }}>Pro Plan</div></div>)}
            </div>
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main style={{ flex: 1, marginLeft: sidebarCollapsed ? "72px" : "260px", transition: "margin 0.3s", padding: "32px", background: "#f8f8fa", minHeight: "100vh" }}>

          {/* Page Header */}
          <div style={{ marginBottom: "32px", animation: "fadeUp 0.4s ease-out" }}>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "4px" }}>Settings</h1>
            <p style={{ fontSize: "15px", color: "#71717a" }}>Manage your account, branding, and preferences.</p>
          </div>

          {/* Business Profile */}
          <div className="ky-card">
            <h2 className="ky-card-title"><User size={20} /> Business Profile</h2>
            <div className="ky-form-grid">
              <div>
                <label className="ky-label">Business Name</label>
                <input type="text" className="ky-input" defaultValue="Wanderlust Travel Co." />
              </div>
              <div>
                <label className="ky-label">Business Email</label>
                <input type="email" className="ky-input" defaultValue="hello@wanderlust.co" disabled />
              </div>
            </div>

            {/* Pro Card */}
            <div className="ky-pro-card">
              <div className="ky-pro-badge">⭐ PRO TIER ACTIVE</div>
              <h3 className="ky-pro-title">Wanderlust Ultimate Itineraries</h3>
              <p className="ky-pro-desc">500 itineraries per month, extended multi-day trips, and priority access to our next-gen AI auto-generation engine.</p>
              <div className="ky-pro-footer">
                <div>
                  <div className="ky-pro-credits-label">24 / 100 credits used</div>
                  <div className="ky-pro-bar"><div className="ky-pro-bar-fill"></div></div>
                  <div className="ky-pro-remaining">76 remaining this month</div>
                </div>
                <button className="ky-btn ky-btn-white">Manage Billing</button>
              </div>
            </div>
          </div>

          {/* Brand Identity */}
          <div className="ky-card">
            <h2 className="ky-card-title"><Palette size={20} /> Brand Identity</h2>
            <p style={{ fontSize: '13px', color: '#71717a', marginBottom: '20px' }}>Customize how your itineraries look when shared with clients.</p>

            <div className="ky-brand-row">
              <div className="ky-brand-logo-upload">
                <div className="ky-upload-box"><Image size={24} color="#a1a1aa" /></div>
                <div>
                  <button className="ky-upload-btn">Change Logo</button>
                  <div className="ky-upload-hint">PNG, SVG, or JPG. Max 2MB.</div>
                </div>
              </div>
              <div className="ky-color-group">
                <label className="ky-label">Brand Colors</label>
                <div className="ky-color-row">
                  <div className="ky-color-picker">
                    <input type="color" className="ky-color-input" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
                    <span className="ky-color-hex">{primaryColor}</span>
                  </div>
                  <div className="ky-color-picker">
                    <input type="color" className="ky-color-input" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
                    <span className="ky-color-hex">{secondaryColor}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ky-preview">
              <div>
                <div className="ky-preview-label">Brand Preview</div>
                <div className="ky-preview-hint">See how your colors look in action.</div>
              </div>
              <button className="ky-preview-btn">Action Button</button>
            </div>
          </div>

          {/* Custom Domain */}
          <div className="ky-card ky-domain-card">
            <div className="ky-domain-badge"><span className="ky-domain-dot"></span> Active white-label</div>
            <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>Custom Domains</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", fontFamily: "ui-monospace, monospace", fontSize: "15px" }}>
              <span>🔗</span><span>trips.wanderlust.co</span>
            </div>
            <p style={{ fontSize: "13px", color: "#71717a", lineHeight: 1.5, maxWidth: "480px" }}>
              Your itineraries are securely white-labeled and hosted directly on your custom sub-domain to keep your travel brand consistent and premium.
            </p>
          </div>

          {/* Save */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "32px" }}>
            <button className="ky-save-btn">Save Changes</button>
          </div>

        </main>
      </div>
    </>
  );
}
