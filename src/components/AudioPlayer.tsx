import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface AudioPlayerProps {
  shouldStartAfterOpen?: boolean;
  isOpen: boolean;
  title: string;
  subtitle: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  shouldStartAfterOpen = true,
  isOpen,
  title,
  subtitle,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasUserToggled, setHasUserToggled] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  // Web Audio API refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const isSynthesizerRunningRef = useRef<boolean>(false);
  const timerRef = useRef<number | null>(null);

  // Initialize and run the Indian ambient Tanpura/Santoor harmonic synthesizer
  const startHarmonicSynthesizer = useCallback(() => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (masterGainRef.current) {
        masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
        masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, ctx.currentTime);
        masterGainRef.current.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 1.2);
        isSynthesizerRunningRef.current = true;
        setIsPlaying(true);
        return;
      }

      // Master output gain
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.001, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 2.0);
      master.connect(ctx.destination);
      masterGainRef.current = master;

      // Serene Indian Wedding Drone chords (Root D3 = 146.83 Hz, A3 = 220 Hz, D4 = 293.66 Hz, F#4 = 369.99 Hz, A4 = 440 Hz - Raga Kalyan mood)
      const baseFrequencies = [146.83, 220.00, 293.66];
      baseFrequencies.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = index === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle gentle detune for tanpura acoustic warmth
        osc.detune.setValueAtTime((index - 1) * 3, ctx.currentTime);

        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.15 + index * 0.05, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.03, ctx.currentTime);
        lfo.connect(lfoGain);

        oscGain.gain.setValueAtTime(0.04 / (index + 1), ctx.currentTime);
        lfoGain.connect(oscGain.gain);

        osc.connect(oscGain);
        oscGain.connect(master);

        osc.start();
        lfo.start();
      });

      // Melodic gentle sitar/santoor bell plucks every few seconds in Raga Kalyan scale
      const ragaNotes = [293.66, 329.63, 369.99, 440.00, 493.88, 587.33, 739.99]; // D, E, F#, A, B, D5, F#5
      let noteIndex = 0;

      const schedulePluck = () => {
        if (!isSynthesizerRunningRef.current || !ctx || ctx.state === 'closed') return;

        const now = ctx.currentTime;
        const noteFreq = ragaNotes[noteIndex % ragaNotes.length];
        noteIndex = (noteIndex + 1 + Math.floor(Math.random() * 2)) % ragaNotes.length;

        const pluckOsc = ctx.createOscillator();
        const pluckGain = ctx.createGain();

        pluckOsc.type = 'sine';
        pluckOsc.frequency.setValueAtTime(noteFreq, now);

        // Acoustic pluck envelope
        pluckGain.gain.setValueAtTime(0.0001, now);
        pluckGain.gain.exponentialRampToValueAtTime(0.05, now + 0.04);
        pluckGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

        // Resonance filter
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1400, now);

        pluckOsc.connect(pluckGain);
        pluckGain.connect(filter);
        filter.connect(master);

        pluckOsc.start(now);
        pluckOsc.stop(now + 3.0);

        // Schedule next random note between 2.5s and 4.5s
        const nextInterval = 2500 + Math.random() * 2000;
        timerRef.current = window.setTimeout(schedulePluck, nextInterval);
      };

      isSynthesizerRunningRef.current = true;
      setIsPlaying(true);
      timerRef.current = window.setTimeout(schedulePluck, 1500);
    } catch (e) {
      console.warn('AudioContext not available:', e);
    }
  }, []);

  const stopSynthesizer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && masterGainRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
      masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, ctx.currentTime);
      masterGainRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
    }
    isSynthesizerRunningRef.current = false;
    setIsPlaying(false);
  }, []);

  // Check stored preference or trigger when opened
  useEffect(() => {
    const storedPref = sessionStorage.getItem('wedding_music_enabled');
    if (isOpen && shouldStartAfterOpen && !hasUserToggled) {
      if (storedPref !== 'false') {
        startHarmonicSynthesizer();
        sessionStorage.setItem('wedding_music_enabled', 'true');
      }
    }
  }, [isOpen, shouldStartAfterOpen, hasUserToggled, startHarmonicSynthesizer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const toggleMusic = () => {
    setHasUserToggled(true);
    if (isPlaying) {
      stopSynthesizer();
      sessionStorage.setItem('wedding_music_enabled', 'false');
    } else {
      startHarmonicSynthesizer();
      sessionStorage.setItem('wedding_music_enabled', 'true');
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleMusic}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#24060E]/90 hover:bg-[#380917] border border-[#D4AF37]/50 hover:border-[#F9E5B8] text-[#F9E5B8] shadow-lg shadow-black/50 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 active:scale-95"
        aria-label={isPlaying ? 'Mute royal celebration music' : 'Play royal celebration music'}
        title={isPlaying ? 'Mute Music' : 'Play Music'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#ECC371] animate-pulse" />
            {/* Visualizer bars */}
            <div className="flex items-end gap-[2px] h-3.5 w-4" aria-hidden="true">
              <span className="w-[2px] bg-[#ECC371] rounded-full animate-[bounce_0.8s_ease-in-out_infinite] h-2.5" />
              <span className="w-[2px] bg-[#ECC371] rounded-full animate-[bounce_0.6s_ease-in-out_infinite_0.2s] h-3.5" />
              <span className="w-[2px] bg-[#ECC371] rounded-full animate-[bounce_0.9s_ease-in-out_infinite_0.4s] h-2" />
            </div>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-stone-400 group-hover:text-amber-200" />
            <Music className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-200 opacity-60" />
          </>
        )}

        <span className="text-xs font-serif tracking-wider hidden sm:inline text-amber-100/90">
          {isPlaying ? 'Music On' : 'Music Off'}
        </span>
      </button>

      {/* Floating tooltip */}
      {showTooltip && (
        <div className="absolute right-0 bottom-full mb-2 w-52 p-2.5 rounded-lg bg-[#1B0309] border border-[#D4AF37]/40 shadow-xl text-left pointer-events-none z-50">
          <p className="text-[11px] font-cinzel font-semibold text-[#ECC371] tracking-wide">{title}</p>
          <p className="text-[10px] text-amber-200/70 font-sans-clean mt-0.5">{subtitle}</p>
          <p className="text-[9px] text-[#D4AF37]/60 mt-1 uppercase tracking-wider">
            {isPlaying ? 'Click to mute' : 'Click to immerse in music'}
          </p>
        </div>
      )}
    </div>
  );
};
