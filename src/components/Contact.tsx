export function Contact() {
  const items = [
    {
      title: "Endereço",
      lines: ["R. Ramiro Barcelos, 1200", "Independência · Porto Alegre — RS", "Oftalmoclínica Porto Alegre"],
    },
    { title: "Telefone", lines: ["(51) 3022-3042"] },
    {
      title: "Horário",
      lines: ["Seg–Sex: 09:00 — 18:00", "Sáb: sob consulta", "Dom: fechado"],
    },
    { title: "Site", lines: ["studioferas.com.br"] },
  ];

  return (
    <section id="contato" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-dark mb-4">Visite-nos</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Vamos cuidar de você <span className="text-gradient-gold">hoje</span>?
            </h2>
            <div className="gold-divider w-24 mb-8" />
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {items.map((it) => (
                <div key={it.title}>
                  <p className="text-xs uppercase tracking-wider text-gold-dark mb-2">
                    {it.title}
                  </p>
                  {it.lines.map((l) => (
                    <p key={l} className="text-foreground/80 text-sm leading-relaxed">
                      {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://studioferas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-gold text-white px-8 py-4 rounded-full font-medium shadow-gold hover:scale-105 transition-transform"
              >
                Agendar online
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Studio+Feras+Porto+Alegre"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold/50 px-8 py-4 rounded-full font-medium hover:bg-gold/10 transition-colors"
              >
                Como chegar
              </a>
            </div>
          </div>

          <div className="reveal relative rounded-3xl overflow-hidden shadow-gold aspect-square lg:aspect-auto lg:h-[560px]">
            <iframe
              title="Mapa Studio Feras"
              src="https://www.google.com/maps?q=R.+Ramiro+Barcelos,+1200,+Porto+Alegre&output=embed"
              className="w-full h-full border-0 grayscale-[20%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
