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
        "relative inline-flex h-8 w-14 shrink-0 items-center justify-between rounded-full border border-border bg-surface px-2 transition-colors " +
        (className ?? "")
      }
    >
      <Sun size={14} className="text-fg-faint" />
      <Moon size={14} className="text-fg-faint" />
      <span className="theme-thumb absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-black text-brand-white shadow-md">
        <Sun size={13} className="theme-icon-sun" />
        <Moon size={13} className="theme-icon-moon" fill="currentColor" />
      </span>
    </button>
  );
}
