import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ShoppingCart } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Calendar,
      title: "Prenájom lešenia",
      description: "Krátkodobý aj dlhodobý prenájom lešenia pre rodinné domy, bytové domy aj priemyselné objekty.",
    },
    {
      icon: ShoppingCart,
      title: "Predaj lešenia",
      description: "Ponúkame kvalitné rámové lešenie – za výhodné ceny. Pre firmy aj súkromné osoby.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Naše služby</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vaše partnerstvo na každej stavbe. Predaj a prenájom kvalitného stavebného lešenia s možnosťou dopravy až na
            miesto. Spoľahlivosť, flexibilita a výhodné ceny.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-yellow-500 transition-colors duration-300">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto">
                  <service.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
