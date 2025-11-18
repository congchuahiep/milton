"use client";

import {
  DownloadSimpleIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DownloadLauncherTab() {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center mt-8 w-lg relative",
      )}
    >
      <Image
        src="https://majestic-rp.ru/images/new-account/launcher.webp"
        alt="Chưa có ảnh"
        width={510}
        height={340}
        className="rounded-md border brightness-90 opacity-50"
        loading="eager"
      />

      <div className="absolute w-full text-center mb-12">
        <h3 className="uppercase font-bold text-2xl">
          Tải Launcher và chơi ngay
        </h3>
        <Button
          className={cn(
            "mt-8 h-12 shadow-[0_0_16px_8px] shadow-primary/50",
            "text-base font-bold",
          )}
        >
          <DownloadSimpleIcon weight="fill" className="size-5!" /> Tải xuống
        </Button>
      </div>
      <p className="mt-12 font-semibold text-muted-foreground text-sm">
        Có thắc mắc?{" "}
        <a
          className={cn(
            "inline-flex items-baseline gap-1.5 text-foreground",
            "border-b border-primary",
          )}
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VideoCameraIcon weight="fill" size={16} /> Xem video hướng dẫn
        </a>
      </p>
    </div>
  );
}
