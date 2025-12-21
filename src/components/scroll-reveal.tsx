"use client";

import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ScrollRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  style,
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const markBodyReady = () => {
      if (typeof document !== "undefined") {
        document.body.dataset.scrollReady = "true";
      }
    };

    const addVisibleClass = () => node.classList.add("is-visible");

    const revealInstantly = () => {
      markBodyReady();
      addVisibleClass();
    };

    if (typeof window === "undefined") {
      revealInstantly();
      return;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    if (prefersReducedMotion?.matches) {
      revealInstantly();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealInstantly();
      return;
    }

    const revealWithAnimation = () => {
      markBodyReady();
      requestAnimationFrame(addVisibleClass);
    };

    const isAlreadyVisible = () => {
      const rect = node.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.95 && rect.bottom >= 0;
    };

    if (isAlreadyVisible()) {
      revealWithAnimation();
      return;
    }

    markBodyReady();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            observer.unobserve(entry.target as Element);
            requestAnimationFrame(addVisibleClass);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      className={cn(
        "scroll-reveal transition-all duration-700 ease-out",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
