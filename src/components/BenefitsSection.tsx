import { motion } from "framer-motion";
import { Triangle, RotateCw, Sparkles, Recycle } from "lucide-react";

const SHOPIFY_URL = "https://800edm-h1.myshopify.com/products/mopa-fregona-triangular-de-limpieza-ajustable-giratoria-de-360";

const benefits = [
  {
    icon: Triangle,
    title: "Diseño Triangular Único",
    description: "Llega a cada esquina y rincón sin esfuerzo. La forma triangular se adapta perfectamente a los ángulos de tu hogar."
  },
  {
    icon: RotateCw,
    title: "Rotación 360° Completa",
    description: "Gira en todas las direcciones. Limpia debajo de muebles, camas y sofás sin agacharte ni mover nada."
  },
  {
    icon: Sparkles,
    title: "4 en 1: Suelos, Ventanas, Techos y Muebles",
    description: "Una sola herramienta para todas las superficies. Sustituye a 4 productos diferentes. Ahorra espacio y dinero."
  },
  {
    icon: Recycle,
    title: "Paños Lavables y Reutilizables",
    description: "Incluye paños de microfibra premium lavables hasta 300 veces. Ahorra dinero y cuida el medio ambiente."
  }
];

const salesCopy = `Mira… sé exactamente lo que te pasa.

Empiezas a limpiar y, al rato, ya te duele la espalda.
Te agachas, te estiras, te subes a una silla… y aun así, los rincones siguen ahí, esperando.

Y lo peor no es la suciedad.
Es el cansancio que te llevas después.

Por eso existe MyNexa 360°.

Su forma triangular llega justo donde tú no quieres volver a forzarte.
Gira 360° para que no tengas que torcer el cuerpo.
Y entra debajo de los muebles sin que tengas que arrodillarte.

Limpias más rápido.
Sin dolor.
Sin esfuerzo absurdo.

Porque limpiar tu casa no debería costarte el cuerpo.`;

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-16 sm:py-20 relative">
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

        {/* VSL Video + Sales Copy — mesma secção, copy à esquerda, vídeo vertical à direita */}
        <div className="glass rounded-2xl glow-gold p-6 sm:p-8 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="w-[220px] sm:w-[260px] md:w-[280px] aspect-[9/16] rounded-2xl overflow-hidden border border-border/30">
                <video
                  src="/videos/mopa-vsl.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-1 flex-1 min-w-0"
            >
              {salesCopy.split('\n').map((line, i) => (
                <p key={i} className={`text-sm sm:text-base leading-relaxed ${
                  line === '' ? 'h-3' :
                  line.startsWith('Por eso existe') ? 'text-gold font-bold text-base sm:text-lg' :
                  line.startsWith('Limpias más') || line.startsWith('Sin dolor') || line.startsWith('Sin esfuerzo') ? 'text-foreground font-semibold' :
                  line.startsWith('Porque limpiar') ? 'text-gold font-bold italic text-base sm:text-lg pt-2' :
                  'text-muted-foreground'
                }`}>
                  {line || '\u00A0'}
                </p>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-5 sm:p-6 border-gradient-gold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 sm:mb-4">
                <benefit.icon className="w-6 h-6 text-gold" strokeWidth={2} />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 font-display">{benefit.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={SHOPIFY_URL}
            className="inline-block bg-gradient-gold text-primary-foreground font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-lg text-base sm:text-xl animate-pulse-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            💳 PAGO CONTRA ENTREGA →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
