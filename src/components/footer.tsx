import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">EMT Lešenie</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sme tu, aby sme vám uľahčili prácu. Prenájom a predaj lešenia, príslušenstva s osobným prístupom.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Naše služby</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Prenájom lešenia</li>
              <li>Predaj lešenia</li>
              <li>Príslušenstvo</li>
              <li>Doprava na miesto</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+421904350340" className="hover:text-primary transition-colors">
                  +421 904 350 340
                </a>
              </li>
              <li>
                <a href="mailto:emtlesenie@gmail.com" className="hover:text-primary transition-colors">
                  emtlesenie@gmail.com
                </a>
              </li>
              <li>Petrovce nad Laborcom</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EMT Lešenie. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}
