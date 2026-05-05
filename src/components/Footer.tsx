export function Footer() {
  return (
    <footer className="border-t border-gold/20 py-10 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl shimmer-text font-bold">Studio Feras</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Studio Feras · Porto Alegre · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
