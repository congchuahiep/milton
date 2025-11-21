"use client";

import { UsersIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { PlayButton } from "@/components";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { routes } from "@/configs/routes";
import { useHover } from "@/hooks/useHover";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

const cards = [
  {
    url: "/images/hero-card/nav_1_BW.png",
    hoverUrl: "/images/hero-card/nav_1.png",
    man: "/images/hero-card/man_1.png",
    alt: "Card 1",
    title: "Bác sĩ",
  },
  {
    url: "/images/hero-card/nav_2_BW.png",
    hoverUrl: "/images/hero-card/nav_2.png",
    man: "/images/hero-card/man_2.png",
    alt: "Card 2",
    title: "Cảnh sát",
  },
  {
    url: "/images/hero-card/nav_3_BW.png",
    hoverUrl: "/images/hero-card/nav_3.png",
    man: "/images/hero-card/man_3.png",
    alt: "Card 3",
    title: "Công nhân",
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
    title: "Quân đội",
  },
  {
    url: "/images/hero-card/nav_6_BW.png",
    hoverUrl: "/images/hero-card/nav_6.png",
    man: "/images/hero-card/man_6.png",
    alt: "Card 6",
    title: "Cái bang",
  },
  {
    url: "/images/hero-card/nav_7_BW.png",
    hoverUrl: "/images/hero-card/nav_7.png",
    man: "/images/hero-card/man_7.png",
    alt: "Card 7",
    title: "Lãnh đạo",
  },
];

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 1280px)");

  return (
    <section
      className={cn(
        "h-[920px] w-full relative flex items-center justify-center",
        "overflow-hidden",
      )}
    >
      {isMobile ? <MobileHeroSection /> : <DesktopHeroSection />}
    </section>
  );
}

