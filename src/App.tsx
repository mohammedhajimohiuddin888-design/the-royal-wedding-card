import React, { useState, useEffect } from 'react';
import { weddingData } from './data/weddingData';
import { OpeningCover } from './components/OpeningCover';
import { CinematicCurtainReveal } from './components/CinematicCurtainReveal';
import { WelcomeSection } from './components/WelcomeSection';
import { MessageSection } from './components/MessageSection';
import { DateCountdownSection } from './components/DateCountdownSection';
import { CoupleSection } from './components/CoupleSection';
import { EventsSection } from './components/EventsSection';
import { VenueSection } from './components/VenueSection';
import { ClosingSection } from './components/ClosingSection';
import { FloatingControls } from './components/FloatingControls';

export default function App() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [showCurtains, setShowCurtains] = useState<boolean>(false);

  // Check URL hash or session for deep link (e.g. #rsvp)
  useEffect(() => {
    if (window.location.hash) {
      const elem = document.querySelector(window.location.hash);
      if (elem && isOpened) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isOpened]);

  const handleStartOpening = () => {
    setIsOpening(true);
    setTimeout(() => {
      setShowCurtains(true);
    }, 400);
  };

  const handleCurtainComplete = () => {
    setShowCurtains(false);
    setIsOpened(true);
    setIsOpening(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleReplayOpening = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsOpened(false);
      setIsOpening(false);
      setShowCurtains(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#140206] text-[#F7EFE4] relative font-cormorant selection:bg-[#D4AF37]/30 selection:text-[#FFF8E7]">
      {/* CINEMATIC CURTAIN REVEAL OVERLAY */}
      {showCurtains && (
        <CinematicCurtainReveal
          onComplete={handleCurtainComplete}
          coupleNames={{
            bride: weddingData.couple.bride.calligraphyName,
            groom: weddingData.couple.groom.calligraphyName,
          }}
        />
      )}

      {/* STAGE 1: PHYSICAL WEDDING INVITATION COVER */}
      {!isOpened ? (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#100104]">
          <div className="w-full max-w-lg min-h-screen shadow-2xl relative">
            <OpeningCover
              weddingData={weddingData}
              onOpen={handleStartOpening}
              isOpening={isOpening}
            />
          </div>
        </div>
      ) : (
        /* STAGE 2: ROYAL WEDDING VERTICAL INTERACTIVE STORY */
        <main className="relative w-full">
          {/* DESKTOP LUXURY AMBIENCE */}
          <div className="min-h-screen w-full flex justify-center bg-radial from-[#22040D] via-[#140206] to-[#0A0103]">
            {/* Left & Right Decorative Palace Filigree Pillar Bars on Desktop */}
            <div className="hidden xl:block fixed top-0 bottom-0 left-8 w-20 pointer-events-none opacity-25">
              <div className="h-full w-full border-r border-[#D4AF37]/30 flex flex-col justify-around items-center">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rotate-45 border border-[#ECC371]" />
                ))}
              </div>
            </div>
            <div className="hidden xl:block fixed top-0 bottom-0 right-8 w-20 pointer-events-none opacity-25">
              <div className="h-full w-full border-l border-[#D4AF37]/30 flex flex-col justify-around items-center">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rotate-45 border border-[#ECC371]" />
                ))}
              </div>
            </div>

            {/* Main Luxury Stationery Column */}
            <div className="w-full max-w-2xl bg-[#1A0308] border-x border-[#D4AF37]/20 shadow-[0_0_60px_rgba(0,0,0,0.9)] relative">
              <WelcomeSection weddingData={weddingData} />
              <MessageSection weddingData={weddingData} />
              <DateCountdownSection weddingData={weddingData} />
              <CoupleSection weddingData={weddingData} />
              <EventsSection weddingData={weddingData} />
              <VenueSection weddingData={weddingData} />
              <ClosingSection
                weddingData={weddingData}
                onReplay={handleReplayOpening}
              />
            </div>
          </div>

          {/* Floating Controls: Music Toggle & Share Button */}
          <FloatingControls
            isOpen={isOpened}
            musicTitle={weddingData.music.title}
            musicSubtitle={weddingData.music.subtitle}
          />
        </main>
      )}
    </div>
  );
}
