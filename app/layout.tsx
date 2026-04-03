import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairdisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Vesol Marketing",
    default: "Vesol Marketing | Fueling The Next Generation Of Brands",
  },
  description: "Vesol Marketing is a premium, design-forward agency helping modern brands grow through integrated strategy, visual identity, and performance marketing.",
  openGraph: {
    title: "Vesol Marketing",
    description: "Fueling The Next Generation Of Brands. High-performance strategy and premium design.",
    url: "https://vesol.com",
    siteName: "Vesol Marketing",
    images: [
      {
        url: "/open-graph-img.png",
        width: 1200,
        height: 630,
        alt: "Vesol Marketing - High Performance Brand Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vesol Marketing",
    description: "Fueling The Next Generation Of Brands.",
    images: ["/open-graph-img.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairdisplay.variable} antialiased font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
