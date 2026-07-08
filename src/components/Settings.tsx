'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export function Settings() {
  const router = useRouter();
  const [primaryColor, setPrimaryColor] = useState('#e8543f');
  const [secondaryColor, setSecondaryColor] = useState('#ffc24d');

  return (
    <div style={{ padding: "34px 40px 64px", maxWidth: "1420px", margin: "0 auto", animation: "fadeUp .4s ease-out both" }}>
      
      {/* Settings Header */}
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "30px", letterSpacing: "-.03em", margin: 0 }}>
          Settings
        </h1>
        <div style={{ fontSize: "13.5px", color: "#a09d92", fontWeight: 500, marginTop: "5px" }}>
          Manage your account, branding, and preferences
        </div>
      </div>

      <div style={{ maxWidth: "840px", display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {/* Business Profile */}
        <section style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "22px", padding: "28px", boxShadow: "0 6px 16px rgba(84,62,40,.02)" }}>
          <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "19px", color: "#1d1f24", marginBottom: "20px", margin: "0 0 20px" }}>
            Business Profile
          </h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }} className="flex flex-col md:grid">
            <div>
              <label style={{ display: "block", fontSize: "12.5px", fontWeight: 500, color: "#6f6d64", marginBottom: "8px" }}>Business Name</label>
              <input 
                type="text" 
                defaultValue="Wanderlust Travel Co." 
                style={{ width: "100%", padding: "11px 14px", borderRadius: "10px", border: "1px solid #eeece5", outline: "none", fontSize: "14px", fontFamily: "var(--font-figtree), sans-serif", background: "#faf9f6" }} 
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "12.5px", fontWeight: 500, color: "#6f6d64", marginBottom: "8px" }}>Business Email</label>
              <input 
                type="email" 
                defaultValue="hello@wanderlust.co" 
                disabled 
                style={{ width: "100%", padding: "11px 14px", borderRadius: "10px", border: "1px solid #eeece5", outline: "none", fontSize: "14px", fontFamily: "var(--font-figtree), sans-serif", background: "#f1efe8", color: "#a09d92", cursor: "not-allowed" }} 
              />
            </div>
          </div>

          <div style={{ borderTop: "1px solid #f4f2ec", paddingTop: "20px" }}>
            <label style={{ display: "block", fontSize: "12.5px", fontWeight: 500, color: "#6f6d64", marginBottom: "12px" }}>Subscription Tier</label>
            
            {/* Premium Dark Pro Card */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "20px", background: "linear-gradient(155deg,#22242b 0%,#2e3039 100%)", padding: "24px", color: "#fff", boxShadow: "0 14px 30px rgba(29,31,36,.25)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <span style={{ position: "absolute", top: "-50px", right: "-30px", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle,rgba(232,84,63,.4),transparent 68%)", animation: "haloBreathe 6s ease-in-out infinite", display: "block" }}></span>
              <span style={{ position: "absolute", bottom: "-40px", left: "-30px", width: "140px", height: "140px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,194,77,.22),transparent 68%)", animation: "haloBreathe 8s ease-in-out 1.5s infinite", display: "block" }}></span>
              
              <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "260px" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 10.5px", borderRadius: "99px", background: "rgba(255,255,255,0.1)", fontSize: "9.5px", fontWeight: 500, letterSpacing: ".15em", color: "#ffd4b8", marginBottom: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <svg width="12" height="12" viewBox="0 0 14 14">
                      <path d="M7 0l1.7 5.3L14 7l-5.3 1.7L7 14 5.3 8.7 0 7l5.3-1.7z" fill="#ffd4b8"/>
                    </svg>
                    PRO TIER ACTIVE
                  </div>
                  
                  <h4 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "20px", margin: "0 0 8px" }}>Wanderlust Ultimate Itineraries</h4>
                  <div style={{ fontSize: "13px", color: "#a5a7ad", lineHeight: 1.55, fontWeight: 400, marginBottom: "16px" }}>
                    500 itineraries per month, extended multi-day trips, and priority access to our next-gen AI auto-generation engine.
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", maxWidth: "340px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: 500, color: "#a5a7ad" }}>
                      <span>24 / 100 credits used</span>
                      <span style={{ color: "#ffc24d" }}>76 remaining</span>
                    </div>
                    <div style={{ height: "5px", borderRadius: "99px", background: "rgba(255,255,255,.12)", overflow: "hidden" }}>
                      <div style={{ width: "24%", height: "100%", borderRadius: "99px", background: "linear-gradient(90deg,#ffc24d,#e8543f)", position: "relative", overflow: "hidden" }}>
                        <span style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent)", animation: "shine 2.8s linear infinite" }}></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <span 
                  className="hover:scale-105 active:scale-95 transition-all"
                  style={{ background: "#fff", color: "#1d1f24", borderRadius: "10px", padding: "10px 18px", fontSize: "13.5px", fontWeight: 500, cursor: "pointer", boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
                >
                  Manage Billing
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Identity */}
        <section style={{ background: "#fff", border: "1px solid #eeece5", borderRadius: "22px", padding: "28px", boxShadow: "0 6px 16px rgba(84,62,40,.02)" }}>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "19px", color: "#1d1f24", margin: 0 }}>
              Brand Identity
            </h3>
            <div style={{ fontSize: "13px", color: "#a09d92", fontWeight: 500, marginTop: "5px" }}>
              Customize how your itineraries look when shared with clients.
            </div>
          </div>

          <div style={{ display: "flex", gap: "24px", marginBottom: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <label style={{ display: "block", fontSize: "12.5px", fontWeight: 500, color: "#6f6d64", marginBottom: "10px" }}>Company Logo</label>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", background: "#faf9f6", padding: "14px 16px", borderRadius: "14px", border: "1px solid #eeece5" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "10px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed #ddd9cc" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a09d92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <div>
                  <button 
                    style={{ padding: "7px 14px", borderRadius: "8px", background: "#fff", color: "#1d1f24", fontSize: "12.5px", fontWeight: 500, cursor: "pointer", border: "1px solid #eeece5" }}
                    className="hover:border-[#1d1f24] active:scale-95 transition-all"
                  >
                    Change Logo
                  </button>
                  <div style={{ fontSize: "11px", color: "#a09d92", marginTop: "4px" }}>PNG, SVG, or JPG. Max 2MB.</div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: "260px", display: "flex", gap: "16px" }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: "12.5px", fontWeight: 500, color: "#6f6d64", marginBottom: "10px" }}>Primary Color</label>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", border: "1px solid #eeece5", padding: "8px 12px", borderRadius: "10px", background: "#faf9f6" }}>
                  <input 
                    type="color" 
                    value={primaryColor} 
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    style={{ width: "24px", height: "24px", borderRadius: "6px", border: "none", cursor: "pointer", background: "none" }} 
                  />
                  <span style={{ fontSize: "13.5px", color: "#1d1f24", fontFamily: "ui-monospace, monospace" }}>{primaryColor}</span>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: "12.5px", fontWeight: 500, color: "#6f6d64", marginBottom: "10px" }}>Secondary Color</label>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", border: "1px solid #eeece5", padding: "8px 12px", borderRadius: "10px", background: "#faf9f6" }}>
                  <input 
                    type="color" 
                    value={secondaryColor} 
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    style={{ width: "24px", height: "24px", borderRadius: "6px", border: "none", cursor: "pointer", background: "none" }} 
                  />
                  <span style={{ fontSize: "13.5px", color: "#1d1f24", fontFamily: "ui-monospace, monospace" }}>{secondaryColor}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ background: "#faf9f6", padding: "20px", borderRadius: "14px", border: "1px solid #eeece5", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 500, letterSpacing: ".15em", color: "#a09d92", textTransform: "uppercase" }}>Brand Component Preview</div>
              <div style={{ fontSize: "13px", color: "#6f6d64", marginTop: "3px" }}>Check the live contrast matching of your selected brand colors.</div>
            </div>
            <button 
              style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`, color: "#fff", padding: "10px 22px", borderRadius: "10px", border: "none", fontSize: "13.5px", fontWeight: 500, cursor: "pointer", boxShadow: `0 6px 14px rgba(84,62,40,.12)` }}
              className="hover:-translate-y-[1px] active:scale-95 transition-all"
            >
              Action Button
            </button>
          </div>
        </section>

        {/* Custom Domain white-label */}
        <section style={{ background: "linear-gradient(135deg,#fff,#f8faf9)", border: "1px solid #eeece5", borderRadius: "22px", padding: "28px", boxShadow: "0 6px 16px rgba(84,62,40,.02)", position: "relative", overflow: "hidden" }}>
          <span style={{ position: "absolute", top: "14px", right: "14px", display: "inline-flex", alignItems: "center", gap: "4px", background: "#f1fbf4", color: "#2e7d32", padding: "4px 10.5px", borderRadius: "99px", fontSize: "11px", fontWeight: 500, border: "1px solid #d5f3dc" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2e7d32" }}></span>
            Active white-label
          </span>
          
          <div style={{ maxWidth: "480px" }}>
            <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: "19px", color: "#1d1f24", marginBottom: "12px", margin: "0 0 12px" }}>
              Custom Domains
            </h3>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span style={{ fontSize: "16px" }}>🔗</span>
              <span style={{ fontSize: "14.5px", color: "#1d1f24", fontFamily: "ui-monospace, monospace", fontWeight: 500 }}>
                trips.wanderlust.co
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "#6f6d64", lineHeight: 1.5, margin: 0 }}>
              Your itineraries are securely white-labeled and hosted directly on your custom sub-domain to keep your travel brand consistent and premium.
            </p>
          </div>
        </section>

        {/* Save CTA */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
          <div 
            onClick={() => router.push('/trips')}
            className="hover:-translate-y-[1.5px] active:scale-95 transition-all"
            style={{ position: "relative", overflow: "hidden", borderRadius: "12px", padding: "12px 28px", background: "#1d1f24", color: "#fff", fontWeight: 500, fontSize: "14px", cursor: "pointer", boxShadow: "0 8px 20px rgba(29,31,36,.22)" }}
          >
            Save Changes
            <span style={{ position: "absolute", top: 0, bottom: 0, width: "32px", background: "linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)", animation: "shine 4s ease-in-out infinite" }}></span>
          </div>
        </div>

      </div>
    </div>
  );
}
