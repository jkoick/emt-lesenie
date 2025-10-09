export function Stats() {
  const stats = [
    { number: "500+", label: "Projects Completed", sublabel: "Across all sectors" },
    { number: "24/7", label: "Emergency Service", sublabel: "Always available" },
    { number: "100%", label: "Safety Certified", sublabel: "Fully compliant" },
    { number: "15+", label: "Years Experience", sublabel: "Industry leaders" },
  ]

  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
