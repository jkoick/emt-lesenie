"use client";

import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Phone } from "lucide-react";

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
      const parallaxStrength = 0.25;
      const translateY = Math.max(Math.min(offset * parallaxStrength * -1, 160), -160);
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
      prefersReducedMotion?.removeEventListener("change", onMotionPreferenceChange);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="domov"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/72f6b3c5-03fd-4cb3-a88b-2fd4212013fe%20%281%29.JPG-vgQaCzCPMlAaRkDc7ukoSraYFUR1Km.jpeg')",
            transform: "translateY(0px) scale(1.08)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <ScrollReveal className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance text-white">
            VAŠA STAVBA. NAŠE LEŠENIE.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto text-pretty">
            Sme tu, aby sme vám uľahčili prácu. Prenájom a predaj lešenia, príslušenstva s osobným prístupom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Kontaktujte nás
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
