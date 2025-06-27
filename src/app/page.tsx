"use client";

import HeaderSection from "@/components/sections/HeaderSection";
import FeatureSection from "@/components/sections/FeatureSection";
import CtaSection from "@/components/sections/CtaSection";
import FAQSection from "@/components/sections/FaqSection";
import ReviewSection from "@/components/sections/ReviewSection";
import EmailPopup from "@/components/EmailPopup";
import { usePopup } from "@/contexts/PopupContext";

export default function Home() {
  const { isEmailPopupOpen, closeEmailPopup } = usePopup();

  return (
    <>
      <HeaderSection />
      <FeatureSection />
      <ReviewSection />
      <FAQSection />
      <CtaSection />
      <EmailPopup isOpen={isEmailPopupOpen} onClose={closeEmailPopup} />
    </>
  );
}
