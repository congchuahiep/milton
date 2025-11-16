import { AppWindowIcon, UserIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  CreateAccountTab,
  DownloadLauncherTab,
  GamePurchaseTab,
} from "./_tabs";
import { RegisterTabsProvider } from "./provider";

const tabsItems = [
  {
    value: "step-1",
    label: "Bước 1",
    icon: <UserIcon weight="fill" className="size-5!" />,
    content: <CreateAccountTab />,
  },
  {
    value: "step-2",
    label: "Bước 2",
    icon: (
      <Image
        src="/logo/GTA.png"
        alt="GTA Logo"
        width={24}
        height={24}
        className="grayscale-100"
      />
    ),
    content: <GamePurchaseTab />,
  },
  {
    value: "step-3",
    label: "Bước 3",
    icon: <AppWindowIcon weight="bold" className="size-6!" />,
    content: <DownloadLauncherTab />,
  },
];

export default function Page() {
  return (
    <section
      className={cn("flex flex-col items-center h-[960px] pt-36", "relative")}
    >
      <Image
        src="/images/register-background.png"
        alt="Register background"
        fill
        sizes="100vw"
        className={cn(
          "object-cover opacity-70 -z-10",
          "mask-alpha mask-b-from-50% mask-b-to-100%",
        )}
      />

      <RegisterTabsProvider defaultValue="step-1" className="items-center">
        <TabsList className="bg-transparent gap-12 mb-10">
          {tabsItems.map(({ value, label, icon }) => (
            <TabsTrigger
              key={value}
              value={value}
              className={cn(
                "bg-transparent! data-[state=active]:*:first:bg-primary!",
                "data-[state=active]:*:*:fill-primary-foreground",
                "flex flex-col items-center justify-center gap-3",
                "data-[state=active]:text-primary-foreground text-xs",
                "text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "flex items-center justify-center bg-muted stroke-muted",
                  "size-11 p-2.5 rounded-full border border-neutral-700/50",
                  "*:fill-muted-foreground",
                )}
              >
                {icon}
              </span>
              <span>{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabsItems.map(({ value, content }) => (
          <TabsContent key={value} value={value}>
            {content}
          </TabsContent>
        ))}
      </RegisterTabsProvider>
    </section>
  );
}
