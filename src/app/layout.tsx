import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pro Gym — Machine guides",
    template: "%s · Pro Gym",
  },
  description:
    "Scan a machine QR or browse guides at Pro Gym Saint-Léonard. Bilingual EN/FR how-tos. Unofficial demo mockup — not affiliated with Pro Gym.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col font-sans"
        style={{ fontFamily: "var(--font-source-sans), var(--font-sans)" }}
      >
        {children}
      </body>
    </html>
  );
}
