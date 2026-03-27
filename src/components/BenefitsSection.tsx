import { motion } from "framer-motion";
import antesDepois from "@/assets/antes-depois.jpg";

const benefits = [
  {
    icon: "🔺",
    title: "Diseño Triangular Único",
    description: "Llega a cada esquina y rincón sin esfuerzo. La forma triangular se adapta perfectamente a los ángulos de tu hogar."
  },
  {
    icon: "🔄",
    title: "Rotación 360° Completa",
    description: "Gira en todas las direcciones. Limpia debajo de muebles, camas y sofás sin agacharte."
  },
  {
    icon: "🧹",
    title: "4 en 1: Suelos, Ventanas, Techos y Muebles",
    description: "Una sola herramienta para todas las superficies. Limpia suelos, cristales, techos y debajo de muebles."
  },
  {
    icon: "♻️",
    title: "Paños Lavables y Reutilizables",
    description: "Incluye paños de microfibra premium lavables. Ahorra dinero y cuida el medio ambiente."
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            La <span className="text-gradient-gold">solución definitiva</span> ya está aquí
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diseñada por expertos en limpieza profesional para hogares que merecen lo mejor.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border-gradient-gold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-lg font-bold mb-2 font-display">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden glow-gold"
          >
            <img
              src={antesDepois}
              alt="Antes y después de usar la mopa triangular"
              width={1024}
              height={576}
              loading="lazy"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
