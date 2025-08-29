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
      <div
        className={cn(
          "absolute -inset-0.5 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300",
          isDark
            ? "bg-gradient-to-r from-violet-500 to-fuchsia-600"
            : "bg-gradient-to-r from-yellow-400 to-amber-500"
        )}
      />
      <div
        className={cn(
          "relative flex items-center justify-center p-0.5 backdrop-blur-[2px] border font-medium rounded-lg transition-all duration-300 ease-out",
          isDark
            ? "bg-slate-900/80 border-violet-500/50 text-violet-200 hover:bg-slate-900/50 hover:border-violet-500/80"
            : "bg-slate-900/80 border-yellow-500/50 text-yellow-200 hover:bg-slate-900/50 hover:border-yellow-500/80"
        )}
      >
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-colors duration-200 text-foreground bg-muted hover:bg-border"
          aria-label="Alternar tema"
        >
          {isDark ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
