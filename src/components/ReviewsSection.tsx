import { motion } from "framer-motion";

const reviews = [
  {
    name: "María García",
    location: "Madrid",
    stars: 5,
    text: "¡Increíble! Por fin puedo limpiar las esquinas del baño sin esfuerzo. La rotación 360° es una maravilla. La recomiendo a todas mis amigas.",
    date: "Hace 3 días"
  },
  {
    name: "Carlos Rodríguez",
    location: "Barcelona",
    stars: 5,
    text: "Compré dos, una para casa y otra para la oficina. La calidad es premium y los paños se lavan perfectamente en la lavadora.",
    date: "Hace 1 semana"
  },
  {
    name: "Ana Martínez",
    location: "Valencia",
    stars: 5,
    text: "Mi marido no me creía hasta que la probó. Ahora es él quien friega 😂 La forma triangular es genial para debajo del sofá.",
    date: "Hace 2 semanas"
  },
  {
    name: "Pedro López",
    location: "Sevilla",
    stars: 4,
    text: "Muy buena calidad. Llegó en 2 días. Lo único que mejoraría es incluir más paños de repuesto, pero en general estoy muy contento.",
    date: "Hace 3 semanas"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38,80%,55%,0.04)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-gradient-gold">clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            +2.500 hogares en España ya disfrutan de una limpieza sin esfuerzo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-card border-gradient-gold rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
              <div className="mb-3 text-gold">
                {"⭐".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
              </div>
              <p className="text-foreground/80 leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
