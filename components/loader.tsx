"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // Start visible immediately
  const [isAnimating, setIsAnimating] = useState(false);
  const [logoFading, setLogoFading] = useState(false);
  const [stopAnimation, setStopAnimation] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const minDisplayTime = 2000; // Minimum 2 seconds display time

    let loadComplete = false;
    let minTimeElapsed = false;
    let hideAnimationStarted = false;

    // Function to start hide animation (only once)
    const startHideAnimation = () => {
      if (hideAnimationStarted) return;
      hideAnimationStarted = true;
      
      // First, stop the breathing animation
      setStopAnimation(true);
      // Small delay to let animation stop, then start fading
      setTimeout(() => {
        setLogoFading(true);
      }, 50);
      // Then start the background slide animation after logo has started fading
      setTimeout(() => {
        setIsAnimating(true);
      }, 800); // Start background slide when logo is partially faded
      // Remove from DOM after animation completes (wait for logo fade + background slide)
      setTimeout(() => {
        setIsLoading(false);
      }, 2200); // Animation duration (logo fade 1200ms + background slide 1000ms)
    };

    // Check if we can start hiding (both conditions must be met)
    const tryStartHideAnimation = () => {
      if (loadComplete && minTimeElapsed && !hideAnimationStarted) {
        startHideAnimation();
      }
    };

    // Always ensure minimum display time - this is the key fix
    const minDisplayTimer = setTimeout(() => {
      minTimeElapsed = true;
      tryStartHideAnimation();
    }, minDisplayTime);

    // Listen for page load
    const handleLoad = () => {
      loadComplete = true;
      tryStartHideAnimation();
    };

    // Check initial state after a small delay to account for hydration
    // This ensures the loader shows even if page is already "complete"
    const hydrationDelay = setTimeout(() => {
      loadComplete = document.readyState === "complete";
      tryStartHideAnimation();
    }, 100);

    // Add event listener if not already loaded
    if (typeof window !== "undefined") {
      if (document.readyState !== "complete") {
        window.addEventListener("load", handleLoad);
      }
    }

    return () => {
      clearTimeout(minDisplayTimer);
      clearTimeout(hydrationDelay);
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${isAnimating ? "animate-slide-out-right" : ""}`}
    >
      <div
        className={`relative transition-opacity ${
          logoFading ? "opacity-0" : "opacity-100"
        } ${!stopAnimation ? "animate-gentle-breathe" : ""}`}
        style={{
          transitionDuration: "1200ms",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <img
          src="/logo-full.jpg"
          alt="RoahRaschlaReloaded Logo"
          className="h-32 w-auto"
          width={256}
          height={128}
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}

