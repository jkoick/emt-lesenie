"use client";

import { Calendar, ShoppingCart } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";

const SERVICES = [
  {
    icon: Calendar,
    title: "Prenájom lešenia",
    description:
      "Krátkodobý aj dlhodobý prenájom lešenia pre rodinné domy, bytové domy aj priemyselné objekty.",
  },
  {
    icon: ShoppingCart,
    title: "Predaj lešenia",
    description:
      "Ponúkame kvalitné rámové lešenie – za výhodné ceny. Pre firmy aj súkromné osoby.",
  },
];

export function Services() {
  return (
    <section id="sluzby" className="relative overflow-hidden bg-background py-20 md:py-24">
      <div className="absolute inset-x-0 top-[-260px] h-[420px] bg-gradient-to-b from-yellow-200/25 via-transparent to-transparent blur-3xl" />
      <div className="absolute inset-y-0 right-[-28%] hidden w-[40%] bg-gradient-to-l from-yellow-200/20 via-transparent to-transparent blur-3xl lg:block" />

      <div className="container relative mx-auto max-w-4xl px-4">
        <ScrollReveal className="space-y-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-800">
            Naše služby
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Naše služby</h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 120}>
              <Card className="h-full border border-border/70 bg-card/90 shadow-[0_26px_60px_-50px_rgba(15,23,42,0.55)] transition-transform duration-500 hover:-translate-y-1">
                <CardContent className="flex h-full flex-col gap-4 p-8 text-center md:text-left">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-700 md:mx-0">
                    <service.icon className="size-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
