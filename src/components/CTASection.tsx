import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38,80%,55%,0.08)_0%,_transparent_50%)]" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Tu hogar merece una{" "}
            <span className="text-gradient-gold">limpieza perfecta</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            No dejes que las esquinas sucias arruinen tu hogar. 
            Únete a +2.500 hogares que ya disfrutan de la mopa triangular 360°.
          </p>
          <motion.a
            href="#oferta"
            className="inline-block bg-gradient-gold text-primary-foreground font-bold px-12 py-5 rounded-lg text-xl animate-pulse-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            ¡LA QUIERO AHORA! — 29,99€ →
          </motion.a>
          <p className="text-sm text-muted-foreground mt-4">
            Envío gratis · Devolución 30 días · Pago seguro
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
