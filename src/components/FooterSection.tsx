import Link from "next/link";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 pt-10 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-3 z-10">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-300"
            >
              <Image src="/images/logo.png" width={36} height={36} alt="logo" />
              <p className="font-advercase text-3xl">
                Zen<span className="opacity-60">glish</span>
              </p>
            </Link>
            <p className="text-center md:text-left max-w-48 text-lg font-satoshi opacity-90">
              Learn a new language without the pressure.
            </p>
          </div>

        <div className="flex justify-between gap-4 px-8">
            {/* Quick Links Section */}
            <ul className="list-none flex flex-col items-center md:items-start gap-2 md:gap-2.5 font-satoshi">
              <div className="text-xl mb-2 md:mb-3 font-semibold">About</div>
              <Link
                href={"/about-us"}
                className="text-center sm:text-left hover:translate-x-1 transition-all duration-300"
              >
                About Us
              </Link>
              <Link
                href={"/why-zenglish-works"}
                className="text-center sm:text-left hover:translate-x-1 transition-all duration-300"
              >
                Why Zenglish Works
              </Link>
              <Link
                href={"/career"}
                className="text-center sm:text-left hover:translate-x-1 transition-all duration-300"
              >
                Career
              </Link>
              <Link
                href={"/pricing"}
                className="text-center sm:text-left hover:translate-x-1 transition-all duration-300"
              >
                Pricing
              </Link>
            </ul>
  
            {/* Tools Section */}
            <ul className="list-none flex flex-col items-center md:items-start gap-2 md:gap-2.5 font-satoshi">
              <div className="text-xl mb-2 md:mb-3 font-semibold">Company</div>
              <Link
                href={"/privacy-policy"}
                className="text-center sm:text-left hover:translate-x-1 transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/terms-conditions"}
                className="text-center sm:text-left hover:translate-x-1 transition-all duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                href={"/terms-conditions"}
                className="text-center sm:text-left hover:translate-x-1 transition-all duration-300"
              >
                Changelog
              </Link>
            </ul>
        </div>
        </div>
        <p className="border-t border-[rgba(51, 51, 51, 0.1)]text-center text-sm font-satoshi opacity-90 mt-10 py-6 text-center font-medium">
          &copy; {new Date().getFullYear()} Lumination.ai – All rights reserved.
        </p>
      </div>
    </footer>
  );
}
