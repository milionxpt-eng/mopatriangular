import HeroSection from "@/components/HeroSection";
import UrgencySection from "@/components/UrgencySection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import ReviewsSection from "@/components/ReviewsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import StickyBuyBar from "@/components/StickyBuyBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Atención — Headline forte */}
      <HeroSection />
      {/* 2. Urgencia — Countdown + precio (el cliente lo ve pronto) */}
      <UrgencySection />
      {/* 3. Identificación del problema */}
      <ProblemSection />
      {/* 4. Presentación de la solución + Demostración (vídeo) + Beneficios */}
      <BenefitsSection />
      {/* 5. Prueba social */}
      <ReviewsSection />
      {/* 6. Garantía */}
      <GuaranteeSection />
      {/* 7. FAQ */}
      <FAQSection />
      {/* 8. CTA final */}
      <CTASection />
      <FooterSection />
      {/* Barra fija de compra en móvil */}
      <StickyBuyBar />
    </div>
  );
};

export default Index;
