import { AiOutlineCheckCircle } from "react-icons/ai";
import { Button } from "@heroui/react";
import Image from "next/image";
import {
  BsArrowDownRightCircle,
  BsArrowRightCircle,
  BsCheck2,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Link from "next/link";

const features = [
  {
    icon: "🧘‍♂️",
    title: "Guided, stress-free pacing",
    description: "No timers, no streak guilt.",
  },
  {
    icon: "🎤",
    title: "Tap-to-talk practice",
    description: "Real-time pronunciation tips.",
  },
  {
    icon: "👯‍♂️",
    title: "Avatar mentors",
    description: "Wise, cool AI tutors to roll-play with 24/7.",
  },
  {
    icon: "💡",
    title: "Science-backed learning",
    description: "Proprietary technique for sticky retention.",
  },
];

const features2 = [
  {
    icon: "path-1.png",
    title: "Daily Practice",
    description: "Core profile, personal target for your mood & progress.",
    infoImg: "path-info-1.png",
  },
  {
    icon: "path-2.png",
    title: "Vocabulary Builder",
    description: "Words you can be reminded about. Words you'll master.",
    infoImg: "path-info-2.png",
  },
  {
    icon: "path-3.png",
    title: "Instant Feedback",
    description: "Friendly judgement-free hints, never red X's.",
    infoImg: "path-info-3.png",
  },
];

export default function FeatureSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-geist">
          Zen conversation,
          <br />
          zero anxiety.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center mb-10">
          {/* Features List */}
          <div className="space-y-8 order-2 md:order-1">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 relative group cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-0 group-hover:w-1 h-full bg-[#5F09DE] rounded-3xl transition-all"></div>
                <div className="flex flex-col gap-3 py-2">
                  <div className="font-semibold text-xl flex items-center gap-3">
                    <span>{feature.icon}</span>
                    {feature.title}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Practice Conversations Card */}
          <div className="flex justify-center bg-gradient-to-b from-[#F7F1FF] to-[#ffffff] px-6 py-20 rounded-3xl aspect-square max-w-xl order-1 md:order-2">
            <Image
              src="/images/feature-1.png"
              alt="feature-img"
              width={493}
              height={451}
              className="max-w-sm object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col gap-10 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-geist">
          Your personal path,
          <br />
          visualised.
        </h2>
        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {features2.map((feature, idx) => (
            <div key={idx} className="bg-[#F6F7F9] rounded-2xl p-6 relative">
              <div className="flex flex-col gap-2 lg:gap-3.5">
                <Image
                  src={`/images/${feature.icon}`}
                  alt={feature.title}
                  width={48}
                  height={48}
                />
                <h3 className="font-satoshi font-bold text-xl">
                  {feature.title}
                </h3>
                <p className="font-satoshi text-gray-600 text-sm">
                  {feature.description}
                </p>
                <Image
                  src={`/images/${feature.infoImg}`}
                  alt={feature.title}
                  width={335}
                  height={296}
                  className="mx-auto max-w-72 sm:max-w-xs w-full object-contain mt-4"
                />
              </div>
              <div className="absolute left-0 bottom-0 w-full h-56 bg-gradient-to-t from-white to-transparent z-10"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-20 mb-10">
          <div className="order-2 md:order-1 flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-geist font-medium">
              Talk. Listen. <br />
              Internalise.
            </h2>
            <div className="flex flex-col gap-4 mt-6">
              {[
                "Hands-free practice while you commute.",
                "Auto-slow voicebacks so you hear every syllable.",
                "On-demand tapes based on your progress.",
                "Voice input for multi step workflows.",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <AiOutlineCheckCircle size={24} className="text-[#5F09DE]" />
                  <p className="font-satoshi text-base">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button
                as={Link}
                href="#"
                variant="bordered"
                radius="full"
                color="primary"
                endContent={<BsArrowRightCircle className="t" size={20} />}
                className="font-semibold font-rethink bg-white border-1 border-[#11111612] text-black mb-10"
              >
                Get Started Now
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative flex-1 mx-auto flex justify-center bg-gradient-to-b from-[#43D22D40] to-[#ffffff] px-6 py-14 sm:py-20 rounded-3xl aspect-square max-w-xl">
            <Image
              src="/images/feature-2.png"
              alt="feature-img"
              width={493}
              height={451}
              className="mx-auto w-full max-w-sm object-contain"
            />
            <div className="absolute left-0 bottom-0 w-full h-56 bg-gradient-to-t from-white to-transparent z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-20 mb-10">
          <div className="order-2 flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-geist font-medium">
              Adaptive calm mode
            </h2>
            <p className="font-satoshi text-gray-600 text-sm max-w-sm">
              Zenglish senses hesitation in your voice and slows pacing
              automatically.
            </p>
            <div className="mt-6">
              <Button
                as={Link}
                href="#"
                variant="bordered"
                radius="full"
                color="primary"
                endContent={<BsArrowRightCircle className="t" size={20} />}
                className="font-semibold font-rethink bg-white border-1 border-[#11111612] text-black mb-10"
              >
                Get Started Now
              </Button>
            </div>
          </div>
          <div className="order-1 relative flex-1 mx-auto flex justify-center bg-gradient-to-b from-[#FEECBA] to-[#ffffff] px-6 py-14 sm:py-20 rounded-3xl aspect-square max-w-xl">
            <Image
              src="/images/feature-3.png"
              alt="feature-img"
              width={493}
              height={451}
              className="mx-auto w-full max-w-sm object-contain"
            />
            <div className="absolute left-0 bottom-0 w-full h-56 bg-gradient-to-t from-white to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
