import React from "react";
import "@/App.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { AboutHer } from "./components/AboutHer";
import { Timeline } from "./components/Timeline";
import { LovePoem } from "./components/LovePoem";
import { RelationshipRules } from "./components/RelationshipRules";
import { DreamWedding } from "./components/DreamWedding";
import { WhatSheLoves } from "./components/WhatSheLoves";
import { Gallery } from "./components/Gallery";
import { FinalLetter } from "./components/FinalLetter";
import { MusicToggle } from "./components/MusicToggle";

function App() {
  return (
    <div className="App relative">
      <Nav />
      <main>
        <Hero />
        <AboutHer />
        <Gallery />
        <Timeline />
        <LovePoem />
        <RelationshipRules />
        <DreamWedding />
        <WhatSheLoves />
        <FinalLetter />
      </main>
      <footer className="py-10 text-center font-serif italic text-ink-soft text-sm">
        made with quiet love · for Klyanne ·{" "}
        <span className="font-script text-xl text-rose-heart align-middle">
          ♡
        </span>
      </footer>
      <MusicToggle src="/audio/panata.mp3" />
    </div>
  );
}

export default App;