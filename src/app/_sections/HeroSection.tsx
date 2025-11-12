"use client";

import Image from "next/image";
import { useRef } from "react";
import { PlayButton } from "@/components";
import { useHover } from "@/hooks/useHover";
import { cn } from "@/lib/utils";

const cards = [
	{
		url: "/images/hero-card/nav_1_BW.png",
		hoverUrl: "/images/hero-card/nav_1.png",
		man: "/images/hero-card/man_1.png",
		alt: "Card 1",
	},
	{
		url: "/images/hero-card/nav_2_BW.png",
		hoverUrl: "/images/hero-card/nav_2.png",
		man: "/images/hero-card/man_2.png",
		alt: "Card 2",
	},
	{
		url: "/images/hero-card/nav_3_BW.png",
		hoverUrl: "/images/hero-card/nav_3.png",
		man: "/images/hero-card/man_3.png",
		alt: "Card 3",
	},
	{
		url: "/images/hero-card/nav_4_BW.png",
		hoverUrl: "/images/hero-card/nav_4.png",
		alt: "Card 4",
	},
	{
		url: "/images/hero-card/nav_5_BW.png",
		hoverUrl: "/images/hero-card/nav_5.png",
		man: "/images/hero-card/man_5.png",
		alt: "Card 5",
	},
	{
		url: "/images/hero-card/nav_6_BW.png",
		hoverUrl: "/images/hero-card/nav_6.png",
		man: "/images/hero-card/man_6.png",
		alt: "Card 6",
	},
	{
		url: "/images/hero-card/nav_7_BW.png",
		hoverUrl: "/images/hero-card/nav_7.png",
		man: "/images/hero-card/man_7.png",
		alt: "Card 7",
	},
];

export default function HeroSection() {
	const hoverRef = useRef<HTMLDivElement>(null);
	const isHovered = useHover(hoverRef as React.RefObject<HTMLElement>);

	return (
		<section
			className={cn(
				"h-[920px] w-full relative flex items-center justify-center overflow-hidden"
			)}
		>
			<div className="absolute w-screen">
				<Image
					src="/images/hero-background.webp"
					alt="Hero Background"
					width={1920}
					height={1080}
					className={cn(
						"w-full scale-160 object-bottom",
						"object-cover mask-alpha mask-b-from-50% mask-b-to-90%",
						"grayscale brightness-30",
						"transition-all duration-300",
						isHovered && "grayscale-0 brightness-100 mask-t-from-50% mask-t-to-90%"
					)}
				/>
			</div>

			<div
				className={cn(
					"flex flex-1 gap-4 justify-center h-[520px] max-w-[1480px]"
				)}
			>
				{cards.map((card, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: static element
						key={index}
						ref={index === 3 ? hoverRef : null}
						className={cn(
							"relative w-full h-full",
							"transition-all duration-300 group rounded-4xl overflow-hidden",
							"shadow-fuchsia-400/20 ",
							isHovered && "shadow-[0_0_32px_2px]"
						)}
					>
						<div
							className={cn(
								"absolute bg-linear-to-t from-fuchsia-500/50 to-60% to-fuchsia-500/10 size-full z-10",
								index === 3 && "z-20"
							)}
						/>

						{index === 3 && (
							<div className="absolute z-20 left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center w-full">
								<PlayButton
									className={cn(
										"size-18 group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.8)]",
										"transition-all duration-300"
									)}
								/>
								<div className="text-white mt-4 font-bold text-xl uppercase text-center">
									Chơi ngay
								</div>
							</div>
						)}

						<Image
							src={card.url}
							alt={card.alt}
							width={200}
							height={200}
							className={cn(
								"absolute",
								"w-full h-full object-cover",
								"transition-all duration-300 z-10",
								"group-hover:opacity-0",
								isHovered && "opacity-0"
							)}
						/>
						{card.man && (
							<Image
								src={card.man}
								alt={card.alt}
								width={400}
								height={400}
								className={cn(
									"absolute bottom-0 translate-y-40",
									"w-full h-120 object-cover grayscale-100",
									"transition-all duration-300 z-10",
									"group-hover:translate-y-35 group-hover:grayscale-0",
									isHovered && "translate-y-35 grayscale-0"
								)}
							/>
						)}
						<Image
							src={card.hoverUrl}
							alt={card.alt}
							width={200}
							height={200}
							className={cn("w-full h-full object-cover absolute top-0 left-0")}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
