"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="domov" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/72f6b3c5-03fd-4cb3-a88b-2fd4212013fe%20%281%29.JPG-vgQaCzCPMlAaRkDc7ukoSraYFUR1Km.jpeg"
          alt="Stavebné lešenie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
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
        </div>
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
  )
}
