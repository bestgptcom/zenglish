import React from "react";
import { HeroUIWrapper } from "@/providers/HeroUIWrapper";
import { PopupProvider } from "@/contexts/PopupContext";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeroUIWrapper>
      <PopupProvider>{children}</PopupProvider>
    </HeroUIWrapper>
  );
}
