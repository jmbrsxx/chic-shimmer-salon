import nails from "@/assets/service-nails.jpg";
import hair from "@/assets/service-hair.jpg";
import spa from "@/assets/service-spa.jpg";

const services = [
  {
    img: hair,
    title: "Cabelo",
    desc: "Cortes, coloração, mechas, escovas e tratamentos personalizados para cada fio.",
  },
  {
    img: nails,
    title: "Manicure & Pedicure",
    desc: "Cuidado completo com unhas, esmaltação tradicional, em gel e nail art exclusiva.",
  },
  {
    img: spa,
    title: "Estética & Spa",
    desc: "Limpeza de pele, designer de sobrancelhas, massagens e rituais de bem-estar.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark mb-4">Nossos serviços</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Cuidado completo, do <span className="text-gradient-gold">topo aos pés</span>.
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-gold transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-background">
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-background/80 leading-relaxed">{s.desc}</p>
                <div className="gold-divider w-12 mt-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
