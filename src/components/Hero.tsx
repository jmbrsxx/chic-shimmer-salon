import heroImg from "@/assets/hero-salon.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior do Studio Feras"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      </div>

      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark mb-6 animate-[fade-in_0.8s_ease-out]">
            Salão de Beleza · Porto Alegre
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6 animate-[fade-in_1s_ease-out]">
            Beleza que <span className="text-gradient-gold">brilha</span> em cada detalhe.
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl animate-[fade-in_1.2s_ease-out]">
            No Studio Feras, cuidado, técnica e elegância se encontram para revelar a sua
            melhor versão. Cabelo, unhas e estética em um ambiente sofisticado.
          </p>
          <div className="flex flex-wrap gap-4 animate-[fade-in_1.4s_ease-out]">
            <a
              href="https://studioferas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-white px-8 py-4 rounded-full font-medium shadow-gold hover:scale-105 transition-transform"
            >
              Agendar online
            </a>
            <a
              href="tel:+555130223042"
              className="border border-gold/50 text-foreground px-8 py-4 rounded-full font-medium hover:bg-gold/10 transition-colors"
            >
              (51) 3022-3042
            </a>
          </div>
          <div className="flex items-center gap-2 mt-10 animate-[fade-in_1.6s_ease-out]">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4,4 · clientes felizes no Google</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gold/60 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
