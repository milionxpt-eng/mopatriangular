import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Funciona en todo tipo de suelos?",
    answer: "Sí, la mopa triangular funciona perfectamente en baldosas, parquet, tarima flotante, mármol, vinilo y cualquier superficie lisa. Los paños de microfibra son suaves y no rayan."
  },
  {
    question: "¿Cuánto mide el mango extensible?",
    answer: "El mango de acero inoxidable es extensible de 80cm a 130cm, adaptándose a tu altura para que puedas limpiar sin agacharte ni forzar la espalda."
  },
  {
    question: "¿Se pueden lavar los paños en lavadora?",
    answer: "¡Claro que sí! Los paños de microfibra se pueden lavar en lavadora hasta 300 veces sin perder su capacidad de absorción. Lavar a máximo 60°C."
  },
  {
    question: "¿Cuánto tarda el envío?",
    answer: "Enviamos desde nuestro almacén en España. Recibirás tu pedido en 24-48 horas laborables. El envío es completamente GRATIS en toda la península."
  },
  {
    question: "¿Puedo devolver el producto?",
    answer: "Tienes 7 días desde la recepción para devolverlo si no estás satisfecho. Sin preguntas. Te devolvemos el 100% del importe."
  },
  {
    question: "¿El cabezal triangular es resistente?",
    answer: "Sí, está fabricado con ABS reforzado de alta resistencia. La articulación 360° es de acero inoxidable, diseñada para durar años de uso intensivo."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Preguntas <span className="text-gradient-gold">frecuentes</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border-gradient-gold rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold hover:text-gold transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
