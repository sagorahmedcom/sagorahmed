"use client";

import { Sun, Moon } from "lucide-react";

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme") === "light" ? "light" : "dark";
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  window.localStorage.setItem("theme", next);
}

export default function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className={
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:border-accent/50 hover:text-accent " +
        (className ?? "")
      }
    >
      <Sun size={16} className="theme-icon-sun" />
      <Moon size={16} className="theme-icon-moon" />
    </button>
  );
}
