import { motion } from "framer-motion";

const SHOPIFY_URL = "https://800edm-h1.myshopify.com/products/mopa-fregona-triangular-de-limpieza-ajustable-giratoria-de-360";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38,80%,55%,0.08)_0%,_transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Tu hogar merece una{" "}
            <span className="text-gradient-gold">limpieza perfecta</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto">
            No dejes que las esquinas sucias arruinen tu hogar. 
            Únete a +2.500 hogares que ya disfrutan de la mopa triangular 360°.
          </p>
          <motion.a
            href={SHOPIFY_URL}
            className="inline-block bg-gradient-gold text-primary-foreground font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-lg text-base sm:text-xl animate-pulse-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            💳 PAGO CONTRA ENTREGA →
          </motion.a>
          <p className="text-xs sm:text-sm text-muted-foreground mt-4">
            Envío gratis · Pagas al recibir · Devolución 7 días
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
