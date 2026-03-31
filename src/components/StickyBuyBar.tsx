import { motion } from "framer-motion";

const SHOPIFY_URL = "https://800edm-h1.myshopify.com/products/mopa-fregona-triangular-de-limpieza-ajustable-giratoria-de-360";

const StickyBuyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-shrink-0">
          <span className="text-muted-foreground line-through text-xs">49,99 €</span>
          <span className="text-lg font-black text-gradient-gold ml-1">29,99 €</span>
        </div>
        <motion.a
          href={SHOPIFY_URL}
          className="flex-1 bg-gradient-gold text-primary-foreground font-bold py-3 rounded-lg text-sm text-center animate-pulse-gold"
          whileTap={{ scale: 0.97 }}
        >
          💳 COMPRAR — PAGO CONTRA ENTREGA
        </motion.a>
      </div>
    </div>
  );
};

export default StickyBuyBar;
