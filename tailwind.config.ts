import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        normalDesktop: "1300px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        alpha: {
          DEFAULT: "#f48869",
          100: "#fde7e1",
          200: "#fbcfc3",
          300: "#f8b8a5",
          400: "#f6a087",
          500: "#f48869",
          600: "#c36d54",
          700: "#92523f",
          800: "#62362a",
          900: "#311b15",
        },
      },
      fontFamily: {
        rethink: ["var(--font-rethin-sans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        advercase: ["var(--font-Advercase)", "sans-serif"],
        satoshi: ["var(--font-Satoshi)", "sans-serif"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
      },
      fontSize: {
        xxs: "0.625rem",
      },
      backgroundImage: {
        "custom-gradient": `
          linear-gradient(178.53deg, #FEF2D9 -10.55%, #FEFCF9 98.75%)
        `,
        "work-gradient":
          "linear-gradient(180deg, rgba(163, 81, 57, 0.05) 0%, rgba(163, 81, 57, 0.05) 100%)",
      },
      animation: {
        slide: "slide 2s linear infinite",
        swing: "slide 4s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { left: "-5%" },
          "100%": { left: "100%" },
        },
        swing: {
          "0%": { left: "0" },
          "50%": { left: "100%", transform: "translateX(-100%)" },
          "100%": { left: "0" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#F48869",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#f48869",
            },
          },
        },
      },
    }),
  ],
};
export default config;