function DesktopHeroSection() {
  const hoverRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(hoverRef as React.RefObject<HTMLElement>);

  return (
    <>
      <div className="absolute w-screen px-4">
        <Image
          src="/images/hero-background.webp"
          alt="Hero Background"
          width={1920}
          height={1080}
          className={cn(
            "w-full scale-160 object-bottom",
            "object-cover mask-alpha mask-b-from-50% mask-b-to-90%",
            "grayscale brightness-20 mask-t-from-70% mask-t-to-95%",
            "transition-all duration-300",
            isHovered && "grayscale-0 brightness-100",
          )}
        />
      </div>

      <div
        className={cn(
          "flex flex-1 gap-4 justify-center h-[520px] max-w-8xl px-4",
        )}
      >
        {cards.map((card, index) => (
          <Link
            // biome-ignore lint/suspicious/noArrayIndexKey: static element
            key={index}
            href={routes.register}
            className="relative w-full h-full cursor-pointer"
          >
            <div
              ref={index === 3 ? hoverRef : null}
              className={cn(
                "relative w-full h-full cursor-pointer",
                "transition-all duration-300 group rounded-4xl overflow-hidden",
                "shadow-rose-400/20",
                isHovered && "shadow-[0_0_32px_2px]",
              )}
            >
              <div
                className={cn(
                  "absolute bg-linear-to-t from-rose-500/50 to-60% to-rose-500/10 size-full z-10",
                  index === 3 && "z-20 from-rose-500/70",
                )}
              />

              {card.title && (
                <div
                  className={cn(
                    "absolute bottom-12 z-20 text-center w-full uppercase",
                    "font-semibold opacity-0 transition-opacity duration-300",
                    "group-hover:opacity-100",
                  )}
                >
                  <p className="text-foreground/70">Trở thành</p>
                  <h3 className="text-foreground text-lg font-bold">
                    {card.title}
                  </h3>
                </div>
              )}

              {index === 3 && (
                <div
                  className={cn(
                    "absolute z-20 left-1/2 -translate-x-1/2 bottom-8",
                    "flex flex-col items-center w-full",
                  )}
                >
                  <PlayButton
                    className={cn(
                      "group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.8)]",
                      "size-18 transition-all duration-300",
                    )}
                  />
                  <div
                    className={cn(
                      "text-white mt-4 font-bold text-xl uppercase text-center",
                      "select-none",
                    )}
                  >
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
                  isHovered && "opacity-0",
                )}
                loading="eager"
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
                    isHovered && "translate-y-35 grayscale-0",
                  )}
                  loading="eager"
                />
              )}
              <Image
                src={card.hoverUrl}
                alt={card.alt}
                width={200}
                height={200}
                className={cn(
                  "w-full h-full object-cover absolute top-0 left-0",
                )}
                loading="eager"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function MobileHeroSection() {
  return (
    <div className="relative size-full flex items-center justify-center">
      <Image
        src="/logo.png"
        alt="Milton Logo"
        width={300}
        height={300}
        className={cn(
          "absolute z-100 drop-shadow-[0_0_32px] drop-shadow-slate-600",
          "h-auto w-auto",
        )}
      />
      <Image
        // biome-ignore lint/style/noNonNullAssertion: Ảnh có tồn tại
        src={cards[5].man!}
        alt={cards[5].alt}
        width={400}
        height={400}
        className={cn("h-auto w-auto", "absolute z-50")}
      />
      <Image
        // biome-ignore lint/style/noNonNullAssertion: Ảnh có tồn tại
        src={cards[2].man!}
        alt={cards[2].alt}
        width={400}
        height={400}
        className={cn(
          "h-auto w-auto",
          "absolute z-40 -translate-x-60 translate-y-5 scale-95",
        )}
      />
      <Image
        // biome-ignore lint/style/noNonNullAssertion: Ảnh có tồn tại
        src={cards[0].man!}
        alt={cards[0].alt}
        width={400}
        height={400}
        className={cn(
          "h-auto w-auto",
          "absolute z-40 translate-x-60 translate-y-5 scale-95",
          "rotate-y-180",
        )}
      />
      <Image
        // biome-ignore lint/style/noNonNullAssertion: Ảnh có tồn tại
        src={cards[1].man!}
        alt={cards[1].alt}
        width={800}
        height={800}
        className={cn(
          "h-auto w-auto",
          "absolute z-50 -translate-x-120 translate-y-60 scale-90",
        )}
      />
      <Image
        // biome-ignore lint/style/noNonNullAssertion: Ảnh có tồn tại
        src={cards[6].man!}
        alt={cards[6].alt}
        width={700}
        height={700}
        className={cn(
          "h-auto w-auto",
          "absolute z-30 translate-x-110 translate-y-20 scale-70",
          "rotate-y-180",
        )}
      />

      <div
        className={cn(
          "absolute inset-0 mask-linear-0",
          "mask-linear-from-60% mask-linear-to-100%",
          "bg-slate-900",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 mask-linear-0",
          "mask-linear-from-20% mask-linear-to-40%",
          "bg-black z-50",
        )}
      />

      <div className="absolute flex flex-col gap-3 bottom-32 z-100">
        <Button
          variant="primary-outline"
          className={cn(
            "p-8! border-rose-600 bg-rose-950/80",
            "font-bold text-lg uppercase",
            "shadow-[0_0_64px_24px] shadow-rose-500/30",
          )}
          asChild
        >
          <Link href={routes.register}>
            <PlayButton className="size-8!" />
            Chơi ngay!
          </Link>
        </Button>
        <Item
          size="sm"
          variant="outline"
          className={cn("bg-neutral-950 text-neutral-400 py-2 px-2.5")}
        >
          <ItemMedia>
            <UsersIcon weight="fill" size={16} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="font-bold flex items-baseline text-[13px]">
              <span>NGƯỜI CHƠI:</span>
              <span className="text-white text-base">1 024</span>
            </ItemTitle>
          </ItemContent>
        </Item>
      </div>
    </div>
  );
}
