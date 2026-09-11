import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import CursorLight from "./components/CursorLight";
import StarField from "./components/StarField";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oliver Iacob — Full Stack Developer",
  description:
    "Full Stack Developer based in Bucharest, Romania. Building robust web applications with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <StarField />
        <CursorLight />
        {children}
      </body>
    </html>
  );
}
