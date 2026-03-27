import { motion } from "framer-motion";
import mopaHero from "@/assets/mopa-real.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(38,80%,55%,0.08)_0%,_transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-gold text-sm font-medium mb-6 tracking-wider uppercase">
            🇪🇸 Envío gratis en toda España
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            La fregona que{" "}
            <span className="text-gradient-gold">llega donde</span>{" "}
            las demás{" "}
            <span className="text-gradient-gold">no pueden</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            Diseño triangular único + rotación 360° para limpiar suelos, ventanas, 
            techos y muebles. <strong className="text-foreground">4 en 1. Sin esfuerzo.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#oferta"
              className="bg-gradient-gold text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg text-center animate-pulse-gold hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              ¡QUIERO LA MÍA! →
            </motion.a>
            <a
              href="#beneficios"
              className="border border-border text-foreground font-medium px-8 py-4 rounded-lg text-lg text-center hover:bg-secondary transition-colors"
            >
              Saber más
            </a>
          </div>
          <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">⭐⭐⭐⭐⭐ <span className="text-foreground font-semibold">4.9/5</span></span>
            <span>+2.500 vendidas</span>
            <span>🔒 Pago seguro</span>
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,_hsl(38,80%,55%,0.15)_0%,_transparent_70%)]" />
          <img
            src={mopaHero}
            alt="Mopa Triangular 360° Multifuncional"
            width={800}
            height={800}
            className="relative z-10 max-w-md lg:max-w-lg animate-float drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
