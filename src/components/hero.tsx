"use client";

import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowUpRight, Phone } from "lucide-react";
import config from "@/data/config.json";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const backgroundEl = backgroundRef.current;

    if (!sectionEl || !backgroundEl || typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    let frame: number | null = null;

    const update = () => {
      if (prefersReducedMotion?.matches) {
        backgroundEl.style.transform = "translateY(0px) scale(1.08)";
        return;
      }
      frame = null;
      const rect = sectionEl.getBoundingClientRect();
      const offset = rect.top;
      const parallaxStrength = 0.22;
      const translateY = Math.max(
        Math.min(offset * parallaxStrength * -1, 160),
        -160
      );
      backgroundEl.style.transform = `translateY(${translateY}px) scale(1.08)`;
    };

    const onScroll = () => {
      if (frame !== null) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    const onResize = () => {
      update();
    };

    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        backgroundEl.style.transform = "translateY(0px) scale(1.08)";
      } else {
        update();
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    prefersReducedMotion?.addEventListener("change", onMotionPreferenceChange);

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      prefersReducedMotion?.removeEventListener(
        "change",
        onMotionPreferenceChange
      );
    };
  }, []);

  const scrollToTarget = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="domov"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-24 md:pt-32"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('/images/${config.images.hero.filename}')`,
            transform: "translateY(0px) scale(1.08)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto max-w-6xl grid gap-10 px-4 md:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <ScrollReveal className="space-y-8 text-left text-white">
            <div className="space-y-5">
              <h1 className="text-5xl font-bold text-balance sm:text-7xl">
                VAŠA STAVBA. NAŠE LEŠENIE.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/95 sm:text-base md:text-lg">
                Sme tu, aby sme vám uľahčili prácu. Prenájom a predaj lešenia,
                príslušenstva s osobným prístupom.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="default"
                onClick={() => scrollToTarget("kontakt")}
                className="rounded-full bg-yellow-500 px-9 py-5 text-xs font-semibold uppercase tracking-[0.32em] text-black transition hover:bg-yellow-400"
              >
                <Phone className="size-4" />
                Kontaktujte nás
              </Button>
              <Button
                size="default"
                variant="outline"
                onClick={() => scrollToTarget("sluzby")}
                className="rounded-full border-white/25 bg-white/10 px-9 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/15 hover:text-white"
              >
                Zistite viac
                <ArrowUpRight className="size-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
