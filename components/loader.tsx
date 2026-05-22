"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [logoFading, setLogoFading] = useState(false);
  const [stopAnimation, setStopAnimation] = useState(false);

  useEffect(() => {
    let hideStarted = false;

    const startHideAnimation = () => {
      if (hideStarted) return;
      hideStarted = true;

      setStopAnimation(true);
      setTimeout(() => setLogoFading(true), 50);
      setTimeout(() => setIsAnimating(true), 300);
      setTimeout(() => setIsLoading(false), 900);
    };

    if (document.readyState !== "loading") {
      startHideAnimation();
    } else {
      document.addEventListener("DOMContentLoaded", startHideAnimation, {
        once: true,
      });
    }

    const fallback = setTimeout(startHideAnimation, 500);

    return () => {
      clearTimeout(fallback);
      document.removeEventListener("DOMContentLoaded", startHideAnimation);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden transition-opacity duration-300 ${
        isAnimating ? "animate-slide-out-right" : ""
      }`}
      aria-hidden="true"
    >
      <div
        className={`relative transition-opacity ${
          logoFading ? "opacity-0" : "opacity-100"
        } ${!stopAnimation ? "animate-gentle-breathe" : ""}`}
        style={{
          transitionDuration: "600ms",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <img
          src="/logo-full.webp"
          alt=""
          className="h-32 w-auto"
          width={256}
          height={128}
          loading="eager"
          fetchPriority="low"
          decoding="async"
        />
      </div>
    </div>
  );
}
