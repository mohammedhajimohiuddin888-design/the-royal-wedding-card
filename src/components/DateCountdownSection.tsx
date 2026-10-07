import React, { useState, useEffect } from 'react';
import { OrnamentalDivider } from './OrnamentalDivider';
import { WeddingData } from '../types/wedding';
import { Calendar, Download } from 'lucide-react';

interface DateCountdownSectionProps {
  weddingData: WeddingData;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const DateCountdownSection: React.FC<DateCountdownSectionProps> = ({ weddingData }) => {
  const { eventDate, couple, venue, events } = weddingData;

  const calculateTimeRemaining = (): TimeRemaining => {
    const target = new Date(eventDate.isoDate).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isExpired: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate.isoDate]);

  // Google Calendar Link generator for Shadi & Dinner
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`The Wedding of ${couple.bride.calligraphyName} & ${couple.groom.calligraphyName}`);
    const details = encodeURIComponent(
      `Celebrating the wedding of ${couple.bride.fullName} & ${couple.groom.fullName}.\n\nShadi: Thursday, 17th December 2026\nDinner: Sunday, 20th December 2026\nVenue: ${venue.name}, ${venue.address}.`
    );
    const location = encodeURIComponent(`${venue.name}, ${venue.address}, ${venue.cityStateZip}`);
    // Start date 2026-12-17 19:00 IST (+0530) => UTC 13:30 to 18:00
    const startIso = '20261217T133000Z';
    const endIso = '20261217T180000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  };

  // iCalendar (.ics) download for both functions
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Royal Wedding//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Shadi - ${couple.bride.calligraphyName} & ${couple.groom.calligraphyName}`,
      `DESCRIPTION:Auspicious Wedding Ceremony of Sabiha & Mohd Haji at ${venue.name}`,
      `LOCATION:${venue.name}, ${venue.address}`,
      'DTSTART:20261217T133000Z',
      'DTEND:20261217T180000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'BEGIN:VEVENT',
      `SUMMARY:Dinner - ${couple.bride.calligraphyName} & ${couple.groom.calligraphyName}`,
      `DESCRIPTION:Royal Wedding Dinner & Reception at ${venue.name}`,
      `LOCATION:${venue.name}, ${venue.address}`,
      'DTSTART:20261220T143000Z',
      'DTEND:20261220T183000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'wedding-sabiha-mohd-haji.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 bg-velvet-dark text-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-[#3B0917]/50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        <p className="font-cinzel text-xs sm:text-sm text-[#ECC371] tracking-[0.35em] uppercase font-semibold mb-3">
          Save The Auspicious Dates
        </p>

        <h2 className="font-cinzel-dec text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold tracking-wider">
          A Celebration of Two Days
        </h2>

        <OrnamentalDivider variant="crest" className="my-6" />

        {/* Date Display Card */}
        <div className="relative p-6 sm:p-8 rounded-sm bg-gradient-to-b from-[#2E0713]/90 to-[#1A0309]/90 border border-[#D4AF37]/50 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          {/* Inner hairline frame */}
          <div className="absolute inset-2 border border-[#D4AF37]/20 pointer-events-none" />

          {/* Dual Function Dates Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-b border-[#D4AF37]/30 pb-6 mb-6">
            {/* Shadi */}
            <div className="p-3.5 rounded-sm bg-[#1A0208] border border-[#ECC371]/40 flex flex-col items-center">
              <span className="font-cinzel text-xs text-[#ECC371] tracking-[0.25em] uppercase font-semibold">
                Shadi Ceremony
              </span>
              <span className="font-cinzel text-3xl font-bold text-white my-1">
                17
              </span>
              <span className="font-cinzel text-xs text-[#F9E5B8] tracking-wider uppercase">
                Thursday · Dec 2026
              </span>
              <span className="text-[11px] font-sans-clean text-[#ECC371]/80 mt-1">
                07:00 PM Onwards
              </span>
            </div>

            {/* Dinner */}
            <div className="p-3.5 rounded-sm bg-[#1A0208] border border-[#ECC371]/40 flex flex-col items-center">
              <span className="font-cinzel text-xs text-[#ECC371] tracking-[0.25em] uppercase font-semibold">
                Wedding Dinner
              </span>
              <span className="font-cinzel text-3xl font-bold text-white my-1">
                20
              </span>
              <span className="font-cinzel text-xs text-[#F9E5B8] tracking-wider uppercase">
                Sunday · Dec 2026
              </span>
              <span className="text-[11px] font-sans-clean text-[#ECC371]/80 mt-1">
                08:00 PM Onwards
              </span>
            </div>
          </div>

          <p className="font-cinzel text-xs text-[#F9E5B8] tracking-widest uppercase">
            {venue.name}
          </p>
          <p className="font-cormorant italic text-xs sm:text-sm text-[#ECC371]/80 mt-1">
            Gudi Malkapur, Mehdipatnam, Hyderabad
          </p>

          {/* Live Countdown Grid to Shadi */}
          <div className="mt-8 pt-6 border-t border-[#D4AF37]/30">
            <p className="font-cinzel text-[10px] sm:text-xs text-[#E8DCB9]/70 uppercase tracking-[0.25em] mb-4">
              Counting Down To The Sacred Moment (17 Dec 2026)
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-sm bg-[#140206]/80 border border-[#D4AF37]/35 shadow-inner"
                >
                  <span className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient tabular-nums">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="font-sans-clean text-[9px] sm:text-[10px] tracking-wider uppercase text-[#E8DCB9]/60 mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#3B0917] hover:bg-[#520D21] border border-[#D4AF37]/60 text-[#F9E5B8] text-xs font-cinzel font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-[#ECC371]" />
              Add Dates To Calendar
            </a>

            <button
              onClick={handleDownloadIcs}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#1C040A] hover:bg-[#2C0611] border border-[#D4AF37]/40 text-[#E8DCB9] text-xs font-cinzel tracking-wider transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#ECC371]" />
              Apple / Outlook (.ics)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
