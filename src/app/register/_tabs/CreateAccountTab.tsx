"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CrownIcon,
  EnvelopeSimpleIcon,
  LockIcon,
  UserIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { InputField } from "@/components/fields";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { InputGroupAddon } from "@/components/ui/input-group";
import { useRegisterTabs } from "../provider";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { cn } from "@/lib/utils";

const createAccountSchema = z
  .object({
    email: z
      .email("Định dạng email không đúng!")
      .min(5, "Email không được quá 5 ký tự"),
    username: z
      .string()
      .min(5, "Tên người dùng phải có ít nhất 5 ký tự")
      .max(100, "Tên người dùng không được quá 100 ký tự"),
    password: z
      .string()
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .max(100, "Mật khẩu không được quá 100 ký tự"),
    confirmPassword: z
      .string()
      .min(8, "Xác nhận mật khẩu không được quá 8 ký tự")
      .max(100, "Xác nhận mật khẩu không được quá 100 ký tự"),
    promocode: z
      .string()
      .max(100, "Mã khuyến mãi không được quá 100 ký tự")
      .optional(),
  })
  .refine((value) => value.confirmPassword === value.password, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
  });

type CreateAccountFormValue = z.infer<typeof createAccountSchema>;

export default function CreateAccountTab() {
  const { setTab } = useRegisterTabs();

  const form = useForm<CreateAccountFormValue>({
    resolver: zodResolver(createAccountSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      promocode: undefined,
    },
  });

  const username = form.watch("username");
  const email = form.watch("email");
  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");

  const onSubmit = (data: CreateAccountFormValue) => {
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
    <div className="flex flex-col items-center justify-center w-full ">
      <h2 className="uppercase font-black text-xl mb-4">Tạo tài khoản</h2>

      <form
        id="form-create-account"
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-lg"
      >
        <FieldGroup className="gap-0">
          <InputField name="email" placeholder="Email" control={form.control}>
            <InputGroupAddon>
              <EnvelopeSimpleIcon className="fill-primary size-4.5! ml-1 mr-2" />
            </InputGroupAddon>
          </InputField>
          <InputField
            name="username"
            placeholder="Tên tài khoản, đừng bao giờ sử dụng tên thật của bạn"
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
            name="password"
            placeholder="Mật khẩu"
            control={form.control}
            autoComplete="new-password"
            type="password"
          >
            <InputGroupAddon>
              <LockIcon
                weight="fill"
                className="fill-primary size-4.5! ml-1 mr-2"
              />
            </InputGroupAddon>
          </InputField>
          <InputField
            name="confirmPassword"
            placeholder="Lặp lại mật khẩu"
            control={form.control}
            autoComplete="new-password"
            type="password"
          >
            <InputGroupAddon>
              <LockIcon
                weight="fill"
                className="fill-primary size-4.5! ml-1 mr-2"
              />
            </InputGroupAddon>
          </InputField>
          <InputField
            name="promocode"
            placeholder="Mã khuyến mãi"
            control={form.control}
          >
            <InputGroupAddon>
              <CrownIcon
                weight="fill"
                className="fill-primary size-4.5! ml-1 mr-2"
              />
            </InputGroupAddon>
          </InputField>

          <div
            className={cn(
              "grid lg:grid-cols-2 mt-4 gap-y-2 gap-x-4 h-24 lg:h-16",
            )}
          >
            <Button
              variant="outline"
              className="h-full uppercase font-bold"
              type="button"
              onClick={() => {
                setTab("step-2");
              }}
            >
              Đã có tài khoản?
            </Button>
            <Button
              className={cn(
                "h-full uppercase font-bold rounded disabled:bg-neutral-700",
                "disabled:text-gray-200",
              )}
              disabled={!username || !password || !email || !confirmPassword}
            >
              Đăng ký
            </Button>
          </div>

          <div className="flex mt-8 gap-3 text-muted-foreground">
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
          <div className="flex mt-3 gap-3 text-muted-foreground">
            <Checkbox />
            <p className="text-xs">
              Tôi đồng ý với{" "}
              <Link href="#" className="text-primary-foreground underline">
                Chính sách quyền riêng tư.
              </Link>
            </p>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}
