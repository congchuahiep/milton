"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { QuestionLine } from "@/components";
import { Button } from "@/components/ui/button";
import { useHover } from "@/hooks/useHover";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export default function YourPathSection() {
  const isMobile = useMediaQuery("(max-width: 1280px)");

  const hoverLeftRef = useRef<HTMLDivElement>(null);
  const isLeftHovered = useHover(hoverLeftRef as React.RefObject<HTMLElement>);
  const hoverRightRef = useRef<HTMLDivElement>(null);
  const isRightHovered = useHover(
    hoverRightRef as React.RefObject<HTMLElement>,
  );

  return (
    <section className="h-[590px] w-full flex items-center justify-center relative  overflow-hidden">
      {!isMobile && (
        <div className="absolute inset-0 size-full grid grid-cols-2 z-50 cursor-pointer">
          <div ref={hoverLeftRef} />
          <div ref={hoverRightRef} />
        </div>
      )}

      {!isMobile && (
        <>
          <Image
            src="/images/your-path-section/palm-left.png"
            alt="Palm Left"
            width={200}
            height={200}
            className="absolute left-0"
          />
          <Image
            src="/images/your-path-section/palm-left.png"
            alt="Palm Left"
            width={200}
            height={200}
            className="absolute left-0 translate-y-32"
          />
          <Image
            src="/images/your-path-section/palm-right.png"
            alt="Palm Right"
            width={200}
            height={200}
            className="absolute right-0"
          />
        </>
      )}

      <div
        className={cn(
          "w-md xl:w-3xl h-full relative z-10 flex flex-col items-center",
          "justify-end xl:justify-center px-4 text-center gap-6 xl:gap-12",
        )}
      >
        {isMobile ? (
          <p className="font-medium text-sm">
            <span className="text-primary font-bold">Milton V</span> là một vũ
            trụ ảo với nhiều vai trò đa dạng giống như đời thực. Bạn có thể trở
            thành bất kỳ ai mình muốn, tự tạo nên câu chuyện của riêng mình
            trong thế giới này cùng với những người chơi khác.
          </p>
        ) : (
          <p className="font-medium">
            Trong trò chơi nhập vai{" "}
            <span className="text-primary font-bold">Milton V</span> năng động
            này, bạn có thể lựa chọn: Lãnh đạo một băng đảng khét tiếng hoặc lật
            ngược kịch bản và tham gia lực lượng để trở thành người bảo vệ công
            lý. Vượt qua ranh giới mong manh giữa tội phạm và luật pháp, nơi mọi
            quyết định có thể đẩy bạn vào cuộc sống giao dịch ngầm hoặc vào hàng
            ngũ những người dũng cảm nhất của thành phố. Bạn sẽ cai trị đường
            phố hay sẽ bảo vệ chúng?
          </p>
        )}

        <h3 className={cn("font-semibold", !isMobile && "text-lg")}>
          Bạn sẽ thử chứ?{" "}
          <QuestionLine className="w-36 stroke-3 text-primary" />
        </h3>
        <div
          className={cn(
            "grid xl:grid-cols-2 gap-4 xl:gap-16",
            "w-full max-w-2xs xl:max-w-[640px]",
          )}
        >
          <Button
            variant="primary-outline"
            className={cn(
              !isMobile && "justify-between",
              "h-14 pl-4! text-[15px]",
              "transition-all duration-300",
              isLeftHovered && "bg-primary text-primary-foreground",
            )}
          >
            {!isMobile && (
              <ChevronLeft
                className={cn(
                  "size-6 stroke-primary",
                  "transition-all duration-300",
                  isLeftHovered && "stroke-primary-foreground",
                )}
              />
            )}
            Con đường làm chủ cái bang
          </Button>
          <Button
            variant="primary-outline"
            className={cn(
              !isMobile && "justify-between",
              "h-14 pl-5! text-[15px]",
              "transition-all duration-300",
              isRightHovered && "bg-primary text-primary-foreground",
            )}
          >
            Hành trình bảo vệ công lý
            {!isMobile && (
              <ChevronRight
                className={cn(
                  "size-6 stroke-primary",
                  "transition-all duration-300",
                  isRightHovered && "stroke-primary-foreground",
                )}
              />
            )}
          </Button>
        </div>

        {!isMobile && (
          <div className="absolute bottom-0 flex text-sm gap-2 items-center">
            <Image
              src="/images/your-path-section/mouse.png"
              alt="Particles"
              width={13}
              height={13}
              className={cn("")}
            />
            <p>Cuộn tiếp để xem thêm</p>
          </div>
        )}

        {!isMobile && (
          <>
            <Image
              src="/images/your-path-section/particles.png"
              alt="Particles"
              width={500}
              height={500}
              className={cn("absolute -z-10 hidden xl:block")}
            />
            <Image
              src="/images/your-path-section/particles.png"
              alt="Particles"
              width={500}
              height={500}
              className={cn("absolute -z-10 translate-x-1/2 hidden xl:block")}
            />
            <Image
              src="/images/your-path-section/particles.png"
              alt="Particles"
              width={500}
              height={500}
              className={cn("absolute -z-10 -translate-x-1/2 hidden xl:block")}
            />
          </>
        )}
      </div>

      <Image
        src="/images/your-path-section/criminal.png"
        alt="Criminal"
        width={550}
        height={500}
        className={cn(
          "absolute rotate-9 xl:-rotate-9 -translate-y-[15%]",
          "xl:top-1/2 md:-translate-y-[12%] xl:-translate-y-[37%] xl:-translate-x-full",
          "transition-all duration-300",
          "md:scale-60 xl:scale-100 rotate-y-180 xl:rotate-y-0",
          "scale-40 -translate-x-1/3",
          !isLeftHovered && "grayscale-100",
        )}
      />
      <Image
        src="/images/your-path-section/justice.png"
        alt="Justice"
        width={560}
        height={560}
        className={cn(
          "absolute",
          "-translate-y-[13%]",
          "xl:top-1/2 md:-translate-y-[10%] xl:-translate-y-[35%] xl:translate-x-full",
          "transition-all duration-300  overflow-hidden",
          "md:scale-60 xl:scale-100 rotate-y-180 xl:rotate-y-0",
          "scale-40 translate-x-1/3",
          !isRightHovered && "grayscale-100",
        )}
      />
    </section>
  );
}
