import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoahRaschlaReloaded",
  description: "etwas Schilf gewickelt",
  metadataBase: new URL("https://roahraschlareloaded.at"),
  openGraph: {
    title: "RoahRaschlaReloaded",
    description: "etwas Schilf gewickelt",
    type: "website",
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
          href="/fonts/dancing-script-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/dancing-script-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/all.jpg" as="image" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.tiktok.com" />
        <link rel="dns-prefetch" href="https://open.spotify.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
