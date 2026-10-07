import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'lotus' | 'crest' | 'simple' | 'filigree' | 'arch';
  color?: 'gold' | 'burgundy';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  variant = 'crest',
  color = 'gold',
}) => {
  const strokeColor = color === 'gold' ? '#D4AF37' : '#580B1C';
  const fillColor = color === 'gold' ? '#ECC371' : '#7A132B';

  if (variant === 'simple') {
    return (
      <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
        <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#D4AF37]/20" />
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
      </div>
    );
  }

  if (variant === 'lotus') {
    return (
      <div className={`flex items-center justify-center gap-2 my-6 ${className}`}>
        <div className="h-[1px] w-10 sm:w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
        <svg
          width="42"
          height="24"
          viewBox="0 0 42 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#D4AF37]"
          aria-hidden="true"
        >
          {/* Central Lotus Petal */}
          <path
            d="M21 2C21 2 24.5 9 24.5 15C24.5 17.5 23 20 21 21C19 20 17.5 17.5 17.5 15C17.5 9 21 2 21 2Z"
            stroke={strokeColor}
            strokeWidth="1.2"
            fill={fillColor}
            fillOpacity="0.15"
          />
          {/* Left Petal */}
          <path
            d="M21 21C16 19 12 14.5 13 9C15.5 12 18.5 16 21 21Z"
            stroke={strokeColor}
            strokeWidth="1"
            fill={fillColor}
            fillOpacity="0.1"
          />
          {/* Right Petal */}
          <path
            d="M21 21C26 19 30 14.5 29 9C26.5 12 23.5 16 21 21Z"
            stroke={strokeColor}
            strokeWidth="1"
            fill={fillColor}
            fillOpacity="0.1"
          />
          {/* Base flourish */}
          <circle cx="21" cy="21.5" r="1.5" fill={strokeColor} />
          <circle cx="10" cy="19" r="1" fill={strokeColor} opacity="0.7" />
          <circle cx="32" cy="19" r="1" fill={strokeColor} opacity="0.7" />
        </svg>
        <div className="h-[1px] w-10 sm:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
      </div>
    );
  }

  if (variant === 'filigree') {
    return (
      <div className={`flex items-center justify-center my-6 ${className}`}>
        <svg
          width="180"
          height="28"
          viewBox="0 0 180 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 14H60M120 14H178"
            stroke={strokeColor}
            strokeWidth="0.8"
            strokeDasharray="2 2"
            opacity="0.6"
          />
          <path
            d="M75 14C80 9 85 9 90 14C95 19 100 19 105 14"
            stroke={strokeColor}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="90" cy="14" r="3.5" stroke={strokeColor} strokeWidth="1" fill={fillColor} fillOpacity="0.25" />
          <circle cx="68" cy="14" r="1.5" fill={strokeColor} />
          <circle cx="112" cy="14" r="1.5" fill={strokeColor} />
        </svg>
      </div>
    );
  }

  // Default: Royal Crest Medallion
  return (
    <div className={`flex items-center justify-center gap-3 my-7 ${className}`}>
      <div className="h-[1px] flex-1 max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="18" cy="18" r="14" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6" />
        <rect
          x="18"
          y="6"
          width="17"
          height="17"
          transform="rotate(45 18 6)"
          stroke={strokeColor}
          strokeWidth="1.2"
          fill={fillColor}
          fillOpacity="0.12"
        />
        <circle cx="18" cy="18" r="3.5" fill={strokeColor} />
        <circle cx="18" cy="4" r="1.5" fill={strokeColor} />
        <circle cx="18" cy="32" r="1.5" fill={strokeColor} />
        <circle cx="4" cy="18" r="1.5" fill={strokeColor} />
        <circle cx="32" cy="18" r="1.5" fill={strokeColor} />
      </svg>
      <div className="h-[1px] flex-1 max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
    </div>
  );
};

export const RoyalEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 72,
  className = '',
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDEAB8" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C6615" />
          </linearGradient>
        </defs>

        {/* Outer dotted royal halo */}
        <circle cx="50" cy="50" r="46" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="2 3" opacity="0.7" />
        <circle cx="50" cy="50" r="40" stroke="url(#goldGrad)" strokeWidth="1.2" />

        {/* 8-pointed royal star / mandala */}
        <rect
          x="50"
          y="18"
          width="45"
          height="45"
          transform="rotate(45 50 18)"
          stroke="url(#goldGrad)"
          strokeWidth="1"
          fill="rgba(212, 175, 55, 0.05)"
        />
        <circle cx="50" cy="50" r="24" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.6" />

        {/* Inner floral arches */}
        <path
          d="M50 28 C56 36 64 44 72 50 C64 56 56 64 50 72 C44 64 36 56 28 50 C36 44 44 36 50 28 Z"
          stroke="url(#goldGrad)"
          strokeWidth="1.2"
          fill="url(#goldGrad)"
          fillOpacity="0.1"
        />

        {/* Center Jewel */}
        <circle cx="50" cy="50" r="5" fill="url(#goldGrad)" />
        <circle cx="50" cy="50" r="2" fill="#FFFFFF" />

        {/* Cardinal pearl dots */}
        <circle cx="50" cy="8" r="2" fill="url(#goldGrad)" />
        <circle cx="50" cy="92" r="2" fill="url(#goldGrad)" />
        <circle cx="8" cy="50" r="2" fill="url(#goldGrad)" />
        <circle cx="92" cy="50" r="2" fill="url(#goldGrad)" />
      </svg>
    </div>
  );
};
