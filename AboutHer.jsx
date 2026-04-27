import React from "react";
import { motion } from "framer-motion";
import {
  Cake,
  Ruler,
  Eye,
  Palette,
  Apple,
  Soup,
  Music,
  Book,
  Drum,
  Moon,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease, delay },
});

const factCards = [
  { icon: Cake, label: "Birthday", value: "November 1, 2006" },
  { icon: Ruler, label: "Height", value: "5'4 — almost mine" },
  { icon: Sparkles, label: "Hair", value: "Soft brown" },
  {
    icon: Eye,
    label: "Eyes",
    value: "The most beautiful brown eyes I've ever seen",
  },
];

const favorites = [
  { icon: Palette, title: "Colors", text: "Pastel & light blue skies" },
  {
    icon: Apple,
    title: "Fruits",
    text: "Mango · grapes · strawberry · watermelon · banana",
  },
  { icon: Soup, title: "Comfort food", text: "Halo-halo (always halo-halo)" },
];

const traits = [
  { icon: Sparkles, text: "Soft-hearted and caring" },
  { icon: Sparkles, text: "Indecisive but adorably so" },
  { icon: Music, text: "Loves music, books, politics & cars" },
  { icon: Drum, text: "Wants to learn instruments — especially drums" },
  { icon: Sparkles, text: "Dreams of building a full studio" },
  { icon: Moon, text: "Sleeps with many pillows, comfortable in darkness" },
  { icon: GraduationCap, text: "Studious — pure little academic weapon" },
  { icon: Book, text: "Does a little foot tap when she's craving" },
];

export const AboutHer = () => {
  return (
    <section
      id="about-her"
      className="relative py-28 md:py-40 px-6 md:px-12"
      data-testid="about-her-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeIn(0)} className="text-center mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ink-soft">
            Chapter One
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink mt-4">
            Her, in tender detail.
          </h2>
          <p className="mt-5 font-serif italic text-ink-soft max-w-xl mx-auto">
            Klyanne Paran — the girl who turned ordinary days into poetry.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-6 auto-rows-[minmax(140px,auto)]">
          {/* Hero portrait */}
          <motion.div
            {...fadeIn(0.05)}
            className="md:col-span-3 md:row-span-2 relative rounded-3xl overflow-hidden glass-card group"
          >
            <img
              src="https://images.unsplash.com/photo-1749741993874-bc375dbcaa17?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHxyb21hbnRpYyUyMGNvdXBsZSUyMGhvbGRpbmclMjBoYW5kcyUyMHN1bnNldCUyMGJlYWNofGVufDB8fHx8MTc3NzI4MTczM3ww&ixlib=rb-4.1.0&q=85"
              alt="A quiet moment together"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-night/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-script text-3xl sm:text-4xl text-sky-paper drop-shadow-md">
                my whole sky
              </p>
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-sky-soft mt-1">
                Klyanne Paran
              </p>
            </div>
          </motion.div>

          {/* Fact cards */}
          {factCards.map((f, i) => (
            <motion.div
              key={f.label}
              {...fadeIn(0.1 + i * 0.06)}
              className="md:col-span-3 lg:col-span-3 glass-card rounded-2xl p-6 flex items-start gap-4"
              style={{
                gridColumn: i < 2 ? "span 3 / span 3" : "span 3 / span 3",
              }}
            >
              <div className="shrink-0 w-11 h-11 rounded-full bg-sky-mid/40 flex items-center justify-center text-ink">
                <f.icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-ink-soft">
                  {f.label}
                </p>
                <p className="font-serif text-lg text-ink mt-1 leading-snug">
                  {f.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Favorites */}
        <motion.div {...fadeIn(0.05)} className="mt-24 text-center">
          <span className="ornament-line font-serif italic text-xs text-ink-soft">
            her little favorites
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {favorites.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeIn(0.1 + i * 0.08)}
              className="glass-card rounded-3xl p-8 hover:translate-y-[-4px] transition-transform duration-500"
            >
              <f.icon size={22} strokeWidth={1.4} className="text-sky-deep" />
              <h3 className="font-serif italic text-2xl text-ink mt-5">
                {f.title}
              </h3>
              <p className="font-sans text-ink-soft mt-2 leading-relaxed">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Traits */}
        <motion.div {...fadeIn(0.05)} className="mt-24 text-center mb-10">
          <span className="ornament-line font-serif italic text-xs text-ink-soft">
            the way she is
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.text}
              {...fadeIn(0.04 * i)}
              className="rounded-2xl border border-sky-soft/80 bg-white/40 backdrop-blur-sm p-5 flex items-start gap-3 hover:bg-white/70 transition-colors"
            >
              <t.icon
                size={16}
                strokeWidth={1.5}
                className="text-rose-heart mt-1 shrink-0"
              />
              <p className="font-serif text-[15px] leading-relaxed text-ink">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};