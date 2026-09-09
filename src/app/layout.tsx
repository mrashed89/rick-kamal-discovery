import type { Metadata } from "next";
import { Outfit, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rick Kamal · private discovery",
  description:
    "Private discovery for Rick Kamal. Thirty minutes with Keith Crum in Sacramento — 5 Star Processing, World Buddiez, and local business community.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Rick Kamal · private discovery",
    description:
      "Private discovery for Rick Kamal. Thirty minutes with Keith Crum in Sacramento.",
    type: "article",
    images: [
      {
        url: "/clients/rick-kamal/hero-merchant.jpg",
        width: 2000,
        height: 1335,
        alt: "NorthStar AI Experts. Private introduction for Rick Kamal.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rick Kamal · private discovery",
    description:
      "Private discovery for Rick Kamal. Thirty minutes with Keith Crum in Sacramento.",
    images: ["/clients/rick-kamal/hero-merchant.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-void text-bone">
        {children}
      </body>
    </html>
  );
}
