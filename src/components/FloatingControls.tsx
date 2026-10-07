import React, { useState } from 'react';
import { Share2, Check, CalendarCheck } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

interface FloatingControlsProps {
  musicTitle: string;
  musicSubtitle: string;
  isOpen: boolean;
  onJumpToRsvp?: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  musicTitle,
  musicSubtitle,
  isOpen,
  onJumpToRsvp,
}) => {
  const [shareCopied, setShareCopied] = useState<boolean>(false);

  const handleShare = async () => {
    const shareData = {
      title: 'The Royal Wedding Celebration · Sabiha & Mohd Haji',
      text: 'You are cordially invited to celebrate the royal wedding of Sabiha & Mohd Haji.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // User cancelled or unsupported, fallback to clipboard
      }
    }

    // Clipboard fallback
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <aside
      aria-label="Invitation tools"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 transition-opacity duration-700"
      style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {/* RSVP Quick Jump Button */}
      {onJumpToRsvp && (
        <button
          onClick={onJumpToRsvp}
          className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#3B0917]/95 hover:bg-[#520D21] border border-[#ECC371]/70 text-[#FFF8E7] text-xs font-cinzel font-semibold tracking-wider shadow-xl shadow-black/50 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
          aria-label="Quick jump to RSVP form"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-[#ECC371]" />
          <span className="hidden sm:inline">RSVP</span>
        </button>
      )}

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#24060E]/90 hover:bg-[#380917] border border-[#D4AF37]/50 text-[#F9E5B8] text-xs font-cinzel tracking-wider shadow-xl shadow-black/50 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
        aria-label="Share wedding invitation"
        title="Share Invitation"
      >
        {shareCopied ? (
          <>
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline text-emerald-300">Link Copied</span>
          </>
        ) : (
          <>
            <Share2 className="w-4 h-4 text-[#ECC371]" />
            <span className="hidden sm:inline">Share</span>
          </>
        )}
      </button>

      {/* Background Music Toggle */}
      <AudioPlayer
        isOpen={isOpen}
        shouldStartAfterOpen={true}
        title={musicTitle}
        subtitle={musicSubtitle}
      />
    </aside>
  );
};
