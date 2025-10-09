"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Pricing() {
  const usedScaffolding = [
    { name: "Rám lešenia používaný š:1m - v:2m", price: "41,90 €" },
    { name: "Podlaha pozinkovaná používaná 0,5x1,8m", price: "20,90 €" },
    { name: "Podlaha prielezová s rebríkom používaná", price: "95,90 €" },
    { name: "Vrchný ukončovací stĺpik používaný", price: "14,90 €" },
    { name: "Okopový plech používaný", price: "6,90 €" },
  ]

  const newComponents = [
    { name: "Noha nastaviteľná nová pozinkovaná 0,3m", price: "7,50 €" },
    { name: "Noha nastaviteľná nová pozinkovaná 0,6m", price: "9,50 €" },
    { name: "Noha nastaviteľná nová pozinkovaná 1m", price: "12,50 €" },
    { name: "Spojka pevná", price: "5,50 €" },
    { name: "Spojka otočná", price: "5,90 €" },
    { name: "Kotva 0,6m", price: "8,95 €" },
    { name: "Kotva 1m", price: "10,90 €" },
    { name: "Skrutka kotviaca 28cm", price: "2,95 €" },
  ]

  const sets = [
    {
      title: "Sada použitého lešenia cca 160m²",
      description:
        "38x rám lešenia, 64x podlaha pozinkovaná, 18x nastavovacia noha pozinkovaná 0,3m + diagonálne tyče a zábradlia k postaveniu.",
      price: "Kontaktujte nás",
    },
    {
      title: "Sada použitého lešenia cca 90m²",
      description:
        "18x rám lešenia, 32x podlaha pozinkovaná nekĺzavá, 18x nastavovacia noha pozinkovaná 0,3m + diagonálne tyče a zábradlia k postaveniu.",
      price: "1 529 €",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("kontakt")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="cennik" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Cenník</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cena prenájmu závisí od množstva lešenia a dĺžky prenájmu. Kontaktujte nás a my vám pripravíme nezáväznú
            cenovú ponuku.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Used Scaffolding */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Cenník používaného lešenia</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {usedScaffolding.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="text-card-foreground">{item.name}</span>
                    <span className="font-bold text-yellow-600 text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* New Components */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Nové komponenty</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                {newComponents.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="text-card-foreground">{item.name}</span>
                    <span className="font-bold text-yellow-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sets */}
          <div className="grid md:grid-cols-2 gap-6">
            {sets.map((set, index) => (
              <Card key={index} className="border-2 border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-xl">{set.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{set.description}</p>
                  <div className="text-2xl font-bold text-yellow-600">{set.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="bg-muted">
            <CardContent className="p-6 space-y-3 text-sm text-muted-foreground">
              <p>• Zábradlia a diagonálne tyče sú dodávané ku každým rámom aj pri kúpe na samostatné komponenty.</p>
              <p>• Lešenie možno vyskladať individuálne podľa potreby zákazníka.</p>
              <p>• Ceny sú uvádzané bez DPH.</p>
              <p>• Pre firmy a platcov DPH účtujeme bez DPH s prenosom daňovej povinnosti.</p>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
            >
              Kontaktujte nás pre cenovú ponuku
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
