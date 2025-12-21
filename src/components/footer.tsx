"use client";

import { Instagram, Facebook } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import { useConfig } from "@/hooks/useConfig";

export function Footer() {
  const { config } = useConfig();
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
        <ScrollReveal className="rounded-[32px] border border-border/60 bg-card/90 p-8 md:p-12 shadow-[0_52px_110px_-68px_rgba(15,23,42,0.75)]">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-800">
                EMT Lešenie
              </span>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                Váš partner pre bezpečné a efektívne lešenie
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
                Prenájom, predaj a kompletné príslušenstvo rámového lešenia s
                osobným prístupom. Konzultujeme, plánujeme a dodávame riešenia
                pripravené na montáž.
              </p>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                {config && (
                  <>
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
                  </>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">
                Navigácia
              </h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
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

            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">
                Kontakt
              </h4>
              <ul className="space-y-3.5 text-sm text-muted-foreground leading-relaxed">
                {config && (
                  <>
                    {(config.contact.phones && config.contact.phones.length > 0
                      ? config.contact.phones
                      : [config.contact.phone]
                    ).map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="font-semibold text-foreground transition hover:text-yellow-700"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}

                    {(config.contact.emails && config.contact.emails.length > 0
                      ? config.contact.emails
                      : [{ value: config.contact.email, label: undefined }]
                    ).map((emailItem) => (
                      <li key={emailItem.value} className="flex flex-col gap-0.5">
                        {emailItem.label && (
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80">
                            {emailItem.label}
                          </span>
                        )}
                        <a
                          href={`mailto:${emailItem.value}`}
                          className="font-semibold text-foreground transition hover:text-yellow-700"
                        >
                          {emailItem.value}
                        </a>
                      </li>
                    ))}
                    <li className="pt-1">{config.contact.address}</li>
                    <li className="rounded-[18px] border border-border/50 bg-background/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground mt-4 inline-block">
                      Reagujeme do {config.contact.responseTime}
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">
                Údaje o spoločnosti
              </h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                {config && config.company && (
                  <>
                    <li className="font-semibold text-foreground">{config.company.name}</li>
                    <li>{config.company.legalName}</li>
                    <li className="pt-1">{config.company.headquarters}</li>
                    <li>{config.company.operation}</li>
                    <li className="pt-2">{config.company.ico}</li>
                    <li>{config.company.dic}</li>
                    <li>{config.company.icDph}</li>
                  </>
                )}
              </ul>
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
