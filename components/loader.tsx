"use client";

import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [logoFading, setLogoFading] = useState(false);
  const [stopAnimation, setStopAnimation] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hideStarted = false;
    const loadStart = Date.now();
    const MIN_VISIBLE_MS = 1300;

    const startHideAnimation = () => {
      if (hideStarted) return;
      hideStarted = true;

      setStopAnimation(true);
      setTimeout(() => setLogoFading(true), 50);
      setTimeout(() => setIsAnimating(true), 300);
    };

    const maybeStartHide = () => {
      const remaining = MIN_VISIBLE_MS - (Date.now() - loadStart);
      if (remaining > 0) {
        setTimeout(startHideAnimation, remaining);
      } else {
        startHideAnimation();
      }
    };

    if (document.readyState !== "loading") {
      maybeStartHide();
    } else {
      document.addEventListener("DOMContentLoaded", maybeStartHide, {
        once: true,
      });
    }

    const fallback = setTimeout(maybeStartHide, 2400);

    return () => {
      clearTimeout(fallback);
      document.removeEventListener("DOMContentLoaded", maybeStartHide);
    };
  }, []);

  useEffect(() => {
    if (!isAnimating || !loaderRef.current) return;

    const loader = loaderRef.current;
    const onAnimationEnd = () => setIsLoading(false);
    loader.addEventListener("animationend", onAnimationEnd, { once: true });

    return () => loader.removeEventListener("animationend", onAnimationEnd);
  }, [isAnimating]);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
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
