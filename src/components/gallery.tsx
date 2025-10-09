"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a51e2f79-b3a9-4dc1-8533-9a804724a05c%20%281%29.JPG-7ebGsoRE2qsIZQnrOnBDiqoZ56qa69.jpeg",
      alt: "Lešenie na rodinnom dome",
      title: "Rodinný dom",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/72f6b3c5-03fd-4cb3-a88b-2fd4212013fe%20%281%29.JPG-vgQaCzCPMlAaRkDc7ukoSraYFUR1Km.jpeg",
      alt: "Lešenie na bytovom dome",
      title: "Bytový dom",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f1c25871-ac04-4236-9760-73ae01ee2fbf%20%281%29.JPG-E6XVqM4mHEw7NpjnfrHM0plHjGmzP5.jpeg",
      alt: "Komponenty lešenia",
      title: "Naše vybavenie",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1c5d9ff7-3620-4e83-b305-431ff77ce024.JPG-M7hos3AAax6f5wCmCpLrRKXgre05xg.jpeg",
      alt: "Sklad lešenia",
      title: "Sklad komponentov",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/034004b4-96a5-43ac-8c6d-f5731096adbe%20%281%29.JPG-1gdMYFCRYtfLfU0ScMYtytP6OiMEwl.jpeg",
      alt: "Rámové lešenie",
      title: "Rámové lešenie",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01ceeb2f-1318-4aed-b80b-95c97f2ea956.JPG-6skUR8UCaRsek2kD2IDe0EPJrbU9aq.jpeg",
      alt: "Doprava lešenia",
      title: "Doprava",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2a50d5cc-7112-46ab-9ab9-9e6442b299c5%20%281%29.JPG-EP9Vy9ltNCkJVrp021qRXfFSThaA2I.jpeg",
      alt: "Montáž lešenia",
      title: "Montáž",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/44238c68-eb13-46c9-b3e4-918c5a034aaf.JPG-mgbK5sl1wjkDTpAEAhy8ejydxL5zLX.jpeg",
      alt: "Sklad materiálu",
      title: "Skladové zásoby",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30049b26-737b-4252-b19a-12b4680b6fbb%20%281%29.JPG-XLTplX6zHyUR1wp0NYzrwtpzbUWri0.jpeg",
      alt: "Kompletné lešenie",
      title: "Realizovaný projekt",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4933041e-62a8-4f47-98a3-e753a42b6ecc%20%281%29.JPG-VMndG2GNSfPIitlMmoHfHAVNJIfoDR.jpeg",
      alt: "Lešenie na kamióne",
      title: "Expedícia",
    },
  ];

  const layoutClasses = [
    "lg:col-span-4 lg:row-span-2",
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-6",
    "lg:col-span-6 lg:row-span-2",
    "lg:col-span-6",
  ];

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-secondary/70 py-20 md:py-24"
    >
      <div className="absolute inset-x-0 top-[-220px] h-[380px] bg-gradient-to-b from-yellow-200/25 via-transparent to-transparent blur-3xl" />
      <div className="absolute inset-y-0 right-[-30%] hidden w-[45%] bg-gradient-to-l from-yellow-200/25 via-transparent to-transparent blur-3xl xl:block" />

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <ScrollReveal className="max-w-2xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-800">
              Galéria projektov
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Naše lešenia v teréne
            </h2>
            <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
              Rôzne typy stavieb, rovnaký prístup – bezpečné a stabilné riešenie
              pripravené pre váš projekt. Presvedčte sa, ako vyzerá našich 500+
              realizácií.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={120}
            className="flex flex-wrap items-center gap-2.5"
          >
            {["Fasádne projekty", "Priemysel", "Skladovanie", "Logistika"].map(
              (label) => (
                <span
                  key={label}
                  className="rounded-full border border-border/60 bg-card/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground shadow-[0_16px_42px_-40px_rgba(15,23,42,0.6)]"
                >
                  {label}
                </span>
              )
            )}
          </ScrollReveal>
        </div>

        <div className="relative mt-12 lg:hidden">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((image, index) => (
              <button
                key={image.title}
                type="button"
                className="group relative block h-[400px] w-[85vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-yellow-200/75">
                    EMT Lešenie
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-tight">
                    {image.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow-200/70 transition-colors group-hover:text-yellow-200">
                    Zobraziť detail{" "}
                    <span className="text-yellow-300 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg backdrop-blur-sm transition hover:bg-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={() => scrollCarousel("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg backdrop-blur-sm transition hover:bg-white"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        <div className="mt-12 hidden gap-4 lg:grid lg:grid-cols-3 lg:auto-rows-[280px] xl:auto-rows-[320px]">
          {images.map((image, index) => (
            <ScrollReveal key={image.title} delay={index * 70}>
              <button
                type="button"
                className={`group relative block h-full w-full overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  layoutClasses[index % layoutClasses.length]
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-yellow-200/75">
                    EMT Lešenie
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-tight">
                    {image.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow-200/70 transition-colors group-hover:text-yellow-200">
                    Zobraziť detail{" "}
                    <span className="text-yellow-300 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 px-6 py-12 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative flex h-full w-full max-w-7xl flex-col gap-5 text-white"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between px-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-yellow-200/60">
                    EMT Lešenie
                  </p>
                  <h3 className="mt-0.5 text-base font-semibold md:text-lg">
                    {images[selectedImage].title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="flex size-9 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
                  aria-label="Zavrieť galériu"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-2xl">
                <img
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  className="h-full w-full object-contain"
                />

                <button
                  onClick={() =>
                    setSelectedImage(
                      (selectedImage - 1 + images.length) % images.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/90 text-foreground shadow-xl backdrop-blur-sm transition hover:bg-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6" />
                </button>

                <button
                  onClick={() =>
                    setSelectedImage((selectedImage + 1) % images.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/90 text-foreground shadow-xl backdrop-blur-sm transition hover:bg-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((image, index) => (
                  <button
                    key={image.title}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                      index === selectedImage
                        ? "border-yellow-500 ring-2 ring-yellow-500/50"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                    {index === selectedImage && (
                      <div className="absolute inset-0 bg-yellow-500/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
