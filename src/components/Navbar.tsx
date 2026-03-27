import { CartDrawer } from "@/components/CartDrawer";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold text-gradient-gold">
          MopaTriangular360
        </a>
        <div className="flex items-center gap-4">
          <a href="#oferta" className="text-sm text-muted-foreground hover:text-gold transition-colors hidden sm:inline">
            Oferta
          </a>
          <CartDrawer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
