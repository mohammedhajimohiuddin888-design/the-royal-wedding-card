import React, { useState } from 'react';
import { OrnamentalDivider, RoyalEmblem } from './OrnamentalDivider';
import { WeddingData } from '../types/wedding';
import { MapPin, Navigation, Copy, Check, Car, Compass } from 'lucide-react';

interface VenueSectionProps {
  weddingData: WeddingData;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ weddingData }) => {
  const { venue } = weddingData;
  const [copied, setCopied] = useState<boolean>(false);

  const fullAddress = `${venue.name}, ${venue.address}, ${venue.cityStateZip}`;

  const handleCopyAddress = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullAddress);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = fullAddress;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 bg-velvet-deep text-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <p className="font-cinzel text-xs sm:text-sm text-[#ECC371] tracking-[0.35em] uppercase font-semibold mb-3">
          Palace Location & Directions
        </p>

        <h2 className="font-cinzel-dec text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold tracking-wider">
          The Venue
        </h2>

        <OrnamentalDivider variant="crest" className="my-6" />

        {/* Venue Card Container (Pure royal architectural motif, no photos) */}
        <div className="relative overflow-hidden rounded-sm bg-gradient-to-b from-[#2C0712] to-[#180309] border border-[#D4AF37]/50 shadow-[0_16px_40px_rgba(0,0,0,0.7)] text-left">
          {/* Inner hairline frame */}
          <div className="absolute inset-2 border border-[#D4AF37]/20 pointer-events-none z-10" />

          {/* Palace Heraldic Header (No photos) */}
          <div className="relative py-10 px-6 sm:px-8 bg-gradient-to-b from-[#3D0A1A] to-[#25050F] border-b border-[#D4AF37]/35 text-center flex flex-col items-center justify-center">
            <RoyalEmblem size={58} className="mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />

            <span className="font-cinzel text-[11px] text-[#ECC371] tracking-[0.3em] uppercase font-semibold block mb-1">
              {venue.palaceSubtitle}
            </span>

            <h3 className="font-cinzel text-2xl sm:text-3xl text-white font-bold drop-shadow-md">
              {venue.name}
            </h3>
          </div>

          {/* Venue Details Body */}
          <div className="p-6 sm:p-8 relative z-20 space-y-6">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#ECC371] shrink-0 mt-1" />
              <div>
                <p className="font-cinzel text-base sm:text-lg text-white font-semibold">
                  {venue.address}
                </p>
                <p className="font-cormorant text-base text-[#E8DCB9]/80">
                  {venue.cityStateZip}
                </p>
              </div>
            </div>

            {/* Landmark & Parking */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D4AF37]/20 text-sm font-cormorant text-[#E8DCB9]">
              <div className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-[#ECC371] shrink-0 mt-0.5" />
                <p><strong className="text-white">Landmark:</strong> {venue.landmark}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-[#ECC371] shrink-0 mt-0.5" />
                <p><strong className="text-white">Parking:</strong> {venue.parkingNote}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-[#D4AF37]/30">
              {/* Google Maps Button */}
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#3B0917] hover:bg-[#520D21] border border-[#ECC371] text-[#F9E5B8] text-xs font-cinzel font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              >
                <Navigation className="w-4 h-4 text-[#ECC371]" />
                View on Google Maps
              </a>

              {/* Copy Address Button */}
              <button
                onClick={handleCopyAddress}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#1A0309] hover:bg-[#28050F] border border-[#D4AF37]/50 text-[#E8DCB9] text-xs font-cinzel tracking-[0.2em] uppercase transition-all duration-300 active:scale-95 cursor-pointer relative"
                aria-label="Copy venue address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#ECC371]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
