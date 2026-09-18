import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

const fontBricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = `${siteConfig.name} — WordPress & Frontend Developer`;

export const metadata: Metadata = {
  metadataBase: new URL("https://sagorahmed.com"),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.shortTagline,
  openGraph: {
    title,
    description: siteConfig.shortTagline,
    url: "https://sagorahmed.com",
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.shortTagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontBricolage.variable} ${fontInter.variable} h-full`} suppressHydrationWarning>
      <body className="relative flex min-h-full flex-col bg-bg text-fg antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid" />
        <div className="pointer-events-none fixed left-1/2 top-[-10%] -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-glow-purple/25 to-glow-indigo/10 blur-[140px]" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          richColors
          closeButton
          toastOptions={{ style: { fontFamily: "var(--font-body)" } }}
        />
      </body>
    </html>
  );
}
