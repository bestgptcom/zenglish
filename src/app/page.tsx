import HeaderSection from "@/components/sections/HeaderSection";
import FeatureSection from "@/components/sections/FeatureSection";
import CtaSection from "@/components/sections/CtaSection";
import FAQSection from "@/components/sections/FaqSection";
import ReviewSection from "@/components/sections/ReviewSection";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <FeatureSection />
      <ReviewSection />
      <FAQSection />
      <CtaSection />
    </>
  );
}
