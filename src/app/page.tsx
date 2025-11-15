"use client";

import {
  FaqSection,
  HeroSection,
  PlayingAndContactSection,
  ShowcaseSection,
  YourPathSection,
} from "@/app/_sections";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full relative gap-16">
      <HeroSection />
      <YourPathSection />
      <ShowcaseSection />
      <PlayingAndContactSection />
      <FaqSection />
    </main>
  );
}
