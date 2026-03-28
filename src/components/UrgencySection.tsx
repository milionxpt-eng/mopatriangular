import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SHOPIFY_URL = "https://800edm-h1.myshopify.com/products/mopa-fregona-triangular-de-limpieza-ajustable-giratoria-de-360";

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 0, seconds: 0 });

  useEffect(() => {
    const stored = sessionStorage.getItem("urgency_end");
    let endTime: number;
    if (stored) {
      endTime = parseInt(stored);
    } else {
      endTime = Date.now() + 2 * 60 * 60 * 1000;
      sessionStorage.setItem("urgency_end", endTime.toString());
    }

    const tick = () => {
      const diff = Math.max(0, endTime - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ hours: h, minutes: m, seconds: s });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section className="py-16 sm:py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0,84%,60%,0.06)_0%,_transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/20 text-destructive text-sm font-bold mb-6 uppercase tracking-wider animate-pulse">
            ⚠️ Stock limitado — Se agotan rápido
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Esta oferta termina{" "}
            <span className="text-gradient-gold">pronto</span>
          </h2>

          <div className="flex justify-center gap-3 sm:gap-4 mb-8">
            {[
              { value: pad(timeLeft.hours), label: "Horas" },
              { value: pad(timeLeft.minutes), label: "Min" },
              { value: pad(timeLeft.seconds), label: "Seg" },
            ].map((unit, i) => (
              <div key={i} className="bg-card border-gradient-gold rounded-xl p-3 sm:p-5 min-w-[70px] sm:min-w-[90px]">
                <span className="text-2xl sm:text-4xl font-black text-gradient-gold block">{unit.value}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{unit.label}</span>
              </div>
            ))}
          </div>

          <div className="bg-card border-gradient-gold rounded-xl p-5 sm:p-8 mb-8 max-w-xl mx-auto">
            <div className="mb-4">
              <span className="text-muted-foreground line-through text-lg sm:text-xl">49,99 €</span>
              <span className="text-3xl sm:text-5xl font-black text-gradient-gold ml-3 sm:ml-4">29,99 €</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Ahorra <strong className="text-gold">20 €</strong> + envío gratis. Solo pagas al recibir.
            </p>
            <motion.a
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-gold text-primary-foreground font-bold py-4 sm:py-5 rounded-lg text-base sm:text-xl animate-pulse-gold"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              💳 ¡LA QUIERO AHORA! — PAGO CONTRA ENTREGA →
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-muted-foreground text-xs sm:text-sm">
            <span>📦 Envío 24-48h GRATIS</span>
            <span>🔄 Devolución 30 días</span>
            <span>🇪🇸 Desde España</span>
            <span>💳 Pago contra entrega</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
