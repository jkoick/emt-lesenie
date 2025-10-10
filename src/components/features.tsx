import { Clock, Shield, Package } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";

export function Features() {
  const features = [
    {
      icon: Clock,
      title: "Šetrite čas aj nervy!",
      description:
        "Naše lešenia sú skonštruované tak, aby ste ich mohli postaviť bez zbytočného zdržania – rýchlo, jednoducho a bez komplikácií. Ideálne riešenie pre každý stavbársky tím.",
    },
    {
      icon: Shield,
      title: "Bezpečnosť na prvom mieste",
      description:
        "Bezpečnosť je u nás na prvom mieste – preto pracujeme výhradne s fasádnym lešením, ktoré je certifikované a zodpovedá najprísnejším normám.",
    },
    {
      icon: Package,
      title: "Kompletné príslušenstvo",
      description:
        "Nezabúdame na detaily. V našej ponuke nájdete kompletné príslušenstvo k lešeniam – od nastaviteľných nôh, cez bezpečnostné výlezy a rebríky, až po okopy a spoľahlivé kotvenie.",
    },
  ];

  const accentGradients = [
    "from-amber-500 to-yellow-400",
    "from-yellow-400/90 to-orange-500",
    "from-yellow-500 to-amber-300",
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-24">
      <div className="absolute inset-x-0 -top-1/2 h-[480px] bg-gradient-to-b from-yellow-200/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute inset-y-0 right-[-25%] hidden w-[40%] bg-gradient-to-l from-yellow-200/25 via-transparent to-transparent blur-3xl lg:block" />

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-700">
              Čo nás odlišuje
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Profesionálne lešenie pre vašu stavbu
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Lešenie je základom bezpečnej stavby. Lešenie je dočasná montovaná
              konštrukcia, ktorá zabezpečuje bezpečný prístup k práci vo výškach
              pri stavbách, rekonštrukciách či údržbe.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Okrem ochrany pracovníkov zlepšuje organizáciu a efektivitu
              stavebných prác. Umožňuje jednoduchší presun materiálu a rýchlejší
              priebeh výstavby. Vďaka týmto výhodám je neodmysliteľnou súčasťou
              moderného stavebníctva.
            </p>
          </ScrollReveal>
        </div>

        <div>
          <div className="mt-16 grid mx-auto gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const accent = accentGradients[index % accentGradients.length];
              return (
                <ScrollReveal
                  key={feature.title}
                  delay={index * 140}
                  className={`relative h-full ${
                    index === features.length - 1
                      ? "sm:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div
                      className={`absolute -top-12 left-8 h-28 w-28 rounded-full bg-gradient-to-br ${accent} opacity-50 blur-3xl`}
                    />
                    <div className="relative inline-flex items-center justify-center rounded-xl bg-white/85 p-3 shadow-md">
                      <Icon className="size-6 text-yellow-600" />
                    </div>
                    <div className="relative mt-6 space-y-3 text-left">
                      <h3 className="text-lg font-semibold text-foreground leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-5 h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent" />
                    <span className="relative mt-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-yellow-700">
                      EMT Lešenie
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
