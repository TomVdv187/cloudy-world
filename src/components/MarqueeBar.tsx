"use client";

import { marqueeWords } from "@/lib/data";

export default function MarqueeBar() {
  const separator = (
    <span className="mx-6 text-dusty/40 text-sm">&#x2726;</span>
  );

  const content = marqueeWords.map((word, i) => (
    <span key={i} className="flex items-center shrink-0">
      <span className="text-sm tracking-[0.3em] uppercase font-sans text-cloud-300/70">
        {word}
      </span>
      {separator}
    </span>
  ));

  return (
    <div className="w-full overflow-hidden py-4 border-y border-dusty/10 bg-midnight/50">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex shrink-0">{content}</div>
        <div className="flex shrink-0">{content}</div>
      </div>
    </div>
  );
}
