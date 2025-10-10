"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import config from "@/data/config.json";

const NAV_LINKS = [
  { label: "Domov", target: "domov" },
  { label: "O nás", target: "o-nas" },
  { label: "Služby", target: "sluzby" },
  { label: "Galéria", target: "galeria" },
  { label: "Cenník", target: "cennik" },
  { label: "Kontakt", target: "kontakt" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[60] transition-all duration-500 ease-out",
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/70 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.6)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 py-3 md:py-4">
          <button
            onClick={() => scrollToSection("domov")}
            className="group relative inline-flex items-center gap-3 rounded-full border border-border/60 px-3.5 py-1.5 text-left transitionborder-yellow-500/60"
          >
            <span
              className={[
                "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-transparent bg-transparent px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
                isScrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/90 hover:text-white",
              ].join(" ")}
            >
              EMT Lešenie
            </span>
          </button>

          <nav className="hidden items-center gap-0.5 xl:gap-1.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className={[
                  "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-transparent bg-transparent px-2.5 xl:px-4 py-2 text-[10px] xl:text-[11px] font-semibold uppercase tracking-[0.18em] xl:tracking-[0.24em] transition",
                  isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/90 hover:text-white",
                ].join(" ")}
              >
                <span className="absolute inset-0 rounded-full bg-yellow-500/0 transition group-hover:bg-yellow-500/10" />
                <p className="flex shrink-0">{link.label}</p>
                <ArrowUpRight className="relative size-3.5 text-yellow-600 opacity-0 transition group-hover:opacity-100" />
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-1.5 xl:gap-2.5 lg:flex">
            <div className="flex items-center gap-1 xl:gap-2.5">
              <a
                href={config.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-transparent bg-transparent px-2 xl:px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
                  isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/90 hover:text-white",
                ].join(" ")}
                aria-label="Instagram"
              >
                <Instagram className="size-4 xl:size-5" />
              </a>
              <a
                href={config.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-transparent bg-transparent px-2 xl:px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
                  isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/90 hover:text-white",
                ].join(" ")}
                aria-label="Facebook"
              >
                <Facebook className="size-4 xl:size-5" />
              </a>
            </div>
            <Button
              size="sm"
              onClick={() => scrollToSection("kontakt")}
              className="rounded-full bg-yellow-500 px-3 xl:px-5 py-2 text-[10px] xl:text-[11px] font-semibold uppercase tracking-[0.24em] xl:tracking-[0.3em] text-black hover:bg-yellow-400"
            >
              Kontakt
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={[
              "inline-flex items-center justify-center rounded-full border p-2 transition hover:border-yellow-500/50 hover:bg-yellow-500/10 lg:hidden",
              isScrolled
                ? "border-border/60 text-foreground"
                : "border-white/40 text-white",
            ].join(" ")}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="pb-4 lg:hidden">
            <div className="space-y-3 rounded-2xl border border-border/70 bg-card/95 p-4 shadow-xl backdrop-blur-xl">
              <div className="grid gap-1.5">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.target}
                    onClick={() => scrollToSection(link.target)}
                    className="w-full rounded-xl border border-transparent bg-background/60 px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70 transition hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:text-foreground"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-background/80 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <a
                    href={config.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-700 transition hover:bg-yellow-500/20"
                    aria-label="Instagram"
                  >
                    <Instagram className="size-4" />
                  </a>
                  <a
                    href={config.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-700 transition hover:bg-yellow-500/20"
                    aria-label="Facebook"
                  >
                    <Facebook className="size-4" />
                  </a>
                </div>
                <Button
                  size="sm"
                  onClick={() => scrollToSection("kontakt")}
                  className="rounded-full bg-yellow-500 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black hover:bg-yellow-400"
                >
                  Kontakt
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
