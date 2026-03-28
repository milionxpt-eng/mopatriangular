import { motion } from "framer-motion";

const SHOPIFY_URL = "https://800edm-h1.myshopify.com/products/mopa-fregona-triangular-de-limpieza-ajustable-giratoria-de-360";

const benefits = [
  {
    icon: "🔺",
    title: "Diseño Triangular Único",
    description: "Llega a cada esquina y rincón sin esfuerzo. La forma triangular se adapta perfectamente a los ángulos de tu hogar."
  },
  {
    icon: "🔄",
    title: "Rotación 360° Completa",
    description: "Gira en todas las direcciones. Limpia debajo de muebles, camas y sofás sin agacharte ni mover nada."
  },
  {
    icon: "🧹",
    title: "4 en 1: Suelos, Ventanas, Techos y Muebles",
    description: "Una sola herramienta para todas las superficies. Sustituye a 4 productos diferentes. Ahorra espacio y dinero."
  },
  {
    icon: "♻️",
    title: "Paños Lavables y Reutilizables",
    description: "Incluye paños de microfibra premium lavables hasta 300 veces. Ahorra dinero y cuida el medio ambiente."
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-16 sm:py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            La <span className="text-gradient-gold">solución definitiva</span> ya está aquí
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Diseñada por expertos en limpieza profesional para hogares que merecen lo mejor.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-5 sm:p-6 border-gradient-gold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{benefit.icon}</span>
                <h3 className="text-base sm:text-lg font-bold mb-2 font-display">{benefit.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden glow-gold"
          >
            <div className="aspect-[9/16] sm:aspect-video max-w-lg mx-auto">
              <video
                src="/videos/mopa-vsl.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover rounded-2xl"
                poster=""
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={SHOPIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-gold text-primary-foreground font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-lg text-base sm:text-xl animate-pulse-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            💳 ¡QUIERO LA MÍA! — PAGO CONTRA ENTREGA →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
