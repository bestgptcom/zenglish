"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface PopupContextType {
  isEmailPopupOpen: boolean;
  openEmailPopup: () => void;
  closeEmailPopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

  const openEmailPopup = () => setIsEmailPopupOpen(true);
  const closeEmailPopup = () => setIsEmailPopupOpen(false);

  return (
    <PopupContext.Provider
      value={{ isEmailPopupOpen, openEmailPopup, closeEmailPopup }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
}
