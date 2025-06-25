import { Button } from "@heroui/react";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mb-10">
      <div className="bg-gradient-to-b from-[#5F09DE] to-[#5e09de5f] text-white rounded-3xl grid md:grid-cols-2 md:gap-10 px-6 sm:px-10 pt-6 sm:pt-14">
        <div className="flex flex-col gap-4 mt-10 mb-10">
          <h3 className="font-geist text-4xl md:text-5xl font-medium max-w-sm">
            Take a breath & start speaking.
          </h3>
          <p className="font-satoshi text-base md:text-lg text-white max-w-sm">
            Zenglish is designed to help us chill and have a good time while
            learning a language.
          </p>
          <div className="mt-6 md:mt-10">
            <Button
              as={Link}
              href="#"
              variant="solid"
              radius="full"
              color="primary"
              endContent={
                <BsFillArrowRightCircleFill className="text-[#7A32E4]" size={20} />
              }
              className="font-semibold font-rethink bg-white text-black md:mb-10"
            >
              Get Early Access
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-auto">
          <Image src="/images/cta-img.png" alt="cta-img" width={432} height={894} className="mt-auto mx-auto w-full max-w-md" />
        </div>
      </div>
    </div>
  );
}
