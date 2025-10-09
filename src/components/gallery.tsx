"use client";

import { useState } from "react";

import { ScrollReveal } from "@/components/scroll-reveal";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Galéria
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-semibold">
            Základ pre vašu stavbu začína u nás
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <ScrollReveal
              key={image.title}
              delay={index * 80}
              className="h-full"
            >
              <div
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-400 transition-colors font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
