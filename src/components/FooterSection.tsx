import Link from "next/link";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 pt-10 relative overflow-hidden">
        <div className="grid grid-cols-1 z-10">
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2.5 hover:opacity-80 transition-opacity duration-300"
            >
              <Image src="/images/logo.png" width={36} height={36} alt="logo" />
              <p className="font-advercase text-3xl">
                Zen<span className="opacity-60">glish</span>
              </p>
            </Link>
            <p className="text-center max-w-48 text-lg font-satoshi opacity-90 mt-2">
              Learn a new language without the pressure.
            </p>
          </div>
        </div>
        <p className="border-t border-[rgba(51, 51, 51, 0.1)]text-center text-sm font-satoshi opacity-90 mt-10 py-6 text-center font-medium">
          &copy; {new Date().getFullYear()} Lumination.ai – All rights reserved.
        </p>
      </div>
    </footer>
  );
}
