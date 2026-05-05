export function About() {
  return (
    <section id="sobre" className="py-32 bg-gradient-soft relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-dark mb-4">Sobre nós</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Um espaço pensado para <span className="text-gradient-gold">você</span>.
            </h2>
            <div className="gold-divider w-24 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Localizado no coração do bairro Independência, em Porto Alegre, o Studio Feras
              é um salão dedicado a oferecer experiências completas de beleza e bem-estar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa equipe combina técnica, atendimento acolhedor e produtos de alta qualidade
              para entregar resultados que valorizam a sua autenticidade.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { n: "10+", l: "Anos de história" },
                { n: "4,4", l: "Avaliação Google" },
                { n: "100%", l: "Cuidado dedicado" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal relative">
            <div className="absolute -inset-4 bg-gradient-gold rounded-3xl opacity-20 blur-2xl" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-gold">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
                alt="Ambiente do salão"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-soft border border-gold/20 max-w-[200px]">
              <p className="text-xs uppercase tracking-wider text-gold-dark mb-1">Endereço</p>
              <p className="text-sm font-medium">R. Ramiro Barcelos, 1200 — Independência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
