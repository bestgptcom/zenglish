import { Geist, Geist_Mono, Rethink_Sans, Inter } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/components/NavbarSection";
import FooterSection from "@/components/FooterSection";
import MainProvider from "@/providers";
import { FontAdvercase, FontSatoshi } from "@/components/Fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rethinSans = Rethink_Sans({
  variable: "--font-rethin-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zenglish",
  description: "Zenglish blends AI + an innovative training method, so you speak from day one—calm, confident, judgement-free.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rethinSans.variable} ${inter.variable} ${FontAdvercase.variable} ${FontSatoshi.variable} antialiased`}
      >
        <MainProvider>
          <NavbarSection />
          {children}
          <FooterSection />
        </MainProvider>
      </body>
    </html>
  );
}
