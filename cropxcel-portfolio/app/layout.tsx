import type { Metadata } from "next";
import { Inter, Poppins, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FontManager from "@/components/FontManager";

import { LanguageProvider } from "@/components/LanguageContext";

const inter = Inter({ subsets: ["latin"] });
const kantumruy = Kantumruy_Pro({
  subsets: ["khmer"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kantumruy"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "CropXcel - Insight Agriculture for Cambodia",
  description: "AI-powered satellite imagery to enhance crop yield and save resources.",
  icons: {
    icon: "/images/satellite-emji.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <FontManager
            englishFontClass={inter.className}
            khmerFontClass={kantumruy.className}
          />
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}