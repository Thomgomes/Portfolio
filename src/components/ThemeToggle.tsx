import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  scrolled?: boolean;
}

export function ThemeToggle({ scrolled = false }: ThemeToggleProps) {
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
      aria-label="Alternar tema"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
        scrolled
          ? "border-border/60 bg-background/60 text-foreground hover:bg-accent/10 hover:text-accent"
          : "border-white/30 bg-white/10 text-white hover:bg-white/20"
      }`}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
