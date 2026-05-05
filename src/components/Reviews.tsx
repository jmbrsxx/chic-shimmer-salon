const reviews = [
  {
    name: "Silvia Castilhos",
    role: "Local Guide · 84 avaliações",
    rating: 5,
    text:
      "Atendimento maravilhoso e a proprietária é muito simpática, além de ser uma ótima profissional!",
  },
  {
    name: "Carla Calazans",
    role: "Local Guide · 4 avaliações",
    rating: 5,
    text:
      "Ambiente acolhedor e profissionais atenciosas. Sempre saio satisfeita com o resultado.",
  },
  {
    name: "Tatiana Milech",
    role: "Local Guide · 41 avaliações",
    rating: 3,
    text:
      "Experiência mista — cada visita é uma descoberta. Vale conhecer e formar sua opinião.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex text-gold mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < n ? "" : "opacity-25"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="py-32 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark mb-4">Avaliações</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            O que dizem <span className="text-gradient-gold">nossas clientes</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="font-display text-5xl text-gradient-gold">4,4</span>
            <div className="text-left">
              <Stars n={4} />
              <span className="text-xs text-muted-foreground">7 avaliações no Google</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="reveal bg-card p-8 rounded-3xl shadow-soft border border-gold/10 hover:border-gold/40 transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Stars n={r.rating} />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{r.text}"</p>
              <div className="gold-divider mb-4" />
              <p className="font-medium">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
