"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  EnvelopeSimpleIcon,
  MoneyWavyIcon,
  ShieldIcon,
  UserIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { InputField } from "@/components/fields";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputGroupAddon } from "@/components/ui/input-group";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { cn } from "@/lib/utils";

const donateSchema = z.object({
  username: z.string().min(1).max(255),
  email: z.email().min(1).max(255),
  amount: z
    .string()
    .min(1, "Hãy nhập mức nạp hợp lệ")
    .max(4, "Nạp tôi đa 9999")
    .regex(/^\d+$/, "Định dạng không phải số!"),
});

type DonateFormValue = z.infer<typeof donateSchema>;

export default function Page() {
  const form = useForm<DonateFormValue>({
    resolver: zodResolver(donateSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      username: "",
    },
  });

  const onSubmit = (data: DonateFormValue) => {
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-neutral-700 text-neutral-50 mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  };

  return (
    <section
      className={cn(
        "flex flex-col items-end h-[960px] pt-36",
        "relative w-full max-w-7xl",
      )}
    >
      <div
        className={cn(
          "absolute left-[-213px] xl:left-0 top-[177px]",
          "-z-10 flex justify-center items-center",
        )}
      >
        <Image
          src="https://majestic-rp.ru/images/donate/Character.webp"
          alt="Donate character"
          width={1000}
          height={1000}
          className=""
        />
        <div
          className={cn(
            "size-[600px] bg-primary absolute top-4 left-10 opacity-50",
            "rounded-full bg-radial from-primary from-70% to-rose-400",
            "blur-3xl -z-10",
          )}
        />
        <div
          className={cn(
            "absolute inset-0 mask-linear-0",
            "mask-linear-from-20% mask-linear-to-40%",
            "bg-black",
          )}
        />
      </div>

      <div
        className={cn(
          "col-start-2 h-full w-lg relative pr-8",
          "flex flex-col gap-8",
        )}
      >
        <div className="absolute inset-0 bg-black blur-3xl -z-10" />

        <form id="donate-form">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-foreground text-xl font-bold uppercase">
              Nạp tiền vào tài khoản
            </h3>

            <Item
              className={cn(
                "py-2 px-3 bg-green-900/30 text-green-400/70",
                "border-none gap-2",
              )}
            >
              <ItemMedia>
                <ShieldIcon weight="fill" size={20} />
              </ItemMedia>

              <ItemContent className="font-bold">AN TOÀN</ItemContent>
            </Item>
          </div>

          <InputField
            name="email"
            placeholder="Email của tài khoản"
            control={form.control}
          >
            <InputGroupAddon>
              <EnvelopeSimpleIcon className="fill-primary size-4.5! ml-1 mr-2" />
            </InputGroupAddon>
          </InputField>
          <InputField
            name="username"
            placeholder="Tên tài khoản"
            control={form.control}
          >
            <InputGroupAddon>
              <UserIcon
                weight="fill"
                className="fill-primary size-4.5! ml-1 mr-2"
              />
            </InputGroupAddon>
          </InputField>
          <InputField
            name="amount"
            placeholder="Số tiền cần nạp"
            control={form.control}
            type="number"
          >
            <InputGroupAddon>
              <MoneyWavyIcon
                weight="fill"
                className="fill-primary size-4.5! ml-1 mr-2"
              />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              Tiền trong game
            </InputGroupAddon>
          </InputField>
        </form>

        <Item>
          <ItemContent>
            <ItemTitle className="flex items-center gap-1">
              Quy đổi:
              <div
                className={cn(
                  "flex items-center gap-1 bg-neutral-800 py-1 px-3",
                  "rounded-full",
                )}
              >
                1.000đ
              </div>
              =
              <div
                className={cn(
                  "flex items-center gap-1 bg-neutral-800 py-1 px-3",
                  "rounded-full",
                )}
              >
                <MoneyWavyIcon
                  weight="fill"
                  className="fill-primary size-4.5!"
                />
                1
              </div>
            </ItemTitle>
          </ItemContent>
        </Item>

        <div className="w-full">
          <div className="flex max-w-full gap-3 text-muted-foreground">
            <Checkbox />
            <p className="text-xs">
              Bằng việc tiếp tục, tôi đồng ý bị ràng buộc bởi{" "}
              <Link href="#" className="text-primary-foreground underline">
                các điều khoản của đề nghị.
              </Link>
            </p>
          </div>

          <div className="flex mt-3 gap-3 text-muted-foreground">
            <Checkbox />
            <p className="text-xs">
              Tôi đồng ý cho việc{" "}
              <Link href="#" className="text-primary-foreground underline">
                xử lý dữ liệu cá nhân
              </Link>{" "}
              theo cách thức, điều kiện và phạm vi được quy định trong "Bản đồng
              ý", mà nội dung của nó đã được tôi đọc và hiểu.
            </p>
          </div>
        </div>

        <Button
          className="h-12 uppercase font-bold"
          onClick={form.handleSubmit(onSubmit)}
        >
          Tiếp tục thanh toán
        </Button>
      </div>
    </section>
  );
}
