import React from 'react';
import { RoyalEmblem, OrnamentalDivider } from './OrnamentalDivider';
import { WeddingData } from '../types/wedding';
import { ArrowUp } from 'lucide-react';

interface ClosingSectionProps {
  weddingData: WeddingData;
  onReplay?: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ weddingData, onReplay }) => {
  const { couple, closing, eventDate } = weddingData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-24 sm:py-32 px-6 text-center overflow-hidden bg-velvet-dark">
      {/* Slow subtle background movement */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 animate-[pulse_8s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #4A0C1D 0%, #1E0309 60%, #0F0104 100%)',
        }}
      />

      {/* Decorative Gold Frame */}
      <div className="max-w-2xl mx-auto relative z-10 p-8 sm:p-14 border border-[#D4AF37]/40 rounded-sm bg-[#160207]/70 backdrop-blur-sm shadow-[0_16px_48px_rgba(0,0,0,0.8)]">
        {/* Inner hairline */}
        <div className="absolute inset-2 border border-[#D4AF37]/20 pointer-events-none" />

        {/* Ornate Emblem */}
        <RoyalEmblem size={64} className="mx-auto mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />

        <p className="font-cinzel text-xs sm:text-sm text-[#ECC371] tracking-[0.4em] uppercase font-semibold mb-4">
          {closing.heading}
        </p>

        <h2 className="font-cormorant italic text-2xl sm:text-3xl md:text-4xl text-[#FFF8E7] leading-relaxed max-w-lg mx-auto">
          “{closing.subtext}”
        </h2>

        <OrnamentalDivider variant="lotus" className="my-7" />

        {/* Calligraphy Names */}
        <div className="my-4">
          <p className="font-script text-5xl sm:text-6xl text-gold-gradient leading-tight">
            {couple.bride.calligraphyName}
          </p>
          <div className="flex items-center justify-center gap-3 my-2">
            <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
            <span className="font-cormorant italic text-2xl text-[#ECC371]">&</span>
            <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
          </div>
          <p className="font-script text-5xl sm:text-6xl text-gold-gradient leading-tight">
            {couple.groom.calligraphyName}
          </p>
        </div>

        <p className="font-cormorant text-sm sm:text-base text-[#E8DCB9]/80 mt-4 italic">
          {closing.blessing}
        </p>

        <p className="font-cinzel text-xs text-[#D4AF37]/90 uppercase tracking-widest mt-6">
          Shadi: 17 Dec 2026 · Dinner: 20 Dec 2026
        </p>
        <p className="font-cormorant italic text-xs text-[#E8DCB9]/70 mt-1">
          King's Palace Function Hall · Hyderabad
        </p>

        {/* Action Controls */}
        <div className="mt-10 pt-6 border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37]/40 bg-[#24060E] hover:bg-[#380917] text-[#ECC371] text-xs font-cinzel tracking-wider transition-all active:scale-95 cursor-pointer"
            aria-label="Scroll back to top of invitation"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Return to Top
          </button>

          {onReplay && (
            <button
              onClick={onReplay}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37]/40 bg-[#150207] hover:bg-[#28050F] text-[#E8DCB9] text-xs font-cinzel tracking-wider transition-all active:scale-95 cursor-pointer"
              aria-label="Experience opening reveal again"
            >
              Replay Opening
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
