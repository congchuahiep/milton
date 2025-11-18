"use client";

import { UsersIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { routes } from "@/configs/routes";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { MenuIcon } from "./animate-ui/icons/menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const navItems = [
  {
    id: 1,
    title: "Chơi ngay",
    href: routes.register,
  },
  {
    id: 2,
    title: "Tải xuống",
    href: routes.home,
  },
  {
    id: 3,
    title: "Diễn đàn",
    href: routes.home,
  },
  {
    id: 4,
    title: "Discord",
    href: routes.home,
  },
  {
    id: 5,
    title: "Wiki",
    href: routes.home,
  },
];

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 1280px)");

  return (
    <header
      className={cn(
        "pt-12 px-8 mx-auto max-w-[1694px] absolute top-0 left-0 right-0 z-100",
        "flex justify-between items-center",
      )}
    >
      <div className="flex gap-6 grow basis-0">
        <Link href={routes.home}>
          <Image
            src="/logo.png"
            alt="Milton Logo"
            width={640}
            height={192}
            className="h-8 w-auto"
          />
        </Link>
        <Item
          size="sm"
          className={cn(
            "bg-neutral-800 text-neutral-400 py-1.5 px-2.5",
            "hidden xl:flex",
          )}
        >
          <ItemMedia>
            <UsersIcon weight="fill" size={16} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="font-bold flex items-baseline text-[13px]">
              NGƯỜI CHƠI: <span className="text-white text-base">1 024</span>
            </ItemTitle>
          </ItemContent>
        </Item>
      </div>

      <nav
        className={cn(
          "flex gap-6 justify-center font-bold uppercase text-base",
          "text-neutral-400",
          isMobile && "hidden",
        )}
      >
        {navItems.map((item) => (
          <Link key={item.id} href={item.href} className="hover:text-white">
            {item.title}
          </Link>
        ))}
      </nav>

      <div
        className={cn("flex justify-end grow basis-0", isMobile && "hidden")}
      >
        <Button className="h-12 font-bold text-base w-28">DONATE</Button>
      </div>

      {isMobile && <MobileNavMenu />}
    </header>
  );
}

function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="top">
      <DrawerTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="cursor-pointer size-10"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon className="size-8!" animate={isOpen} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="z-100 h-screen max-h-screen! border-none">
        <div className="flex justify-between py-8 px-4">
          <DrawerTitle>
            <Link href={routes.home}>
              <Image
                src="/logo.png"
                alt="Milton Logo"
                width={640}
                height={192}
                className="h-8 w-auto"
              />
            </Link>
          </DrawerTitle>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              className="cursor-pointer size-10"
              onClick={() => setIsOpen(false)}
            >
              <MenuIcon className="size-8!" animate={isOpen} />
            </Button>
          </DrawerClose>
        </div>
        <DrawerHeader>
          {navItems.map((item) => (
            <Button
              key={item.id}
              asChild
              variant="primary-outline"
              className="border-stone-600 h-10 uppercase font-bold"
            >
              <Link href={item.href}>{item.title}</Link>
            </Button>
          ))}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
