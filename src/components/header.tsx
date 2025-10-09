"use client"

import { useState } from "react"
import { Menu, X, Facebook, Instagram } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center font-bold text-xl text-accent-foreground">
              EMT
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">EMT Lešenie</span>
              <span className="text-xs text-muted-foreground">Prenájom & Predaj</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("domov")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Domov
            </button>
            <button
              onClick={() => scrollToSection("o-nas")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              O nás
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Galéria
            </button>
            <button
              onClick={() => scrollToSection("cennik")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Cenník
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("domov")}
                className="text-left py-2 hover:text-accent transition-colors"
              >
                Domov
              </button>
              <button
                onClick={() => scrollToSection("o-nas")}
                className="text-left py-2 hover:text-accent transition-colors"
              >
                O nás
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-left py-2 hover:text-accent transition-colors"
              >
                Galéria
              </button>
              <button
                onClick={() => scrollToSection("cennik")}
                className="text-left py-2 hover:text-accent transition-colors"
              >
                Cenník
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="text-left py-2 hover:text-accent transition-colors"
              >
                Kontakt
              </button>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
