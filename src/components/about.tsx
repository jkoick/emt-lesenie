import { CheckCircle2 } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import config from "@/data/config.json";

export function About() {
  const priorities = [
    "Transparentnosť a férovosť",
    "Certifikovaná kvalita a bezpečnosť",
    "Skúsenosti z reálnej praxe",
    "Flexibilné riešenia na mieru – predaj aj prenájom",
  ];

  return (
    <section
      id="o-nas"
      className="relative overflow-hidden bg-secondary/80 py-20 md:py-24"
    >
      <div className="absolute inset-x-0 top-[-300px] h-[460px] bg-gradient-to-b from-yellow-200/30 via-transparent to-transparent blur-3xl" />
      <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <ScrollReveal className="space-y-9">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-800">
                Spoznajte EMT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                O nás
              </h2>
              <div className="space-y-4 text-sm md:text-lg leading-relaxed text-muted-foreground">
                <p>
                  Sme spoľahlivý partner v predaji a prenájme certifikovaného
                  fasádneho lešenia. Ponúkame kvalitné, bezpečné produkty s
                  rýchlou dodávkou a férovým prístupom.
                </p>
                <p>
                  Za našou prácou stoja desiatky spokojných zákazníkov – od
                  stavebných firiem až po súkromné osoby.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[26px] border border-border/70 bg-card/90 p-7 shadow-[0_30px_68px_-48px_rgba(15,23,42,0.6)]">
                <div className="absolute -top-20 -right-16 h-32 w-32 rounded-full bg-yellow-500/20 blur-3xl" />
                <h3 className="text-lg font-semibold text-foreground md:text-xl">
                  Naše priority
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {priorities.map((priority) => (
                    <div
                      key={priority}
                      className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/85 px-4 py-3"
                    >
                      <div className="flex items-center justify-center rounded-full bg-yellow-500/15 p-1.5">
                        <CheckCircle2 className="size-4 text-yellow-600" />
                      </div>
                      <span className="text-sm text-card-foreground leading-relaxed">
                        {priority}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex items-center gap-3 rounded-2xl border border-yellow-500/40 bg-yellow-500/10 px-4 py-2.5 text-sm font-semibold text-yellow-700">
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-yellow-500 text-white">
                    ★
                  </span>
                  Vaša spokojnosť je pre nás prioritou.
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={160}
            className="relative flex justify-center lg:justify-end lg:h-full"
          >
            <div className="relative w-full max-w-[500px] pb-16 sm:pb-20 lg:h-full lg:pb-0">
              <div className="absolute -top-24 -left-20 h-40 w-40 rounded-full bg-yellow-500/15 blur-3xl" />
              <div className="absolute -bottom-20 -right-8 h-52 w-52 rounded-full bg-yellow-400/20 blur-3xl" />

              <div className="group relative h-[360px] overflow-hidden rounded-[32px] border-white/15 bg-black shadow-[0_40px_100px_-60px_rgba(15,23,42,0.85)] sm:h-[420px] lg:h-full lg:flex lg:flex-col">
                <img
                  src={`/images/${config.images.about.filename}`}
                  alt={config.images.about.alt}
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-200">
                    EMT Lešenie v praxi
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    Bezpečný prístup vo výške
                  </h3>
                  <p className="mt-3 text-sm text-white/80">
                    Naše fasádne lešenia spĺňajú prísne normy a sú pripravené na
                    rýchlu montáž na akomkoľvek type stavby.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
