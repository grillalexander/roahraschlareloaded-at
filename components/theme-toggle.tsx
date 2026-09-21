"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-8 w-14 shrink-0 rounded-full bg-gray-100 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
      aria-label={isDark ? "Hellen Modus einschalten" : "Nachtmodus einschalten"}
      title={isDark ? "Tagmodus" : "Nachtmodus"}
    >
      <span
        className={`absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#f5f5f5] shadow-sm transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-gray-600" aria-hidden="true" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-gray-600" aria-hidden="true" />
        )}
      </span>
    </button>
  );
}
