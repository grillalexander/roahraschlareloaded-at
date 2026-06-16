"use client";

import { useRef, type CSSProperties } from "react";
import { CARD_SIZES, responsiveSrc } from "@/lib/images";

type MusicianPhotoProps = {
  monoImage: string;
  colorImage: string;
  alt: string;
  objectStyle?: CSSProperties;
  zoom?: number;
};

function scaled(content: React.ReactNode, zoom?: number) {
  if (zoom == null) return content;
  return (
    <div
      className="h-full w-full"
      style={{
        transform: `scale(${zoom})`,
        transformOrigin: "center center",
      }}
    >
      {content}
    </div>
  );
}

export default function MusicianPhoto({
  monoImage,
  colorImage,
  alt,
  objectStyle,
  zoom,
}: MusicianPhotoProps) {
  const colorRef = useRef<HTMLImageElement>(null);
  const mono = responsiveSrc(monoImage);
  const color = responsiveSrc(colorImage);

  const loadColor = () => {
    const el = colorRef.current;
    if (!el || el.dataset.loaded) return;
    el.src = color.src;
    el.srcset = color.srcSet;
    el.dataset.loaded = "1";
  };

  const imgBase = "h-full w-full object-cover transition-opacity duration-300";

  const monoImg = scaled(
    <img
      src={mono.src}
      srcSet={mono.srcSet}
      sizes={CARD_SIZES}
      alt={alt}
      className={`${imgBase} group-hover:opacity-0`}
      style={objectStyle}
      width={400}
      height={320}
      loading="lazy"
      decoding="async"
      onMouseEnter={loadColor}
      onFocus={loadColor}
    />,
    zoom,
  );

  const colorImg = scaled(
    <img
      ref={colorRef}
      alt=""
      aria-hidden
      sizes={CARD_SIZES}
      className={`${imgBase} opacity-0 group-hover:opacity-100`}
      style={objectStyle}
      width={400}
      height={320}
      decoding="async"
      onMouseEnter={loadColor}
    />,
    zoom,
  );

  if (zoom != null) {
    return (
      <>
        <div className="absolute inset-0">{monoImg}</div>
        <div className="absolute inset-0">{colorImg}</div>
      </>
    );
  }

  return (
    <>
      {monoImg}
      <div className="absolute inset-0">{colorImg}</div>
    </>
  );
}
