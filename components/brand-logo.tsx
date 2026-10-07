import { cn } from "@/lib/utils";

/** Pixel box sizes — keep in sync with Tailwind (h-12, h-16, h-32). */
export const LOGO_PX = {
  nav: 48,
  footer: 64,
  loader: 128,
} as const;

type BrandLogoProps = {
  alt?: string;
  className?: string;
  size: keyof typeof LOGO_PX | number;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  align?: "left" | "center";
};

const imgClass =
  "pointer-events-none absolute inset-0 m-0 h-full w-full max-h-none max-w-none object-contain transition-opacity duration-150";

export default function BrandLogo({
  alt = "RoahRaschlaReloaded",
  className,
  size,
  loading = "lazy",
  fetchPriority,
  align = "left",
}: BrandLogoProps) {
  const px = typeof size === "number" ? size : LOGO_PX[size];
  const centered = align === "center";

  return (
    <span
      className={cn("relative inline-block shrink-0", className)}
      style={{ width: px, height: px }}
      aria-hidden={alt === ""}
    >
      <img
        src="/logo-full.webp"
        alt={alt}
        className={cn(
          imgClass,
          centered ? "object-center" : "object-left",
          "opacity-100 dark:opacity-0",
        )}
        width={px}
        height={px}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
      <img
        src="/logo_darkmode.webp"
        alt={alt}
        className={cn(
          imgClass,
          centered ? "object-center" : "object-left",
          "opacity-0 dark:opacity-100",
        )}
        width={px}
        height={px}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </span>
  );
}
