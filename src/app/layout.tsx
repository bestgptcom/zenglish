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
  title: "Zenglish - Learn Languages Without Pressure",
  description: "Zenglish blends AI + an innovative training method, so you speak from day one—calm, confident, judgement-free.",
  keywords: "language learning, AI tutor, stress-free learning, conversation practice, Duolingo alternative",
  authors: [{ name: "Zenglish Team" }],
  creator: "Zenglish",
  publisher: "Zenglish",
  
  // Open Graph tags
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://splendorous-pothos-bb289a.netlify.app",
    siteName: "Zenglish",
    title: "Zenglish - Learn Languages Without Pressure",
    description: "Zenglish blends AI + an innovative training method, so you speak from day one—calm, confident, judgement-free.",
    images: [
      {
        url: "https://splendorous-pothos-bb289a.netlify.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zenglish - Learn Languages Without Pressure",
      },
    ],
  },
  
  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    site: "@zenglish",
    creator: "@zenglish",
    title: "Zenglish - Learn Languages Without Pressure",
    description: "Zenglish blends AI + an innovative training method, so you speak from day one—calm, confident, judgement-free.",
    images: ["https://splendorous-pothos-bb289a.netlify.app/images/og-image.png"],
  },
  
  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification tags (add your actual verification codes when available)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  
  // App-specific meta tags
  applicationName: "Zenglish",
  referrer: "origin-when-cross-origin",
  category: "education",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#5F09DE" />
        <meta name="msapplication-TileColor" content="#5F09DE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zenglish" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://splendorous-pothos-bb289a.netlify.app" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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