"use client";
import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, Compass, User, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="ky-auth-overlay" onClick={onClose}>
      <style dangerouslySetInnerHTML={{ __html: `
        .ky-auth-overlay, .ky-auth-overlay * {
          font-family: 'Cosmic', system-ui, -apple-system, sans-serif;
        }
        .ky-auth-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .ky-auth-modal {
          width: 100%;
          max-width: 900px;
          min-height: 600px;
          height: auto;
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
          position: relative;
          animation: kyAuthEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes kyAuthEnter {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .ky-auth-left {
          flex: 1;
          position: relative;
          background: #000;
          display: none;
        }
        @media(min-width: 768px) {
          .ky-auth-left { display: block; }
        }
        .ky-auth-video {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0.8;
        }
        .ky-auth-left-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px;
        }
        .ky-auth-quote-sm {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #fff;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          padding: 6px 12px;
          border-radius: 9999px;
          margin-bottom: 16px;
          width: fit-content;
        }
        .ky-auth-quote-lg {
          font-size: 32px;
          line-height: 1.1;
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .ky-auth-quote-p {
          font-size: 16px;
          color: rgba(255,255,255,0.8);
          line-height: 1.5;
        }
        .ky-auth-right {
          flex: 1;
          background: #fff;
          padding: 48px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        @media(max-width: 767px) {
          .ky-auth-modal {
            max-width: 440px;
            min-height: auto;
          }
          .ky-auth-right {
            padding: 32px 24px;
          }
        }
        .ky-auth-close {
          position: absolute;
          top: 24px; right: 24px;
          width: 32px; height: 32px;
          border-radius: 8px;
          border: 1px solid #eaeaea;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #666;
          transition: all 0.2s;
        }
        .ky-auth-close:hover {
          background: #f5f5f5;
          color: #000;
        }
        .ky-auth-toggle {
          display: flex; align-items: center; gap: 4px;
          font-size: 14px;
          margin-bottom: 40px;
          background: #f4f4f5;
          padding: 4px;
          border-radius: 99px;
          width: fit-content;
        }
        .ky-auth-toggle button {
          background: transparent; border: none; padding: 8px 16px;
          font-size: 14px; color: #666; cursor: pointer;
          font-weight: 500; transition: all 0.2s;
          border-radius: 99px;
        }
        .ky-auth-toggle button:hover { color: #000; }
        .ky-auth-toggle button.active {
          color: #000; font-weight: 600;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .ky-auth-title {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #000;
          line-height: 1.2;
          margin-bottom: 8px;
          min-height: 34px;
        }
        @media(max-width: 767px) {
          .ky-auth-title {
            font-size: 24px;
            min-height: auto;
          }
        }
        .ky-auth-sub {
          font-size: 15px;
          color: #666;
          margin-bottom: 32px;
        }
        .ky-auth-google {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          width: 100%; padding: 12px;
          border: 1px solid #dadce0; border-radius: 12px;
          background: #fff; color: #3c4043; font-weight: 500; font-size: 15px;
          cursor: pointer; transition: background-color 0.2s, box-shadow 0.2s;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .ky-auth-google:hover {
          background: #f8f9fa; box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        }
        .ky-auth-google svg {
          width: 18px; height: 18px;
        }
        .ky-auth-div {
          display: flex; align-items: center; text-align: center;
          margin: 24px 0;
          color: #999; font-size: 13px;
        }
        .ky-auth-div::before, .ky-auth-div::after {
          content: ""; flex: 1; border-bottom: 1px solid #eaeaea;
        }
        .ky-auth-div::before { margin-right: 12px; }
        .ky-auth-div::after { margin-left: 12px; }
        
        .ky-auth-form {
          display: flex; flex-direction: column; gap: 16px;
        }
        .ky-auth-field {
          display: flex; flex-direction: column; gap: 6px;
        }
        .ky-auth-label {
          font-size: 13px; font-weight: 600; color: #333;
        }
        .ky-auth-forgot {
          font-size: 12px; font-weight: 500; color: #e54c2a; text-decoration: none;
        }
        .ky-auth-forgot:hover { text-decoration: underline; }
        .ky-auth-input-wrap {
          position: relative;
          display: flex; align-items: center;
        }
        .ky-auth-input-wrap svg.icon-left {
          position: absolute; left: 14px; color: #999;
          width: 18px; height: 18px;
        }
        .ky-auth-input {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border: 1px solid #eaeaea;
          border-radius: 12px;
          font-size: 15px;
          outline: none;
          transition: all 0.2s;
          color: #000;
        }
        .ky-auth-input::placeholder { color: #999; }
        .ky-auth-input:focus {
          border-color: #e54c2a;
          box-shadow: 0 0 0 4px rgba(229, 76, 42, 0.1);
        }
        .ky-auth-eye {
          position: absolute; right: 14px;
          background: none; border: none; padding: 0;
          color: #999; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
        }
        .ky-auth-eye:hover { color: #333; }
        
        .ky-auth-submit {
          margin-top: 8px;
          width: 100%;
          padding: 14px;
          border-radius: 16px;
          border: 0.5px solid rgba(255,255,255,0.2);
          background: #09090b !important;
          color: #fff !important;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform .18s ease, box-shadow .2s ease;
          box-shadow: rgba(255,255,255,0.5) 0 0.5px 0 0 inset, rgba(117,123,133,0.4) 0 9px 14px -5px inset, rgb(44,46,52) 0 0 0 1.5px, rgba(0,0,0,0.14) 0 4px 6px 0;
          z-index: 1;
        }
        .ky-auth-submit:hover {
          transform: translateY(-1px);
        }
        .ky-auth-submit::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 28%, rgba(255,255,255,0.28) 50%, transparent 72%);
          transform: translateX(-120%);
          animation: kyAuthShine 4s ease-in-out infinite;
          z-index: -1;
          pointer-events: none;
        }
        @keyframes kyAuthShine {
          0% { transform: translateX(-120%); }
          45%,100% { transform: translateX(120%); }
        }
        .ky-auth-terms {
          margin-top: 24px;
          font-size: 12px;
          color: #999;
          text-align: center;
          line-height: 1.5;
        }
      `}} />
      
      <div className="ky-auth-modal" onClick={(e) => e.stopPropagation()}>
        {/* LEFT SIDE */}
        <div className="ky-auth-left">
          <video 
            src="/auth-video-720.mp4" 
            autoPlay loop muted playsInline 
            className="ky-auth-video"
          />
          <div className="ky-auth-left-overlay">
            <div className="ky-auth-quote-lg">Beautiful trips, planned in seconds.</div>
            <div className="ky-auth-quote-p">Research, itinerary, and an interactive proposal — ready to share in minutes.</div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="ky-auth-right">
          <button className="ky-auth-close" onClick={onClose}><X size={18} /></button>
          
          <div className="ky-auth-toggle">
            <button 
              className={authMode === 'login' ? 'active' : ''} 
              onClick={() => setAuthMode('login')}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <LogIn size={14} /> Log in
            </button>
            <button 
              className={authMode === 'signup' ? 'active' : ''} 
              onClick={() => setAuthMode('signup')}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <User size={14} /> Create account
            </button>
          </div>

          <h2 className="ky-auth-title">
            {authMode === 'signup' ? "Let's build your first trip" : 'Welcome back.'}
          </h2>
          <p className="ky-auth-sub">
            {authMode === 'signup' ? 'Start free. No card required.' : 'Enter your details to log in.'}
          </p>

          <button className="ky-auth-google">
            <svg viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            Continue with Google
          </button>

          <div className="ky-auth-div">or use email</div>

          <form className="ky-auth-form" onSubmit={handleSubmit}>
            <div className="ky-auth-field">
              <label className="ky-auth-label">Email address</label>
              <div className="ky-auth-input-wrap">
                <Mail className="icon-left" />
                <input type="email" required placeholder="you@agency.com" className="ky-auth-input" />
              </div>
            </div>
            
            <div className="ky-auth-field">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className="ky-auth-label">Password</label>
                {authMode === 'login' && (
                  <a href="#" className="ky-auth-forgot" onClick={(e) => e.preventDefault()}>Forgot password?</a>
                )}
              </div>
              <div className="ky-auth-input-wrap">
                <Lock className="icon-left" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required 
                  placeholder="At least 8 characters" 
                  className="ky-auth-input" 
                />
                <button type="button" className="ky-auth-eye" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="ky-auth-submit">
              {authMode === 'signup' ? 'Create free account' : 'Log in'}
            </button>
          </form>

          <div className="ky-auth-terms">
            By continuing, you agree to Kyvari's terms and privacy policy.
          </div>
        </div>
      </div>
    </div>
  );
}
