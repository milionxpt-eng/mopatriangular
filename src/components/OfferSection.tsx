import { motion } from "framer-motion";
import mopaHero from "@/assets/mopa-real.jpg";

const OfferSection = () => {
  return (
    <section id="oferta" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38,80%,55%,0.1)_0%,_transparent_50%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/20 text-destructive text-sm font-bold mb-6 uppercase tracking-wider">
            ⚡ Oferta limitada — Solo hoy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8">
            Consigue tu Mopa Triangular 360°{" "}
            <span className="text-gradient-gold">al mejor precio</span>
          </h2>

          <div className="bg-card border-gradient-gold rounded-2xl p-8 md:p-12 glow-gold">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={mopaHero}
                  alt="Mopa Triangular 360°"
                  width={400}
                  height={400}
                  loading="lazy"
                  className="mx-auto max-w-[280px]"
                />
              </div>
              <div className="text-left">
                <h3 className="font-display text-2xl font-bold mb-4">El pack completo incluye:</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "1x Mopa Triangular 360° Premium",
                    "2x Paños de microfibra lavables",
                    "1x Mango extensible de acero inoxidable",
                    "Guía de limpieza profesional",
                    "Envío GRATIS en toda España"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <span className="text-gold text-lg">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <span className="text-muted-foreground line-through text-xl">49,99 €</span>
                  <span className="text-4xl font-black text-gradient-gold ml-4">29,99 €</span>
                </div>

                <motion.a
                  href="#"
                  className="block w-full bg-gradient-gold text-primary-foreground font-bold py-4 rounded-lg text-lg text-center animate-pulse-gold"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  💳 COMPRAR AHORA — PAGO CONTRA ENTREGA
                </motion.a>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  🔒 Pagas al recibir en tu casa · Devolución en 30 días
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-muted-foreground text-sm">
            <span>📦 Envío en 24-48 h</span>
            <span>🔄 Devolución fácil 30 días</span>
            <span>🇪🇸 Envío desde España</span>
            <span>💳 Pago contra entrega</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
