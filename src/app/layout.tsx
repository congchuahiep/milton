import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Milton RP | Thế giới GTA 5 RP đỉnh cao",
    template: "%s | Milton RP",
  },
  description:
    "Milton RolePlay – Thế giới GTA 5 RP đỉnh cao, nơi hơn 10000 người chơi mỗi ngày cùng hòa mình vào trải nghiệm nhập vai sống động và chân thực nhất.",
  keywords: ["Milton", "GTA 5", "GTA V", "RolePlay"],

  openGraph: {
    title: "Milton RP",
    description:
      "Milton RolePlay – Thế giới GTA 5 RP đỉnh cao, nơi hơn 10000 người chơi mỗi ngày cùng hòa mình vào trải nghiệm nhập vai sống động và chân thực nhất.",
    url: "https://milton-v.com/",
    siteName: "Milton RP",
    images: [
      {
        url: "https://cdn.milton-v.com/public/milton.jpg",
        width: 600,
        height: 600,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${beVietnamPro.className} antialiased bg-black`)}>
        <Header />
        <main className="flex flex-col items-center w-full">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
