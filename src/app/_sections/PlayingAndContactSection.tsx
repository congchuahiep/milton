import {
  DownloadSimpleIcon,
  PaperPlaneTiltIcon,
  ShoppingCartSimpleIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";

export default function PlayingAndContactSection() {
  return (
    <section
      className={cn(
        "mt-32 w-full relative flex items-center justify-center",
        "relative",
      )}
    >
      <div className="w-8xl grid lg:grid-cols-2 gap-16 xl:gap-9 px-4 ">
        <PlayingSection />
        <ContactSection />
      </div>

      <Image
        src="/images/circle-background.png"
        alt="Circle Background"
        width={1280}
        height={1280}
        className={cn(
          "absolute hidden lg:block -z-10 w-3xl",
          "mask-radial-at-center mask-radial-from-20%",
        )}
      />
    </section>
  );
}

function PlayingSection() {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="uppercase font-black text-xl xl:text-2xl">
        Bắt đầu chơi như thế nào?
      </h3>
      <p className="font-semibold text-sm xl:text-base text-muted-foreground">
        Chỉ với 2 bước đơn giản, bạn đã sẵn sàng nhập vai ngay!
      </p>
      <Item className="mt-4 p-3 xl:p-5">
        <div className="flex gap-4 xl:flex-1">
          <ItemMedia>
            <Image src="/logo/GTA.png" alt="GTA Logo" width={56} height={56} />
          </ItemMedia>
          <ItemContent className="pt-1">
            <ItemTitle className="xl:text-base font-bold">
              Mua Grand Theft Auto V Legacy
            </ItemTitle>
            <ItemDescription>
              Nếu bạn chưa có phiên bản bản quyền
            </ItemDescription>
          </ItemContent>
        </div>
        <ItemActions className="w-full xl:w-fit">
          <Button
            size="lg"
            className="font-bold text-sm w-full xl:h-13 xl:w-54 rounded"
          >
            <ShoppingCartSimpleIcon weight="fill" className="size-5!" />
            Mua 199.000 VND
          </Button>
        </ItemActions>
      </Item>
      <Item className="mt-4 p-3 xl:p-5">
        <div className="flex gap-4 xl:flex-1">
          <ItemMedia>
            <Image
              src="/logo/new-op3.png"
              alt="New OP3 Logo"
              width={56}
              height={56}
              className="rounded-md"
            />
          </ItemMedia>
          <ItemContent className="pt-1">
            <ItemTitle className="xl:text-base font-bold">
              Tải và cài đặt Milton Launcher
            </ItemTitle>
            <ItemDescription className="">
              Launcher sẽ tự động tải về các tệp cần thiết để kết nối máy chủ
            </ItemDescription>
          </ItemContent>
        </div>
        <ItemActions className="w-full xl:w-fit">
          <Button
            size="lg"
            className="font-bold text-sm w-full xl:h-13 xl:w-54 rounded"
          >
            <DownloadSimpleIcon weight="bold" className="size-5!" />
            TẢI NGAY
          </Button>
        </ItemActions>
      </Item>
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

const contactItems = [
  {
    url: "https://discord.gg/",
    alt: "Discord logo",
    imagePath: "/logo/discord.png",
    className:
      "bg-gradient-to-r from-[#5865f211] via-[#5865f233] to-[#5865f211] hover:bg-[#5865f2aa]",
  },
  {
    url: "https://instagram.com/",
    alt: "Instagram logo",
    imagePath: "/logo/instagram.png",
    className:
      "bg-gradient-to-r from-[#833ab422] via-[#833ab433] to-[#833ab422] hover:bg-[#833ab4aa]",
  },
  {
    url: "https://tiktok.com/",
    alt: "Tiktok logo",
    imagePath: "/logo/tiktok.png",
    className:
      "bg-gradient-to-r from-[#25f4ee11] via-[#fe2c5533] to-[#25f4ee11] hover:bg-[#fe2c55aa]",
  },
  {
    url: "https://youtube.com/",
    alt: "YouTube logo",
    imagePath: "/logo/youtube.png",
    className:
      "bg-gradient-to-r from-[#ff000022] via-[#ff000033] to-[#ff000022] hover:bg-[#ff000088]",
  },
];

function ContactSection() {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="uppercase font-black text-xl xl:text-2xl">
        Đồng hành cùng Milton V
      </h3>
      <p className="font-semibold text-sm xl:text-base text-muted-foreground">
        Theo dõi chúng tôi trên các kênh xã hội để cập nhật tin tức mới nhất!
      </p>
      <div className="grid grid-cols-2 gap-4">
        {contactItems.map((item) => (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.url}
          >
            <Item className={cn("mt-4 relative size-full p-0 overflow-hidden")}>
              <div
                className={cn(
                  "size-full relative p-3 flex items-center justify-center",
                  item.className,
                )}
              >
                <Image
                  src={item.imagePath}
                  alt={item.alt}
                  width={300}
                  height={180}
                  className="rounded-md w-40 opacity-90"
                />
              </div>
            </Item>
          </a>
        ))}
      </div>
      <p className="mt-12 font-semibold text-muted-foreground text-sm">
        Bạn muốn trở thành đối tác truyền thông?{" "}
        <a
          className={cn(
            "inline-flex items-baseline gap-1.5 text-foreground",
            "border-b border-primary",
          )}
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PaperPlaneTiltIcon weight="fill" size={16} /> Liên hệ với chúng tôi
        </a>
      </p>
    </div>
  );
}
