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

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Profesionálne lešenie pre vašu stavbu
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Lešenie, známe aj ako montovaná dočasná konštrukcia, je
              neoddeliteľnou súčasťou takmer každého stavebného projektu. Jeho
              hlavnou úlohou je zabezpečiť bezpečný a stabilný prístup k práci
              vo výškach – či už ide o rekonštrukciu, údržbu alebo novostavbu.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal
                  key={feature.title}
                  className="text-center"
                  delay={index * 120}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/10 mb-6">
                    <Icon className="w-10 h-10 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
