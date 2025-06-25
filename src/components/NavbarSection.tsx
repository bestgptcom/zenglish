import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";

export default function NavbarSection() {
  return (
    <header>
      <nav className={`z-50`}>
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2 sm:py-4 px-4 sm:px-6 md:px-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/images/logo.png"
              width={32}
              height={32}
              alt="logo"
              className="size-7 sm:size-8"
            />
            <p className="font-advercase text-2xl sm:text-3xl">
              Zen<span className="opacity-60">glish</span>
            </p>
          </Link>
          {/* CTA Buttons */}
          <div className="flex items-center gap-2.5">
            <Button
              as={Link}
              href="#"
              variant="solid"
              radius="full"
              color="primary"
              endContent={
                <BsFillArrowRightCircleFill className="text-white size-4 sm:size-5" />
              }
              className="font-semibold font-rethink bg-black text-sm sm:text-base min-h-9 h-9 sm:min-h-10 sm:h-10"
            >
              Start Training
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
