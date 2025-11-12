import { UsersIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { routes } from "@/configs/routes";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header
      className={cn(
        "pt-12 px-8 mx-auto max-w-[1694px] absolute top-0 left-0 right-0 z-10",
        "grid grid-cols-3 items-center"
      )}
    >
      <div className="flex gap-6">
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
          className="bg-neutral-800 text-neutral-400 py-1.5 px-2.5"
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
        )}
      >
        <Link href={routes.home} className="hover:text-white">
          Chơi ngay
        </Link>
        <Link href={routes.home} className="hover:text-white">
          Tải xuống
        </Link>
        <Link href={routes.home} className="hover:text-white">
          Diễn đàn
        </Link>
        <Link href={routes.home} className="hover:text-white">
          Discord
        </Link>
        <Link href={routes.home} className="hover:text-white">
          Wiki
        </Link>
      </nav>

      <div className="flex justify-end">
        <Button className="h-12 font-bold text-base w-28">DONATE</Button>
      </div>
    </header>
  );
}
