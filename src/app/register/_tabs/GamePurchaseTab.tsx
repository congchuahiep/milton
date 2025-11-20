"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRegisterTabs } from "../provider";

export default function GamePurchaseTab() {
  const { setTab } = useRegisterTabs();

  return (
    <div className="flex flex-col items-center mt-8 gap-2 max-w-sm">
      <Image
        src="https://majestic-rp.ru/images/new-account/gta.webp"
        alt="GTA V"
        width={200}
        height={200}
        loading="eager"
      />

      <h3 className="my-8 uppercase font-bold text-2xl">
        Bạn đã mua GTA 5 chưa?
      </h3>

      <Button className="uppercase w-full h-12 font-bold text-base">
        Chưa, Mua ngay
      </Button>
      <Button
        variant="outline"
        className="uppercase w-full h-12 font-bold text-base"
        onClick={() => setTab("step-3")}
      >
        Tôi đã mua rồi
      </Button>
    </div>
  );
}
