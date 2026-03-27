import { motion } from "framer-motion";

const problems = [
  {
    icon: "😤",
    title: "Las esquinas siempre quedan sucias",
    description: "Las fregonas redondas no llegan a las esquinas ni a los rincones."
  },
  {
    icon: "🪑",
    title: "Debajo de los muebles es imposible",
    description: "Tienes que agacharte o mover muebles pesados para limpiar debajo."
  },
  {
    icon: "💸",
    title: "Compras fregonas que se rompen rápido",
    description: "Materiales baratos que no duran ni un mes y tienes que reemplazar."
  },
  {
    icon: "😩",
    title: "Dolor de espalda al fregar",
    description: "Pasar horas fregando con fregonas que no giran ni se adaptan."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(38,80%,55%,0.05)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Te suena <span className="text-gradient-gold">familiar</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Si estás harto de estas situaciones, no estás solo. 
            Miles de personas en España tenían el mismo problema...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="border-gradient-gold bg-card rounded-xl p-6 hover:bg-secondary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-3xl mb-3 block">{problem.icon}</span>
              <h3 className="text-xl font-bold mb-2 font-display">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
