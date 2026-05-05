import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Feras — Salão de Beleza em Porto Alegre" },
      {
        name: "description",
        content:
          "Studio Feras: salão de beleza em Porto Alegre com cabelo, unhas e estética. Atendimento sofisticado no bairro Independência.",
      },
      { property: "og:title", content: "Studio Feras — Salão de Beleza" },
      {
        property: "og:description",
        content: "Beleza que brilha em cada detalhe. Agende online no Studio Feras.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
