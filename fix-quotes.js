const fs = require("fs");
const path = require("path");

const files = [
  "Nav.jsx",
  "Hero.jsx",
  "FloatingHearts.jsx",
  "MusicToggle.jsx",
  "AboutHer.jsx",
  "Timeline.jsx",
  "LovePoem.jsx",
  "RelationshipRules.jsx",
  "DreamWedding.jsx",
  "WhatSheLoves.jsx",
  "Gallery.jsx",
  "FinalLetter.jsx",
];

files.forEach((file) => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, "utf-8");
  content = content.replace(/\\"/g, '"');
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Fixed ${file}`);
});

console.log("All files fixed!");
