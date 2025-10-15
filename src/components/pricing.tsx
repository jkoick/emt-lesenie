"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { ScrollReveal } from "@/components/scroll-reveal";
import config from "@/data/config.json";

export function Pricing() {
  const { usedScaffolding, newComponents, sets, notes } = config.pricing;

  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="cennik"
      className="relative overflow-hidden bg-background py-20 md:py-24"
    >
      <div className="absolute inset-x-0 top-[-300px] h-[480px] bg-gradient-to-b from-yellow-200/25 via-transparent to-transparent blur-3xl" />
      <div className="absolute inset-y-0 right-[-24%] hidden w-[38%] bg-gradient-to-l from-yellow-200/20 via-transparent to-transparent blur-3xl xl:block" />

      <div className="container relative mx-auto max-w-6xl px-4">
        <ScrollReveal className="mx-auto max-w-4xl text-center space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-800">
            Transparentný cenník
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Jasné ceny, férové podmienky
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
            Cena závisí od metráže a dĺžky prenájmu. Základné položky sme
            prehľadne zoradili nižšie – pre individuálnu ponuku nám napíšte a
            radi pripravíme detailný rozpočet.
          </p>
        </ScrollReveal>

        <div className="mt-14 space-y-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollReveal className="relative overflow-hidden rounded-[28px] border border-border/70 bg-card/90 shadow-[0_36px_80px_-50px_rgba(15,23,42,0.62)]">
              <div className="absolute -top-24 -left-10 h-44 w-44 rounded-full bg-yellow-500/20 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0" />

              <CardHeader className="relative pb-5 pt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-yellow-700">
                  Použité lešenie
                </p>
                <CardTitle className="text-xl md:text-2xl">
                  Cenník používaného lešenia
                </CardTitle>
                <p className="mt-3 text-sm text-muted-foreground">
                  Všetky komponenty sú skontrolované, plne funkčné a pripravené
                  na okamžité nasadenie.
                </p>
              </CardHeader>
              <CardContent className="relative space-y-3.5 pb-7">
                {usedScaffolding.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-border/50 bg-background/80 px-5 py-4 text-sm"
                  >
                    <span className="text-card-foreground">{item.name}</span>
                    <span className="text-base font-semibold text-yellow-600 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
                <div className="rounded-[22px] border border-yellow-500/35 bg-yellow-500/10 px-5 py-4 mt-4 text-sm font-semibold text-yellow-800">
                  Potrebujete inú konfiguráciu? Sklad vám vyskladáme tak, aby
                  presne kopíroval pôdorys.
                </div>
              </CardContent>
            </ScrollReveal>

            <ScrollReveal
              delay={120}
              className="relative overflow-hidden rounded-[28px] border border-border/70 bg-card/90 shadow-[0_34px_80px_-52px_rgba(15,23,42,0.6)]"
            >
              <div className="absolute -top-24 right-10 h-40 w-40 rounded-full bg-yellow-500/25 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0" />

              <CardHeader className="relative pb-5 pt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-yellow-700">
                  Nové komponenty
                </p>
                <CardTitle className="text-xl md:text-2xl">
                  Komponenty skladom
                </CardTitle>
              </CardHeader>
              <CardContent className="relative pb-7">
                <div className="space-y-3.5">
                  {newComponents.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-border/50 bg-background/80 px-5 py-4 text-sm"
                    >
                      <span className="text-card-foreground">{item.name}</span>
                      <span className="font-semibold text-yellow-600 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={220} className="grid gap-6 lg:grid-cols-2">
            {sets.map((set) => (
              <Card
                key={set.title}
                className="relative overflow-hidden rounded-[26px] border border-border/70 bg-card/90 shadow-[0_30px_72px_-55px_rgba(15,23,42,0.6)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500/60 to-yellow-500/0" />
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-700">
                    Najpredávanejšie zostavy
                  </p>
                  <CardTitle className="text-xl">{set.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {set.description}
                  </p>
                  {set.price === "Kontaktujte nás" ? (
                    <Button
                      size="sm"
                      onClick={scrollToContact}
                      className="rounded-full bg-yellow-500 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-yellow-400"
                    >
                      {set.price}
                    </Button>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-yellow-800">
                      {set.price}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </ScrollReveal>

          <ScrollReveal
            delay={280}
            className="rounded-[26px] border border-border/60 bg-muted/80 p-6 text-sm leading-relaxed text-muted-foreground shadow-[0_22px_64px_-58px_rgba(15,23,42,0.55)]"
          >
            <ul className="space-y-2">
              {notes.map((note, index) => (
                <li key={index}>• {note}</li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal
          className="mt-10 flex flex-col items-center gap-3 text-center"
          delay={320}
        >
          <Button
            size="default"
            onClick={scrollToContact}
            className="rounded-full bg-yellow-500 px-6 py-5 text-[10px] sm:px-8 sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black transition hover:bg-yellow-400 w-[90%] max-w-md sm:w-auto"
          >
            Kontaktujte nás pre cenovú ponuku
          </Button>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Reagujeme do {config.contact.responseTime}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
