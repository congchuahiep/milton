"use client";

import { HeroSection } from "@/app/_sections";
import { Header } from "@/components";

export default function Home() {
	return (
		<div className="flex flex-col h-[200vh] w-full relative">
			<Header />
			<HeroSection />
		</div>
	);
}
