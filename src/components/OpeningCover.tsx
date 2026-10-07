import React from 'react';
import { RoyalEmblem, OrnamentalDivider } from './OrnamentalDivider';
import { WeddingData } from '../types/wedding';

interface OpeningCoverProps {
  weddingData: WeddingData;
  onOpen: () => void;
  isOpening: boolean;
}

export const OpeningCover: React.FC<OpeningCoverProps> = ({
  weddingData,
  onOpen,
  isOpening,
}) => {
  const { couple, venue } = weddingData;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between p-6 sm:p-10 bg-velvet-deep text-center select-none overflow-hidden">
      {/* Antique Gold Fine Outer & Inner Foil Frame */}
      <div
        className="absolute inset-4 sm:inset-6 md:inset-8 border border-[#D4AF37]/40 pointer-events-none z-10 transition-opacity duration-700"
        style={{ opacity: isOpening ? 0 : 1 }}
      >
        {/* Inner concentric hairline */}
        <div className="absolute inset-2 border border-[#D4AF37]/25 pointer-events-none" />

        {/* Ornate Corner Accents */}
        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#ECC371]" />
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#D4AF37]" />
        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#ECC371]" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#D4AF37]" />
        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#ECC371]" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#D4AF37]" />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#ECC371]" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#D4AF37]" />
      </div>

      {/* Subtle Velvet Background Texture & Vignette */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at center, #ECC371 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-0 bg-radial from-transparent via-[#140206]/60 to-[#0A0103]/95 pointer-events-none" />

      {/* TOP HEADER: Bismillah & Royal Emblem */}
      <header
        className="relative z-20 pt-8 sm:pt-12 transition-all duration-700 transform"
        style={{
          opacity: isOpening ? 0 : 1,
          transform: isOpening ? 'translateY(-20px)' : 'translateY(0)',
        }}
      >
        <p className="font-serif text-xl sm:text-2xl text-[#ECC371]/90 tracking-wide mb-3" dir="rtl">
          {weddingData.welcome.bismillah}
        </p>
        <div className="mx-auto flex justify-center mb-2">
          <RoyalEmblem size={68} className="drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
        </div>
        <p className="font-cinzel text-[10px] sm:text-xs text-[#E8DCB9]/80 uppercase tracking-[0.3em]">
          Royal Wedding Invitation
        </p>
      </header>

      {/* CENTER TYPOGRAPHY: Couple Names in Calligraphy */}
      <main
        className="relative z-20 my-auto py-8 max-w-lg transition-all duration-700"
        style={{
          opacity: isOpening ? 0 : 1,
          transform: isOpening ? 'scale(0.96)' : 'scale(1)',
        }}
      >
        <p className="font-cinzel text-xs sm:text-sm text-[#ECC371] tracking-[0.35em] uppercase font-semibold mb-6">
          The Wedding Celebration of
        </p>

        {/* Bride Name */}
        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-gold-gradient tracking-wide leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          {couple.bride.calligraphyName}
        </h1>

        {/* Antique Ampersand Flourish */}
        <div className="my-2 flex items-center justify-center gap-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <span className="font-cormorant italic text-2xl sm:text-3xl text-[#ECC371]">&</span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </div>

        {/* Groom Name */}
        <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-gold-gradient tracking-wide leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          {couple.groom.calligraphyName}
        </h2>

        <OrnamentalDivider variant="lotus" className="my-5" />

        <div className="space-y-1">
          <p className="font-cinzel text-xs sm:text-sm text-[#F2E5D0] tracking-[0.2em] uppercase font-medium">
            Shadi: 17 Dec 2026 · Dinner: 20 Dec 2026
          </p>
          <p className="text-xs text-[#ECC371]/90 font-cormorant italic">
            {venue.name} · Mehdipatnam, Hyderabad
          </p>
        </div>
      </main>

      {/* BOTTOM CALL TO ACTION: Tap To Open */}
      <footer
        className="relative z-20 pb-8 sm:pb-12 flex flex-col items-center gap-3 transition-all duration-700"
        style={{
          opacity: isOpening ? 0 : 1,
          transform: isOpening ? 'translateY(20px)' : 'translateY(0)',
        }}
      >
        <button
          onClick={onOpen}
          disabled={isOpening}
          className="group relative px-9 py-3.5 rounded-sm overflow-hidden bg-gradient-to-b from-[#380917]/90 to-[#22040C]/90 hover:from-[#480B1E] hover:to-[#2D0611] border border-[#ECC371] text-[#FFF7E6] shadow-[0_4px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-all duration-500 active:scale-95 cursor-pointer"
          aria-label="Tap to open the royal wedding invitation"
        >
          {/* Subtle Shimmer highlight line */}
          <div className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none opacity-40 group-hover:opacity-70" />

          {/* Golden Corner brackets */}
          <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#F9E5B8]" />
          <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#F9E5B8]" />
          <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#F9E5B8]" />
          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#F9E5B8]" />

          <span className="relative z-10 font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#F9E5B8] group-hover:text-white transition-colors">
            Tap To Open
          </span>
        </button>

        <p className="font-sans-clean text-[10px] sm:text-[11px] text-[#E8DCB9]/60 tracking-wider">
          Tap the royal seal to open the invitation & celebration
        </p>
      </footer>
    </div>
  );
};
