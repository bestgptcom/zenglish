"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import Script from "next/script";
import { AiOutlinePlus } from "react-icons/ai";

export default function FAQSection() {
  const faqData = [
    {
      question: "How is Zenglish different from Duolingo?",
      answer:
        "Duolingo gamifies learning with streaks and pressure. Zenglish is the opposite - we believe language learning should feel like meditation, not a race.",
    },
    {
      question: "Which languages are available at launch?",
      answer:
        "We're launching with English, French, Spanish, Italian, and German, with more languages coming in the coming weeks.",
    },
    {
      question: "Do I need to enable my mic?",
      answer:
        "For voice conversations, yes. For text chats, no. You choose your comfort level - some days you might want to speak out loud, other days just type.",
    },
    {
      question: "Will it stay free?",
      answer:
        "Yes! Free users get 3 conversations every day. We believe everyone deserves access to calm language learning. Pro unlocks unlimited practice and all the other features.",
    },
    {
      question: "How about privacy?",
      answer:
        "Your conversations are yours. We don't sell data, period. Voice recordings are processed by AI then immediately deleted. We only track your progress to help you learn better. That's it.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faqs"
      className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-10 flex flex-col lg:flex-row gap-10 mb-8 mt-10"
    >
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <div className="lg:max-w-md w-full">
        <div className="flex flex-col gap-3">
          <h2 className="text-center md:text-left text-4xl lg:text-5xl font-geist font-medium">
            Frequently Asked Questions
          </h2>
          <p className="text-center md:text-left max-w-md md:max-w-none mx-auto md:mx-0 md:text-lg font-satoshi">
            We&apos;re here to help you learn and grow. If you have any questions, please don&apos;t hesitate to contact us.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <Accordion showDivider={false} variant="splitted">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              as="div"
              aria-label={item.question}
              title={
                <>
                  <h3 className="font-satoshi sm:text-lg md:text-xl">{item.question}</h3>
                  <p className="sr-only">{item.answer}</p>
                </>
              }
              indicator={({ isOpen }) => (
                <span className="text-xl sm:text-2xl flex items-center justify-center text-black font-geist">
                  {isOpen ? "-" : "+"}
                </span>
              )}
              className="gap-0"
              classNames={{
                base: "flex flex-col gap-4 shadow-none bg-white rounded-3xl data-[open]:bg-[#F6F7F9] px-5 md:px-8",
                titleWrapper: "gap-1",
                indicator: "data-[open]:rotate-0 self-start",
                heading: "",
                title: "text-base font-satoshi sm:text-lg font-semibold",
                content: "pt-0 pb-4 font-satoshi",
                trigger: "py-3",
              }}
            >
              <p className="text-base font-satoshi">{item.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
