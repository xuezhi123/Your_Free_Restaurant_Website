import type { Metadata } from "next";
import { Cormorant_SC, Nunito } from "next/font/google";
import "./globals.css";

const cormorantSC = Cormorant_SC({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Restaurant",
    template: "%s",
  },
  description:
    "A restaurant website powered by Sanity CMS.",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: "Restaurant",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${cormorantSC.variable} ${nunito.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
