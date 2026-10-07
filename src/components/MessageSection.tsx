import React from 'react';
import { OrnamentalDivider } from './OrnamentalDivider';
import { WeddingData } from '../types/wedding';
import { Heart } from 'lucide-react';

interface MessageSectionProps {
  weddingData: WeddingData;
}

export const MessageSection: React.FC<MessageSectionProps> = ({ weddingData }) => {
  const { messages, couple } = weddingData;

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 bg-ivory-stationery text-[#2B050E] overflow-hidden">
      {/* Decorative Gold Border Frame reminiscent of luxury foil-stamped stationery */}
      <div className="max-w-2xl mx-auto relative bg-[#FFFDF9] border border-[#D4AF37]/45 p-7 sm:p-14 shadow-[0_12px_40px_rgba(40,5,12,0.08)]">
        {/* Inner hairline border */}
        <div className="absolute inset-3 border border-[#D4AF37]/25 pointer-events-none" />

        {/* Ornate Corner Corners */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

        {/* Stationery Header */}
        <div className="text-center relative z-10">
          <p className="font-cinzel text-[11px] sm:text-xs text-[#8A6218] tracking-[0.3em] uppercase font-semibold mb-2">
            Solemn Request of Presence
          </p>

          <h3 className="font-cinzel text-xl sm:text-2xl text-[#3A0512] font-semibold tracking-wider">
            With the Blessings of Almighty
          </h3>

          <OrnamentalDivider variant="lotus" color="burgundy" className="my-5" />
        </div>

        {/* Formal Invitation Prose */}
        <div className="relative z-10 space-y-5 text-center font-cormorant text-lg sm:text-xl text-[#3A0713] leading-relaxed max-w-lg mx-auto">
          {messages.formalInvitation.map((paragraph, index) => (
            <p key={index} className="transition-all duration-700">
              {paragraph}
            </p>
          ))}
        </div>

        <OrnamentalDivider variant="filigree" color="burgundy" className="my-8" />

        {/* Sacred Quote Card */}
        {messages.quote && (
          <div className="relative z-10 my-6 p-6 rounded-sm bg-[#FAF3E4]/70 border-l-2 border-r-2 border-[#D4AF37] text-center">
            <Heart className="w-4 h-4 text-[#A82B46] mx-auto mb-2 opacity-80" />
            <p className="font-cormorant italic text-base sm:text-lg text-[#470B1A] leading-relaxed">
              {messages.quote}
            </p>
            {messages.quoteAuthor && (
              <p className="font-cinzel text-xs text-[#8A6218] tracking-widest uppercase mt-2 font-medium">
                — {messages.quoteAuthor}
              </p>
            )}
          </div>
        )}

        {/* Family Signature line */}
        <div className="text-center mt-10 pt-4 border-t border-[#D4AF37]/30">
          <p className="font-script text-3xl sm:text-4xl text-[#751229]">
            {couple.bride.calligraphyName} & {couple.groom.calligraphyName}
          </p>
          <p className="font-cormorant text-sm sm:text-base text-[#611224] italic mt-1">
            With the Compliments of Family & Friends
          </p>
          {messages.duaa && (
            <p className="font-cormorant text-xs sm:text-sm text-[#8A6218] italic mt-3">
              {messages.duaa}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
