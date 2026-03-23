import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cloudy World — Where Atmosphere Meets Attire",
  description:
    "Cloudy World is a contemporary fashion house crafting garments inspired by the sky. Ethereal silhouettes, sustainable practices, Copenhagen-born design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans antialiased bg-midnight text-cloud-100 overflow-x-hidden">
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
