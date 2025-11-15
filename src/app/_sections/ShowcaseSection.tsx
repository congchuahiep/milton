import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlayButton } from "@/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Item, ItemActions, ItemContent } from "@/components/ui/item";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

const featureHighlightItems = [
  {
    imagePath: "/images/showcase/rule-your-way.png",
    title: "Nhập vai theo cách của bạn",
    content:
      "Trong Milton V, bạn chọn: trở thành thủ lĩnh băng đảng khét tiếng hoặc gia nhập lực lượng bảo vệ công lý. Mỗi quyết định đưa bạn vào thế giới ngầm hoặc hàng ngũ những người dũng cảm. Bạn sẽ cai trị hay bảo vệ đường phố?",
  },
  {
    imagePath: "/images/showcase/cars-and-clothes-suit-all-tastes.png",
    title: "Xe và thời trang đa dạng phong phú",
    content:
      "Trải nghiệm tùy chỉnh không giới hạn: chọn xe từ siêu xe đến xe tải, cá nhân hóa nhân vật với trang phục đa dạng và khẳng định phong cách độc đáo của bạn.",
  },
  {
    imagePath: "/images/showcase/thrills-and-ventures.png",
    title: "Cảm giác hồi hộp và mạo hiểm",
    content:
      "Trong Milton V, bạn có thể tham gia nhiều hoạt động: điều hành doanh nghiệp, tạo thu nhập thụ động và cạnh tranh để kiểm soát lãnh địa. Quản lý tài sản khôn ngoan để trở thành ông trùm thực thụ.",
  },
];

const mediaItems = [
  {
    imagePath: "/images/showcase/1.png",
    alt: "Image 1",
  },
  {
    imagePath: "/images/showcase/2.png",
    alt: "Image 2",
  },
  {
    imagePath: "/images/showcase/3.png",
    alt: "Image 3",
  },
  {
    imagePath: "/images/showcase/1.png",
    alt: "Image 4",
  },
  {
    imagePath: "/images/showcase/2.png",
    alt: "Image 5",
  },
  {
    imagePath: "/images/showcase/3.png",
    alt: "Image 6",
  },
  {
    imagePath: "/images/showcase/2.png",
    alt: "Image 7",
  },
];

export default function ShowcaseSection() {
  return (
    <section
      className={cn(
        "mt-12 w-full relative flex items-center justify-center",
        "relative h-full px-4",
      )}
    >
      <div
        className={cn(
          "grid md:grid-cols-2 w-full xl:h-[500px] max-w-8xl",
          "gap-24 md:gap-9",
        )}
      >
        <FeatureHighlight />
        <MediaShowcase />
      </div>
    </section>
  );
}

function FeatureHighlight() {
  return (
    <Carousel>
      <CarouselContent className="relative min-h-full h-[500px]">
        {featureHighlightItems.map((item) => (
          <CarouselItem key={item.title} className="relative size-full">
            <Image
              src={item.imagePath}
              alt={item.title}
              fill
              sizes="100vw"
              className="object-cover scale-90 -translate-y-9 absolute"
            />
            <div className="absolute left-0 bottom-0 pl-4 pr-8">
              <h4 className="font-bold uppercase text-2xl mb-2">
                {item.title}
              </h4>
              <p className="text-[15px]">{item.content}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        className={cn(
          "absolute left-0 top-20 w-full h-full bg-rose-500/50 -z-10",
          "mask-radial-at-center mask-radial-from-10% mask-radial-to-70%",
        )}
      />
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function MediaShowcase() {
  const isMobile = useMediaQuery("(max-width: 1280px)");

  return (
    <div className="grid grid-cols-4 grid-rows-4 size-full gap-4">
      <div className="row-span-2 col-span-4 select-none cursor-pointer">
        <Item
          variant="outline"
          className="relative size-full p-0 overflow-hidden group"
        >
          <Image
            src="https://majestic-rp.ru/images/home/showcase/cover.jpg"
            alt="Image"
            fill
            sizes="100vw"
            className="object-cover object-[80%_20%] opacity-60 absolute"
          />
          <div
            className={cn(
              "absolute flex justify-center items-center w-full uppercase",
              "font-bold gap-8 text-lg",
            )}
          >
            <PlayButton
              className={cn(
                "size-16 group-hover:drop-shadow-[0_0_24px_#ffffff]",
                "transition-all duration-300 ease-in-out",
                "transform group-hover:scale-110",
              )}
            />
            <div>
              Xem ngay bản <br /> cập nhật mới nhất
            </div>
          </div>
        </Item>
      </div>

      {mediaItems.slice(0, isMobile ? 3 : 7).map((item) => (
        <Item
          key={item.alt}
          className={cn(
            "select-none cursor-pointer",
            "relative size-full p-0 overflow-hidden group",
            "transition-all duration-200 ease-in-out",
            "transform group-hover:scale-110",
            isMobile && "col-span-2",
          )}
        >
          <ImageZoom className="relative size-full">
            <Image
              src={item.imagePath}
              alt={item.alt}
              fill
              sizes="100vw"
              className="object-cover object-center absolute"
            />
          </ImageZoom>
        </Item>
      ))}

      <Item
        className={cn(
          "select-none cursor-pointer hover:-translate-y-1",
          "relative size-full overflow-hidden group",
          "transition-all duration-200 ease-in-out",
          "transform group-hover:scale-110",
          "font-bold text-xl gap-2",
          isMobile && "col-span-2",
        )}
        asChild
      >
        <Link href="#">
          <ItemContent className="text-right">
            Xem
            <br /> thêm ảnh
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon />
          </ItemActions>
        </Link>
      </Item>
    </div>
  );
}
