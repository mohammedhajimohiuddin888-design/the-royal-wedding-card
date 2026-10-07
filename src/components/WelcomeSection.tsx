import React from 'react';
import { RoyalEmblem, OrnamentalDivider } from './OrnamentalDivider';
import { WeddingData } from '../types/wedding';

interface WelcomeSectionProps {
  weddingData: WeddingData;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ weddingData }) => {
  const { couple, welcome, eventDate } = weddingData;

  return (
    <section className="relative py-16 sm:py-24 px-6 text-center overflow-hidden bg-velvet-deep">
      {/* Decorative Gold Side Borders */}
      <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-4 sm:right-8 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent pointer-events-none" />

      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ECC371]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto">
        {/* Sacred Verse / Bismillah */}
        <div className="mb-6">
          <p className="font-serif text-2xl sm:text-3xl text-[#ECC371] tracking-wide mb-2" dir="rtl">
            {welcome.bismillah}
          </p>
          <p className="font-cormorant italic text-xs sm:text-sm text-[#F7E5C3]/80">
            {welcome.invitationKicker}
          </p>
        </div>

        <RoyalEmblem size={56} className="my-5 drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]" />

        {/* Headline */}
        <p className="font-cinzel text-xs sm:text-sm text-[#ECC371] uppercase tracking-[0.35em] font-semibold mb-3">
          The Wedding Celebration of
        </p>

        {/* Bride & Groom Calligraphy */}
        <div className="py-2">
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-gold-gradient tracking-wide leading-tight">
            {couple.bride.calligraphyName}
          </h2>
          <div className="my-2 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <span className="font-cormorant italic text-2xl text-[#ECC371]">&</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
          </div>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-gold-gradient tracking-wide leading-tight">
            {couple.groom.calligraphyName}
          </h2>
        </div>

        <OrnamentalDivider variant="lotus" className="my-6" />

        {/* Subheadline & Date Pill */}
        <p className="font-cormorant text-base sm:text-lg text-[#F2E5D0] leading-relaxed px-4">
          {welcome.subheadline}
        </p>

        <div className="mt-8 inline-flex flex-col items-center">
          <div className="px-6 py-2.5 border-y border-[#D4AF37]/50 text-center">
            <p className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F9E5B8] font-semibold">
              Shadi: 17th December 2026 · Dinner: 20th December 2026
            </p>
          </div>
          {eventDate.islamicDate && (
            <p className="font-cormorant italic text-xs text-[#D4AF37]/80 mt-2">
              {eventDate.islamicDate} · King's Palace Function Hall
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
