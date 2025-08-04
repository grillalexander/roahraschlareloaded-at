import type { Metadata } from "next";
import "./globals.css";
import Loader from "@/components/loader";

export const metadata: Metadata = {
  title: "RoahRaschlaReloaded",
  description: "etwas Schilf gewickelt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/dancing-script-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/dancing-script-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload hero image for LCP */}
        <link
          rel="preload"
          href="/all.jpg"
          as="image"
          fetchPriority="high"
        />
        {/* Preload logo */}
        <link
          rel="preload"
          href="/logo-full.jpg"
          as="image"
        />
      </head>
      <body>
        <Loader />
        {children}
      </body>
    </html>
  );
}
