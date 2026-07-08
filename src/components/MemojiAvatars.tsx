import React from 'react';

export function Memoji({ variant = "1", size = 40 }: { variant?: string | number, size?: number }) {
  const v = String(variant);
  
  // Base properties
  let skinColor = "#ffc7a1";
  let bgGradient = { start: "#ffe3c2", end: "#ffc7a1" };
  let hairPath = "";
  let hairColor = "#5b4332";
  let hasGlasses = false;

  switch(v) {
    case "1": // Default Wanderlust
      skinColor = "#ffc7a1";
      bgGradient = { start: "#ffe3c2", end: "#ffc7a1" };
      hairColor = "#5b4332";
      hairPath = "M8 17c0-7 5-11 11-11s11 4 11 11c0 1.6-.5 2.6-1 3.2-.6-3.8-2.6-5.4-4.6-5.9-3.4-.9-7.6-.3-10.8 1.4-1.5.8-2.6 2-3.2 4.4C9 19.5 8 18.8 8 17z";
      break;
    case "2": // Darker skin tone, different hair
      skinColor = "#a66c4a";
      bgGradient = { start: "#d19a77", end: "#a66c4a" };
      hairColor = "#201a16";
      hairPath = "M9 16c-1-6 3-10 10-10s11 4 10 10c0 2 1 4 1 6-2-4-5-5-10-5s-8 1-10 5c0-2 1-4 1-6z";
      hasGlasses = true;
      break;
    case "3": // Lighter skin tone, blonde hair
      skinColor = "#ffe0cd";
      bgGradient = { start: "#fff3eb", end: "#ffe0cd" };
      hairColor = "#e6c35c";
      hairPath = "M5 18c0-8 6-12 14-12 7 0 13 4 13 12 0 4-2 8-5 8-1-5-4-7-8-7-5 0-7 2-8 7-3 0-6-4-6-8z";
      break;
    case "4": // Medium skin, short gray hair
      skinColor = "#d69e7c";
      bgGradient = { start: "#f3cbb5", end: "#d69e7c" };
      hairColor = "#a3a8b3";
      hairPath = "M10 15c-1-5 4-9 9-9 6 0 10 4 9 9 0 2 0 4-1 5-2-3-4-4-8-4-5 0-6 1-8 4-1-1-1-3-1-5z";
      hasGlasses = true;
      break;
    default:
      skinColor = "#ffc7a1";
      bgGradient = { start: "#ffe3c2", end: "#ffc7a1" };
      hairColor = "#5b4332";
      hairPath = "M8 17c0-7 5-11 11-11s11 4 11 11c0 1.6-.5 2.6-1 3.2-.6-3.8-2.6-5.4-4.6-5.9-3.4-.9-7.6-.3-10.8 1.4-1.5.8-2.6 2-3.2 4.4C9 19.5 8 18.8 8 17z";
  }

  const gradId = `avBg_${v}`;

  return (
    <svg width={size} height={size} viewBox="0 0 38 38" style={{flexShrink: 0, display: 'block'}}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={bgGradient.start}/>
          <stop offset="1" stopColor={bgGradient.end}/>
        </linearGradient>
      </defs>
      {/* Background circle */}
      <circle cx="19" cy="19" r="18" fill={`url(#${gradId})`}/>
      <circle cx="19" cy="19" r="18" fill="none" stroke="#e9ecf4" strokeWidth="1.5"/>
      
      {/* Hair */}
      <path d={hairPath} fill={hairColor}/>
      
      {/* Eyes */}
      <circle cx="14.5" cy="19.5" r="1.5" fill="#33261d" style={{animation: "blinkEye 4s infinite"}}/>
      <circle cx="23.5" cy="19.5" r="1.5" fill="#33261d" style={{animation: "blinkEye 4s infinite"}}/>
      
      {/* Glasses */}
      {hasGlasses && (
        <g stroke="#33261d" strokeWidth="1.2" fill="none">
          <circle cx="14.5" cy="19.5" r="4"/>
          <circle cx="23.5" cy="19.5" r="4"/>
          <path d="M18.5 19.5h1"/>
        </g>
      )}

      {/* Mouth */}
      <path d="M15.5 25c2.2 1.8 4.8 1.8 7 0" stroke="#c96a4a" strokeWidth="1.7" fill="none" strokeLinecap="round" style={{animation: "smile 3s ease-in-out infinite alternate"}}/>
      
      {/* Cheeks */}
      <circle cx="11.5" cy="22.5" r="1.8" fill="#ff9d7e" opacity=".5"/>
      <circle cx="26.5" cy="22.5" r="1.8" fill="#ff9d7e" opacity=".5"/>

      <style>{`
        @keyframes smile {
          0% { d: path("M15.5 25c2.2 1.8 4.8 1.8 7 0"); }
          100% { d: path("M15.5 25.5c2.2 2.5 4.8 2.5 7 0"); }
        }
      `}</style>
    </svg>
  );
}
