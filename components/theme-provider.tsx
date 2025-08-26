"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";


/**
 * Componente Provedor de Tema para a aplicação.
 * Utiliza o 'next-themes' para gerir o estado de tema (claro, escuro, sistema).
 * É marcado como "use client" porque precisa de interagir com o estado e o localStorage do browser.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
