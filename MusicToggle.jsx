import React, { useEffect, useRef, useState } from "react";
import { Music2, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const MusicToggle = ({ src = "/audio/panata.mp3" }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.18;
    audio.loop = true;
    // attempt autoplay (may be blocked)
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setShowHint(true);
        setTimeout(() => setShowHint(false), 6500);
      }
    };
    const onError = () => setAvailable(false);
    audio.addEventListener("error", onError);
    tryAutoplay();
    return () => audio.removeEventListener("error", onError);
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
        setShowHint(false);
      } catch {
        setAvailable(false);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3" data-testid="music-toggle-wrap">
        <button
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
          data-testid="music-toggle-btn"
          className="group relative h-14 w-14 rounded-full glass-card flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        >
          <span
            className={`absolute inset-0 rounded-full bg-sky-mid/40 ${
              playing ? "animate-soft-pulse" : ""
            }`}
            aria-hidden="true"
          />
          <span className="relative text-ink">
            {playing ? <Pause size={20} strokeWidth={1.6} /> : <Play size={20} strokeWidth={1.6} />}
          </span>
        </button>
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-[0.22em] text-ink-soft flex items-center gap-1">
            <Music2 size={11} strokeWidth={1.6} /> Now Playing
          </span>
          <span className="font-serif italic text-sm text-ink">
            Panata <span className="text-ink-soft">— Tothapi</span>
          </span>
        </div>
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="absolute left-20 sm:left-64 whitespace-nowrap text-xs glass-card px-3 py-2 rounded-full text-ink-soft"
            >
              Tap the heart to play music ♥
            </motion.div>
          )}
        </AnimatePresence>
        {!available && (
          <span className="hidden sm:block text-[10px] text-ink-soft italic max-w-[180px]">
            (place panata.mp3 in /public/audio/)
          </span>
        )}
      </div>
    </>
  );
};