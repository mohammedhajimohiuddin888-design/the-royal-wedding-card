import React from 'react';
import { OrnamentalDivider } from './OrnamentalDivider';
import { WeddingData, WeddingEvent } from '../types/wedding';
import { Clock, MapPin, Sparkles, Shirt, Utensils } from 'lucide-react';

interface EventsSectionProps {
  weddingData: WeddingData;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ weddingData }) => {
  const { events } = weddingData;

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 bg-velvet-dark text-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#3B0917]/35 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <p className="font-cinzel text-xs sm:text-sm text-[#ECC371] tracking-[0.35em] uppercase font-semibold mb-3">
          Order of Auspicious Functions
        </p>

        <h2 className="font-cinzel-dec text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold tracking-wider">
          Wedding Functions
        </h2>

        <OrnamentalDivider variant="crest" className="my-6" />

        {/* The 2 Functions: Shadi & Dinner */}
        <div className="space-y-8 sm:space-y-10 mt-8 text-left">
          {events.map((event: WeddingEvent, index: number) => (
            <article
              key={event.id}
              className="group relative overflow-hidden rounded-sm bg-gradient-to-b from-[#2B0611] to-[#180309] border border-[#D4AF37]/50 shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#F9E5B8]/80 p-6 sm:p-9"
            >
              {/* Inner hairline border */}
              <div className="absolute inset-2 border border-[#D4AF37]/20 pointer-events-none" />

              {/* Event Order Number Tag */}
              <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#3D0A19] border border-[#ECC371]/60 flex items-center justify-center shrink-0">
                    {event.id === 'dinner' ? (
                      <Utensils className="w-4 h-4 text-[#ECC371]" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-[#ECC371]" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient">
                      {event.title}
                    </h3>
                    {event.subtitle && (
                      <p className="font-cormorant italic text-sm text-[#F7E5C3]/80 mt-0.5">
                        {event.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#160207] border border-[#D4AF37]/40 shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#ECC371]" />
                  <span className="font-cinzel text-xs text-[#F9E5B8] font-medium tracking-wider">
                    {event.time}
                  </span>
                </div>
              </div>

              {/* Date & Location */}
              <div className="space-y-2 mb-4 font-cormorant text-base text-[#E8DCB9]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#ECC371] shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-white text-base sm:text-lg">{event.venue}</p>
                    <p className="text-sm text-[#E8DCB9]/70">{event.address}</p>
                  </div>
                </div>

                {event.dressCode && (
                  <div className="flex items-center gap-2.5 pt-1 text-sm text-[#ECC371]/90">
                    <Shirt className="w-3.5 h-3.5 shrink-0 text-[#ECC371]" />
                    <span>Attire: {event.dressCode}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="font-cormorant text-base sm:text-lg text-[#F2E5D0]/90 leading-relaxed border-t border-[#D4AF37]/20 pt-4">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
