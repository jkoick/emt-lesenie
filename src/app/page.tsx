import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
