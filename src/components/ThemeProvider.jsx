// components/ThemeProvider.jsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={true}
      storageKey="ambition-theme"
    >
      {children}
    </NextThemesProvider>
  );
}