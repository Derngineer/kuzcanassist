import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kuzie Can Assist | Luxury Personal Shopping & Concierge Services",
  description: "Experience the epitome of luxury with Kuzie Can Assist. Premium personal shopping from Dubai to Zimbabwe, exclusive concierge services, and bespoke travel experiences in the UAE.",
  keywords: "luxury personal shopping, Dubai concierge, Zimbabwe delivery, UAE travel planning, premium shopping service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
