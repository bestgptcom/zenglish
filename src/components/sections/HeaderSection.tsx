import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { LeftLongLeaf } from "../Icon";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Button } from "@heroui/react";

export default function HeaderSection() {
  return (
    <div className="relative overflow-hidden -mt-24 md:-mt-20 pt-44 w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center relative z-10">
          <div className="flex items-center justify-center mb-10">
            <LeftLongLeaf className="h-10 sm:h-16 w-auto" />
            <div className="flex flex-col gap-1">
              <p className="font-satoshi text-xs sm:text-sm md:text-base font-bold">
                DUOLINGO DROPOUTS FAVORITE
              </p>
              <div className="flex items-center justify-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <AiFillStar key={index} color="#3CC057" className="size-4 sm:size-5 md:size-6" />
                ))}
              </div>
            </div>
            <div className="scale-x-[-1]">
              <LeftLongLeaf className="h-10 sm:h-16 w-auto" />
            </div>
          </div>
          <h1 className="max-w-2xl mx-auto text-center font-geist text-4xl md:text-5xl lg:text-6xl font-medium">
            Learn a new language without the pressure.
          </h1>
          <p className="max-w-xl mx-auto text-center mb-10 font-satoshi md:text-md lg:text-lg font-medium">
            Zenglish blends AI + an innovative training method, so you speak from
            day one—calm, confident, judgement-free.
          </p>
  
          <Button
            variant="solid"
            radius="full"
            color="primary"
            endContent={
              <BsFillArrowRightCircleFill className="text-white" size={20} />
            }
            className="font-semibold font-rethink bg-black mb-10"
          >
            Get Early Access
          </Button>
          <Image
            src="/images/hero-mobile-bg.png"
            alt="Header Image"
            width={510}
            height={1014}
            className="mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg"
          />
        </div>
        <div className="absolute left-[252px] top-[130px] w-[454px] h-[454px] bg-[#5F09DE] opacity-80 blur-[300px] rounded-[2000px] z-0"></div>
        <div className="absolute left-[1099px] top-[-123px] w-[682px] h-[682px] bg-[#5F09DE] opacity-80 blur-[300px] rounded-[2000px] z-0"></div>
        <Image src="/images/bolt-stamp.png" alt="Made by Bolt" width={200} height={200} className="size-16 sm:size-28 md:size-32 lg:size-36 absolute right-4 sm:right-10 bottom-10 sm:bottom-40 z-40" />
      </div>
        <div className="absolute left-0 bottom-0 w-full h-48 bg-gradient-to-t from-white to-transparent z-10"></div>
        <Image src="/images/hero-cloud-left.png" alt="cloud" width={972} height={906} className="w-[400px] sm:w-[972px] h-auto absolute left-0 top-40 sm:top-0" />
        <Image src="/images/hero-cloud-right.png" alt="cloud" width={835} height={906} className="w-[400px] sm:w-[835px] h-auto absolute right-0 top-40 sm:top-0" />
    </div>
  );
}
