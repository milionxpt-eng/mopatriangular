import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import ReviewsSection from "@/components/ReviewsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import UrgencySection from "@/components/UrgencySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Atención - Headline forte */}
      <HeroSection />
      {/* 2. Identificação do problema */}
      <ProblemSection />
      {/* 3. Apresentação da solução + 5. Demonstração (vídeo) + 6. Benefícios */}
      <BenefitsSection />
      {/* 4. Prova social */}
      <ReviewsSection />
      {/* 7. Garantia */}
      <GuaranteeSection />
      {/* FAQ */}
      <FAQSection />
      {/* 8. Urgência */}
      <UrgencySection />
      {/* CTA final */}
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
