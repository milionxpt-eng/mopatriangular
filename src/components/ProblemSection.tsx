import { motion } from "framer-motion";

const problems = [
  {
    icon: "😤",
    title: "Las esquinas siempre quedan sucias",
    description: "Tu fregona redonda NO llega a los rincones. La suciedad se acumula y tu casa nunca está del todo limpia."
  },
  {
    icon: "🪑",
    title: "Debajo de los muebles es imposible",
    description: "¿Mover sofás y camas cada vez que friegas? Es agotador, y si no lo haces... la suciedad se queda ahí."
  },
  {
    icon: "💸",
    title: "Gastas dinero en fregonas que se rompen",
    description: "Compras fregonas baratas que duran semanas. Recambios caros. Un ciclo interminable de gastar y tirar."
  },
  {
    icon: "😩",
    title: "Dolor de espalda después de fregar",
    description: "Horas agachada, de rodillas, forzando la espalda... Limpiar tu casa no debería doler."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(38,80%,55%,0.05)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Te suena <span className="text-gradient-gold">familiar</span>?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Si estás harto de estas situaciones, no estás solo. 
            Miles de personas en España tenían el mismo problema... <strong className="text-foreground">hasta ahora.</strong>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="border-gradient-gold bg-card rounded-xl p-5 sm:p-6 hover:bg-secondary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-3xl mb-3 block">{problem.icon}</span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 font-display">{problem.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
