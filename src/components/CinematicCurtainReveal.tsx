import React, { useEffect, useState } from 'react';
import { RoyalEmblem } from './OrnamentalDivider';

interface CinematicCurtainRevealProps {
  onComplete: () => void;
  coupleNames: {
    bride: string;
    groom: string;
  };
}

export const CinematicCurtainReveal: React.FC<CinematicCurtainRevealProps> = ({
  onComplete,
  coupleNames,
}) => {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }

    const t1 = setTimeout(() => setPhase(1), 300);   // Darken and seal pulse
    const t2 = setTimeout(() => setPhase(2), 1400);  // Curtains begin parting
    const t3 = setTimeout(() => setPhase(3), 3600);  // Warm illumination burst
    const t4 = setTimeout(() => {
      onComplete();
    }, 4800); // Transition into main invitation

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#0D0104] flex items-center justify-center select-none">
      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute top-5 right-5 z-50 text-[11px] font-cinzel tracking-widest text-[#E8DCB9]/70 hover:text-white px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-sm transition-all active:scale-95 cursor-pointer"
        aria-label="Skip opening animation"
      >
        Skip Reveal
      </button>

      {/* BACKGROUND LAYER: The Revealed Royal Velvet & Gold Illumination Chamber (Pure royal geometry & light, no photos) */}
      <div className="absolute inset-0 z-10 overflow-hidden flex items-center justify-center bg-radial from-[#380715] via-[#1D030A] to-[#0A0103]">
        {/* Architectural Palace Arch Silhouettes in Gold Foil */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000 flex items-center justify-center"
          style={{ opacity: phase >= 2 ? 0.35 : 0 }}
        >
          <svg
            className="w-full h-full max-w-2xl max-h-screen text-[#ECC371]/40"
            viewBox="0 0 400 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grand Cusped Mughal/Nizami Arch */}
            <path
              d="M50 600 V300 C50 180 120 80 200 40 C280 80 350 180 350 300 V600"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <path
              d="M70 600 V310 C70 200 130 110 200 70 C270 110 330 200 330 310 V600"
              stroke="#ECC371"
              strokeWidth="0.8"
            />
            <circle cx="200" cy="40" r="4" fill="#ECC371" />
          </svg>
        </div>

        {/* Chandelier Radial Glow Center */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none transition-all duration-2000"
          style={{
            background: 'radial-gradient(circle, rgba(253, 234, 184, 0.4) 0%, rgba(212, 175, 55, 0.12) 50%, transparent 75%)',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'scale(1.2)' : 'scale(0.8)',
          }}
        />

        {/* Revealed Title Content Inside the Chamber */}
        <div
          className="relative z-20 text-center px-6 max-w-lg transition-all duration-1000 ease-out"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(25px)',
          }}
        >
          {/* Glowing Crest */}
          <div className="mb-4">
            <RoyalEmblem size={74} className="mx-auto drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]" />
          </div>

          <p className="font-cinzel text-xs text-[#ECC371] tracking-[0.35em] uppercase font-semibold mb-3">
            Welcome To The Wedding Celebration Of
          </p>
          <h1 className="font-script text-5xl sm:text-6xl text-gold-gradient drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {coupleNames.bride} & {coupleNames.groom}
          </h1>
          <p className="font-cormorant italic text-base sm:text-lg text-[#F9E5B8]/90 mt-3 drop-shadow">
            An evening of divine grace, royal tradition & cherished vows
          </p>
        </div>

        {/* Floating Golden Light Sparks */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
          style={{ opacity: phase >= 2 ? 0.7 : 0 }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#FDEAB8] blur-[1px] animate-pulse"
              style={{
                width: `${(i % 3) + 2}px`,
                height: `${(i % 3) + 2}px`,
                top: `${15 + (i * 7) % 70}%`,
                left: `${10 + (i * 9) % 80}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${2 + (i % 3)}s`,
                boxShadow: '0 0 8px #ECC371',
              }}
            />
          ))}
        </div>
      </div>

      {/* TOP CURTAIN VALANCE / DRAPERY PELMET */}
      <div
        className="absolute top-0 left-0 right-0 h-16 sm:h-24 z-40 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #24050D 0%, #3B0917 70%, transparent 100%)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-repeat-x flex justify-around opacity-80">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-3 rounded-b-full border-b border-[#D4AF37] bg-gradient-to-b from-[#2A0610] to-[#AA7C11]/30"
            />
          ))}
        </div>
      </div>

      {/* LEFT VELVET CURTAIN */}
      <div
        className="absolute top-0 bottom-0 left-0 w-1/2 z-30 transition-transform duration-[2200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{
          transform: phase >= 2 ? 'translateX(-102%)' : 'translateX(0)',
          background: `
            repeating-linear-gradient(90deg, 
              #1B0309 0px, 
              #380A18 20px, 
              #4C0D20 35px, 
              #24040D 50px, 
              #180208 70px
            )
          `,
          boxShadow: 'inset -20px 0 40px rgba(0,0,0,0.85), 10px 0 30px rgba(0,0,0,0.9)',
        }}
      >
        <div className="absolute top-0 bottom-0 right-0 w-2.5 bg-gradient-to-b from-[#ECC371] via-[#D4AF37] to-[#8C6615] shadow-lg flex flex-col justify-around items-center">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#FFF3D6] opacity-75" />
          ))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-1 w-6 h-16 bg-[#AA7C11] rounded-l-md border border-[#FDEAB8]/60 shadow-xl flex flex-col items-center justify-end pb-1">
          <div className="w-3 h-3 rounded-full bg-[#FDEAB8] mb-1" />
          <div className="w-1 h-6 bg-[#ECC371]" />
        </div>
      </div>

      {/* RIGHT VELVET CURTAIN */}
      <div
        className="absolute top-0 bottom-0 right-0 w-1/2 z-30 transition-transform duration-[2200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{
          transform: phase >= 2 ? 'translateX(102%)' : 'translateX(0)',
          background: `
            repeating-linear-gradient(-90deg, 
              #1B0309 0px, 
              #380A18 20px, 
              #4C0D20 35px, 
              #24040D 50px, 
              #180208 70px
            )
          `,
          boxShadow: 'inset 20px 0 40px rgba(0,0,0,0.85), -10px 0 30px rgba(0,0,0,0.9)',
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-b from-[#ECC371] via-[#D4AF37] to-[#8C6615] shadow-lg flex flex-col justify-around items-center">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#FFF3D6] opacity-75" />
          ))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-1 w-6 h-16 bg-[#AA7C11] rounded-r-md border border-[#FDEAB8]/60 shadow-xl flex flex-col items-center justify-end pb-1">
          <div className="w-3 h-3 rounded-full bg-[#FDEAB8] mb-1" />
          <div className="w-1 h-6 bg-[#ECC371]" />
        </div>
      </div>

      {/* CENTRAL ROYAL SEAL */}
      <div
        className="absolute z-40 transition-all duration-1000 ease-out pointer-events-none flex flex-col items-center"
        style={{
          opacity: phase < 2 ? 1 : 0,
          transform: phase === 1 ? 'scale(1.1)' : phase >= 2 ? 'scale(1.4)' : 'scale(1)',
        }}
      >
        <div className="relative">
          <RoyalEmblem size={96} className="drop-shadow-[0_0_35px_rgba(212,175,55,0.7)]" />
          <div className="absolute inset-0 rounded-full border-2 border-[#ECC371] animate-ping opacity-25" />
        </div>
        <p className="font-cinzel text-xs text-[#F9E5B8] uppercase tracking-[0.4em] mt-3 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Unveiling The Celebration
        </p>
      </div>

      {/* FINAL TRANSITION WASH */}
      <div
        className="absolute inset-0 z-50 pointer-events-none transition-opacity duration-1000"
        style={{
          backgroundColor: '#160307',
          opacity: phase === 3 ? 0.4 : 0,
        }}
      />
    </div>
  );
};
