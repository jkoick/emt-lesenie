import { Instagram, Facebook } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import config from "@/data/config.json";

export function Footer() {
  const navigation = [
    { label: "Domov", href: "#domov" },
    { label: "O nás", href: "#o-nas" },
    { label: "Služby", href: "#sluzby" },
    { label: "Galéria", href: "#galeria" },
    { label: "Cenník", href: "#cennik" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <footer className="relative overflow-hidden bg-background text-secondary-foreground">
      <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-yellow-200/25 via-transparent to-transparent blur-3xl" />
      <div className="absolute inset-x-0 bottom-[-160px] h-[280px] bg-gradient-to-t from-yellow-200/30 via-transparent to-transparent blur-3xl" />

      <div className="container relative mx-auto px-4 py-16">
        <ScrollReveal className="rounded-[32px] border border-border/60 bg-card/90 p-9 shadow-[0_52px_110px_-68px_rgba(15,23,42,0.75)]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-800">
                EMT Lešenie
              </span>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                Váš partner pre bezpečné a efektívne lešenie
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Prenájom, predaj a kompletné príslušenstvo rámového lešenia s
                osobným prístupom. Konzultujeme, plánujeme a dodávame riešenia
                pripravené na montáž.
              </p>
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={config.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-700 transition hover:bg-yellow-500/20"
                  aria-label="Instagram"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href={config.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-700 transition hover:bg-yellow-500/20"
                  aria-label="Facebook"
                >
                  <Facebook className="size-5" />
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3.5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">
                  Navigácia
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {navigation.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="transition hover:text-yellow-700"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3.5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">
                  Kontakt
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li>
                    <a
                      href={`tel:${config.contact.phone.replace(/\s/g, "")}`}
                      className="font-semibold text-foreground transition hover:text-yellow-700"
                    >
                      {config.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${config.contact.email}`}
                      className="font-semibold text-foreground transition hover:text-yellow-700"
                    >
                      {config.contact.email}
                    </a>
                  </li>
                  <li>{config.contact.address}</li>
                  <li className="rounded-[18px] border border-border/50 bg-background/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Reagujeme do {config.contact.responseTime}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={120}
          className="mt-10 flex flex-col items-center gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span>&copy; {new Date().getFullYear()} EMT Lešenie</span>
          <span>Všetky práva vyhradené</span>
        </ScrollReveal>
      </div>
    </footer>
  );
}
