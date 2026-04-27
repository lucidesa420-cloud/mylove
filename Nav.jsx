import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const links = [
  { id: "hero", label: "Home" },
  { id: "about-her", label: "Her" },
  { id: "timeline", label: "Story" },
  { id: "love-poem", label: "Poem" },
  { id: "rules", label: "Vows" },
  { id: "dream-wedding", label: "Someday" },
  { id: "final-letter", label: "Letter" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-sky-paper/70 border-b border-white/60"
          : "bg-transparent"
      }`}
      data-testid="main-nav"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          className="flex items-center gap-2 group"
        >
          <Heart
            size={16}
            strokeWidth={1.6}
            className="text-rose-heart group-hover:fill-rose-heart transition-all"
          />
          <span className="font-script text-2xl text-ink">K &amp; me</span>
        </button>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="font-sans text-[11px] uppercase tracking-[0.3em] text-ink-soft hover:text-ink transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink-soft hidden sm:block">
          a forever, started.
        </span>
      </div>
    </nav>
  );
};
"