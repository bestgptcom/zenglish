import localFont from "next/font/local";

export const FontAdvercase = localFont({
  src: [
    {
      path: "../../src/app/fonts/advercase/AdvercaseFont-Demo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../src/app/fonts/advercase/AdvercaseFont-Demo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-Advercase",
});


export const FontSatoshi = localFont({
  src: [
    {
      path: "../../src/app/fonts/satoshi/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../src/app/fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../src/app/fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../src/app/fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../src/app/fonts/satoshi/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-Satoshi",
});