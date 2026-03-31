import { motion } from "framer-motion";
import mopaHero from "@/assets/mopa-4en1.png";

const SHOPIFY_URL = "https://800edm-h1.myshopify.com/products/mopa-fregona-triangular-de-limpieza-ajustable-giratoria-de-360";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(38,80%,55%,0.08)_0%,_transparent_60%)]" />


      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/20 text-destructive text-sm font-bold mb-4 tracking-wider uppercase animate-pulse">
            ⚡ Oferta limitada — ¡Solo hoy!
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6">
            ¿Harto de que tu fregona{" "}
            <span className="text-gradient-gold">NO llegue a las esquinas</span>?
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl leading-relaxed">
            Descubre la mopa triangular con rotación 360° que limpia <strong className="text-foreground">suelos, ventanas, techos y debajo de los muebles</strong> sin agacharte. 
            <strong className="text-gold"> Paga solo cuando la recibas en tu casa.</strong>
          </p>
          <motion.a
            href={SHOPIFY_URL}
            className="block sm:inline-block bg-gradient-gold text-primary-foreground font-bold px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg text-center animate-pulse-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            💳 PAGO CONTRA ENTREGA →
          </motion.a>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-1">⭐⭐⭐⭐⭐ <span className="text-foreground font-semibold">4,9/5</span></span>
            <span>+2.500 vendidas</span>
            <span>🔒 Pago contra entrega</span>
            <span>🇪🇸 Envío gratis</span>
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
            alt="Mopa Triangular 360° — 4 en 1: Suelos, Ventanas, Techos, Muebles"
            width={800}
            height={800}
            className="relative z-10 max-w-[280px] sm:max-w-[350px] md:max-w-md lg:max-w-lg animate-float drop-shadow-2xl rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
