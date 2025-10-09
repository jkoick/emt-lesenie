import { CheckCircle2 } from "lucide-react"

export function About() {
  const priorities = [
    "Transparentnosť a férovosť",
    "Certifikovaná kvalita a bezpečnosť",
    "Skúsenosti z reálnej praxe",
    "Flexibilné riešenia na mieru – predaj aj prenájom",
  ]

  return (
    <section id="o-nas" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">O nás</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sme spoľahlivý partner v predaji a prenájme certifikovaného fasádneho lešenia. Ponúkame kvalitné, bezpečné
              produkty s rýchlou dodávkou a férovým prístupom. Za našou prácou stoja desiatky spokojných zákazníkov – od
              stavebných firiem až po súkromné osoby.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Naše priority:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {priorities.map((priority, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-card-foreground">{priority}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-lg font-semibold text-yellow-600">
              Vaša spokojnosť je pre nás prioritou.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
