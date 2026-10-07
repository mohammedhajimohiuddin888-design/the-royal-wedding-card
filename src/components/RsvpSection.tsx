import React, { useState } from 'react';
import { OrnamentalDivider } from './OrnamentalDivider';
import { WeddingData } from '../types/wedding';
import { CheckCircle2, Send, MessageCircle } from 'lucide-react';

interface RsvpSectionProps {
  weddingData: WeddingData;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ weddingData }) => {
  const { rsvp, couple } = weddingData;

  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const validate = (): boolean => {
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return false;
    }
    if (!phoneNumber.trim()) {
      setErrorMsg('Please enter your contact phone number');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleConfirmAttendance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save in localStorage for persistence
    try {
      localStorage.setItem(
        'royal_wedding_rsvp',
        JSON.stringify({
          fullName,
          phoneNumber,
          guestCount,
          message,
          timestamp: new Date().toISOString(),
        })
      );
    } catch {
      // safe fallback
    }

    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const guestsText = `*Number of Guests:* ${guestCount}`;
    const noteText = message.trim() ? `*Blessings:* "${message.trim()}"` : '';

    const text = [
      `*Wedding RSVP for ${couple.bride.calligraphyName} & ${couple.groom.calligraphyName}*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `*Guest Name:* ${fullName.trim() || 'Guest'}`,
      `*Contact:* ${phoneNumber.trim() || 'N/A'}`,
      guestsText,
      noteText,
      `━━━━━━━━━━━━━━━━━━━━`,
      `_Sent with heartfelt blessings._`,
    ]
      .filter(Boolean)
      .join('\n');

    return encodeURIComponent(text);
  };

  const handleSendWhatsApp = () => {
    if (!validate()) return;
    const encoded = generateWhatsAppMessage();
    const url = `https://wa.me/${rsvp.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="rsvp-section" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-velvet-dark text-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#ECC371]/5 blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        <p className="font-cinzel text-xs sm:text-sm text-[#ECC371] tracking-[0.35em] uppercase font-semibold mb-3">
          Répondez S’il Vous Plaît
        </p>

        <h2 className="font-cinzel-dec text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold tracking-wider">
          RSVP
        </h2>

        <OrnamentalDivider variant="crest" className="my-6" />

        <p className="font-cormorant text-base sm:text-lg text-[#F4EBD9]/85 mb-8 max-w-md mx-auto">
          Kindly confirm your attendance by{' '}
          <strong className="text-[#ECC371]">{rsvp.deadline}</strong> to assist us in welcoming you with warm hospitality.
        </p>

        {/* Confirmation Success Card */}
        {isSubmitted ? (
          <div className="p-8 sm:p-10 rounded-sm bg-gradient-to-b from-[#2E0713] to-[#190308] border border-[#ECC371] shadow-2xl text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#3B0917] border border-[#ECC371] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#ECC371]" />
            </div>

            <h3 className="font-cinzel text-xl sm:text-2xl text-gold-gradient font-bold">
              Shukran & Welcome!
            </h3>

            <p className="font-cormorant text-base sm:text-lg text-[#F4EBD9] mt-3 leading-relaxed">
              Dearest {fullName}, your attendance has been recorded for {guestCount} guest{guestCount > 1 ? 's' : ''}. We look forward to celebrating together!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleSendWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-[#A3E635] text-xs font-cinzel font-semibold tracking-wider transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Share RSVP on WhatsApp
              </button>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto px-5 py-3 rounded-sm border border-[#D4AF37]/40 text-[#ECC371] text-xs font-cinzel tracking-wider hover:bg-[#2C0611] transition-all cursor-pointer"
              >
                Modify Response
              </button>
            </div>
          </div>
        ) : (
          /* RSVP Form - Direct attendance confirmation */
          <form
            onSubmit={handleConfirmAttendance}
            className="relative p-6 sm:p-10 rounded-sm bg-gradient-to-b from-[#290510] to-[#170208] border border-[#D4AF37]/50 shadow-[0_16px_40px_rgba(0,0,0,0.65)] text-left space-y-6"
          >
            {/* Inner hairline frame */}
            <div className="absolute inset-2 border border-[#D4AF37]/20 pointer-events-none" />

            {/* Error banner if any */}
            {errorMsg && (
              <div className="p-3 rounded-sm bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-sans-clean">
                {errorMsg}
              </div>
            )}

            {/* Full Name */}
            <div>
              <label htmlFor="rsvp-fullname" className="font-cinzel text-xs text-[#ECC371] tracking-widest uppercase block mb-1.5 font-medium">
                Full Name *
              </label>
              <input
                id="rsvp-fullname"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Janab Farooq Ahmed & Family"
                className="w-full px-4 py-3 rounded-sm bg-[#130105] border border-[#D4AF37]/40 text-[#F9E5B8] placeholder-[#D4AF37]/30 text-sm font-sans-clean focus:outline-none focus:border-[#ECC371] focus:ring-1 focus:ring-[#ECC371]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="rsvp-phone" className="font-cinzel text-xs text-[#ECC371] tracking-widest uppercase block mb-1.5 font-medium">
                Phone / WhatsApp Number *
              </label>
              <input
                id="rsvp-phone"
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 rounded-sm bg-[#130105] border border-[#D4AF37]/40 text-[#F9E5B8] placeholder-[#D4AF37]/30 text-sm font-sans-clean focus:outline-none focus:border-[#ECC371] focus:ring-1 focus:ring-[#ECC371]"
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label className="font-cinzel text-xs text-[#ECC371] tracking-widest uppercase block mb-1.5 font-medium">
                Number of Guests Attending
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuestCount(num)}
                    className={`flex-1 py-2.5 rounded-sm border text-xs font-cinzel font-semibold transition-all cursor-pointer ${
                      guestCount === num
                        ? 'bg-[#ECC371] border-[#ECC371] text-[#24060E]'
                        : 'bg-[#150207] border-[#D4AF37]/30 text-[#E8DCB9] hover:border-[#ECC371]/60'
                    }`}
                  >
                    {num} {num === 5 ? '+' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Warm Note / Blessings */}
            <div>
              <label htmlFor="rsvp-message" className="font-cinzel text-xs text-[#ECC371] tracking-widest uppercase block mb-1.5 font-medium">
                Blessings or Message for the Couple
              </label>
              <textarea
                id="rsvp-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your prayers, warm wishes, or congratulations..."
                className="w-full px-4 py-3 rounded-sm bg-[#130105] border border-[#D4AF37]/40 text-[#F9E5B8] placeholder-[#D4AF37]/30 text-sm font-sans-clean focus:outline-none focus:border-[#ECC371] focus:ring-1 focus:ring-[#ECC371] resize-none"
              />
            </div>

            {/* Submit & WhatsApp Buttons */}
            <div className="pt-4 space-y-3">
              <button
                type="submit"
                className="w-full py-4 rounded-sm bg-gradient-to-r from-[#4C0E20] via-[#631229] to-[#4C0E20] hover:from-[#5C1126] hover:to-[#5C1126] border border-[#ECC371] text-[#FFF8E7] text-xs font-cinzel font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#ECC371]" />
                Confirm Attendance
              </button>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 rounded-sm bg-[#112316] hover:bg-[#16301d] border border-[#25D366]/50 text-[#86EFAC] text-xs font-cinzel font-semibold tracking-[0.2em] uppercase transition-all duration-300 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Send Via WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
