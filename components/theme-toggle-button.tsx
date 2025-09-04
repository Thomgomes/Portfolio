"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggleButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full transition-colors duration-200 bg-muted"
        aria-label="Carregando tema"
        disabled
      >
        <div className="w-5 h-5"></div>
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full transition-colors duration-200 bg-muted hover:bg-border"
        aria-label="Alternar tema"
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-fuchsia-600 hover:text-fuchsia-800 transition-colors duration-200" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500 hover:text-primary transition-colors duration-200" />
        )}
      </button>
    </div>
  );
}
