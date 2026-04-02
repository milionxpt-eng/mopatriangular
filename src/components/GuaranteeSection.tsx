import { motion } from "framer-motion";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";

const SHOPIFY_URL = "https://800edm-h1.myshopify.com/products/mopa-fregona-triangular-de-limpieza-ajustable-giratoria-de-360";

const guarantees = [
  { 
    icon: Truck, 
    title: "Envío GRATIS en 24-48h", 
    desc: "Recíbela en tu casa sin pagar ni un céntimo de envío. En toda España peninsular." 
  },
  { 
    icon: ShieldCheck, 
    title: "Pago seguro contra entrega", 
    desc: "No pagas hasta que la tengas en tus manos. Sin riesgo, sin sorpresas." 
  },
  { 
    icon: RotateCcw, 
    title: "7 días de devolución", 
    desc: "Si no te convence, te devolvemos el 100% del importe. Sin preguntas." 
  },
];

const GuaranteeSection = () => {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38,80%,55%,0.06)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-6">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-gold" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Garantía <span className="text-gradient-gold">100% sin riesgo</span>
          </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Estamos tan seguros de que te va a encantar que te damos <strong className="text-foreground">7 días para probarla</strong>. 
            Si no te convence, te devolvemos el dinero. Sin preguntas, sin excusas, sin letra pequeña.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {guarantees.map((item, i) => (
              <motion.div
                key={i}
                className="bg-card border-gradient-gold rounded-xl p-5 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <item.icon className="w-6 h-6 text-gold" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1 font-display">{item.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

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

export default GuaranteeSection;
