import type { Metadata } from "next";
import "./globals.css";
import Loader from "@/components/loader";

export const metadata: Metadata = {
  title: "RoahRaschlaReloaded",
  description: "etwas Schilf gewickelt",
  openGraph: {
    title: "RoahRaschlaReloaded",
    description: "etwas Schilf gewickelt",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoahRaschlaReloaded",
    description: "etwas Schilf gewickelt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link
          rel="preload"
          href="/fonts/dancing-script-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/all-960.webp"
          as="image"
          fetchPriority="high"
          type="image/webp"
          media="(max-width: 960px)"
        />
        <link
          rel="preload"
          href="/all.webp"
          as="image"
          fetchPriority="high"
          type="image/webp"
          media="(min-width: 961px)"
        />
      </head>
      <body>
        <Loader />
        {children}
      </body>
    </html>
  );
}
