import { useEffect, useState } from "react";
import { Sun, MoonStar } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "relative w-10 h-10 rounded-full border border-border bg-card overflow-hidden",
        "flex items-center justify-center text-foreground hover:border-primary/40 hover:scale-105 transition-all",
        className
      )}
    >
      <Sun
        size={17}
        className={cn(
          "absolute transition-all duration-500",
          dark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100 text-secondary"
        )}
      />
      <MoonStar
        size={17}
        className={cn(
          "absolute transition-all duration-500",
          dark ? "opacity-100 rotate-0 scale-100 text-primary" : "opacity-0 rotate-90 scale-50"
        )}
      />
    </button>
  );
};