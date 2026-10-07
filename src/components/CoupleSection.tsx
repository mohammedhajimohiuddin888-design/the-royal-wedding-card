import React from 'react';
import { OrnamentalDivider, RoyalEmblem } from './OrnamentalDivider';
import { WeddingData } from '../types/wedding';

interface CoupleSectionProps {
  weddingData: WeddingData;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ weddingData }) => {
  const { couple } = weddingData;

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 bg-velvet-deep text-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="font-cinzel text-xs sm:text-sm text-[#ECC371] tracking-[0.35em] uppercase font-semibold mb-3">
          United In Faith & Love
        </p>

        <h2 className="font-cinzel-dec text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold tracking-wider">
          The Bride & The Groom
        </h2>

        <OrnamentalDivider variant="crest" className="my-6" />

        {/* Couple Presentation Cards (No photos, pure royal heraldic calligraphy stationery) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 items-stretch">
          {/* THE BRIDE CARD */}
          <div className="group relative flex flex-col items-center p-8 sm:p-10 rounded-sm bg-gradient-to-b from-[#2E0713]/85 to-[#1A0309]/95 border border-[#D4AF37]/45 shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#F9E5B8]/70">
            {/* Inner gold hairline frame */}
            <div className="absolute inset-2 border border-[#D4AF37]/20 pointer-events-none" />

            {/* Arch-Top Luxury Crest Medallion */}
            <div className="relative w-44 h-52 sm:w-48 sm:h-56 mx-auto mb-6 p-4 rounded-t-[90px] border-2 border-[#D4AF37]/70 bg-gradient-to-b from-[#3E0919] to-[#1F040A] shadow-xl flex flex-col items-center justify-center">
              {/* Inner Arch Hairline */}
              <div className="absolute inset-1.5 rounded-t-[84px] border border-[#ECC371]/35 pointer-events-none" />

              <RoyalEmblem size={68} className="drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] my-auto" />

              <div className="text-center pb-2">
                <span className="font-cinzel text-[10px] text-[#ECC371] tracking-[0.3em] uppercase block">
                  Crest of Grace
                </span>
                <span className="font-script text-2xl text-gold-gradient">
                  Sabiha
                </span>
              </div>
            </div>

            {/* Details */}
            <p className="font-cinzel text-[10px] sm:text-[11px] text-[#ECC371] uppercase tracking-[0.3em] font-semibold">
              {couple.bride.title}
            </p>

            <h3 className="font-script text-5xl sm:text-6xl text-gold-gradient my-2 leading-tight">
              {couple.bride.calligraphyName}
            </h3>

            <p className="font-cormorant italic text-sm sm:text-base text-[#F7E5C3]/90 mb-3 px-2">
              {couple.bride.daughterOf}
            </p>

            <div className="w-16 h-[1px] bg-[#D4AF37]/40 my-2" />

            <p className="font-cormorant text-base text-[#E8DCB9]/85 leading-relaxed mt-2 max-w-xs">
              {couple.bride.bio}
            </p>
          </div>

          {/* THE GROOM CARD */}
          <div className="group relative flex flex-col items-center p-8 sm:p-10 rounded-sm bg-gradient-to-b from-[#2E0713]/85 to-[#1A0309]/95 border border-[#D4AF37]/45 shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#F9E5B8]/70">
            {/* Inner gold hairline frame */}
            <div className="absolute inset-2 border border-[#D4AF37]/20 pointer-events-none" />

            {/* Arch-Top Luxury Crest Medallion */}
            <div className="relative w-44 h-52 sm:w-48 sm:h-56 mx-auto mb-6 p-4 rounded-t-[90px] border-2 border-[#D4AF37]/70 bg-gradient-to-b from-[#3E0919] to-[#1F040A] shadow-xl flex flex-col items-center justify-center">
              {/* Inner Arch Hairline */}
              <div className="absolute inset-1.5 rounded-t-[84px] border border-[#ECC371]/35 pointer-events-none" />

              <RoyalEmblem size={68} className="drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] my-auto" />

              <div className="text-center pb-2">
                <span className="font-cinzel text-[10px] text-[#ECC371] tracking-[0.3em] uppercase block">
                  Crest of Honour
                </span>
                <span className="font-script text-2xl text-gold-gradient">
                  Mohd Haji
                </span>
              </div>
            </div>

            {/* Details */}
            <p className="font-cinzel text-[10px] sm:text-[11px] text-[#ECC371] uppercase tracking-[0.3em] font-semibold">
              {couple.groom.title}
            </p>

            <h3 className="font-script text-5xl sm:text-6xl text-gold-gradient my-2 leading-tight">
              {couple.groom.calligraphyName}
            </h3>

            <p className="font-cormorant italic text-sm sm:text-base text-[#F7E5C3]/90 mb-3 px-2">
              {couple.groom.sonOf}
            </p>

            <div className="w-16 h-[1px] bg-[#D4AF37]/40 my-2" />

            <p className="font-cormorant text-base text-[#E8DCB9]/85 leading-relaxed mt-2 max-w-xs">
              {couple.groom.bio}
            </p>
          </div>
        </div>

        {/* Wedding Monogram & Hashtag */}
        <div className="mt-12 text-center">
          <p className="font-cinzel text-sm sm:text-base text-[#ECC371] tracking-[0.3em] font-medium">
            {couple.hashtag}
          </p>
        </div>
      </div>
    </section>
  );
};
