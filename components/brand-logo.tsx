type BrandLogoProps = {
  alt?: string;
  className?: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
};

export default function BrandLogo({
  alt = "RoahRaschlaReloaded",
  className,
  width,
  height,
  loading = "lazy",
  fetchPriority,
}: BrandLogoProps) {
  return (
    <>
      <img
        src="/logo-full.webp"
        alt={alt}
        className={`${className ?? ""} dark:hidden`}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
      <img
        src="/logo_darkmode.webp"
        alt={alt}
        className={`${className ?? ""} hidden dark:block`}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </>
  );
}
