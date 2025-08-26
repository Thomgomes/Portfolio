"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"; // Importado de lucide-react

export function ThemeToggleButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Efeito para garantir que o componente só é renderizado no cliente.
  // Isto evita erros de "hydration mismatch" entre o servidor e o cliente.
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Para evitar layout shift, renderizamos um placeholder no servidor.
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
    // Alterna entre o tema claro e escuro.
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-200 text-foreground bg-muted hover:bg-border"
      aria-label="Alternar tema"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
