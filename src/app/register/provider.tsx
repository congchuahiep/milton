"use client";

import { createContext, useContext, useState } from "react";
import { Tabs } from "@/components/ui/tabs";

interface TabsContextValue {
  tab: string;
  setTab: (val: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export const RegisterTabsProvider: React.FC<{
  defaultValue: string;
  children: React.ReactNode;
  className: string;
}> = ({ defaultValue, children, className }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ tab: value, setTab: setValue }}>
      <Tabs value={value} onValueChange={setValue} className={className}>
        {children}
      </Tabs>
    </TabsContext.Provider>
  );
};

export const useRegisterTabs = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("useTabs must be used within TabsProvider");
  return ctx;
};
