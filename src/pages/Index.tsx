import GlassHeader from "@/components/GlassHeader";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import ReviewsSection from "@/components/ReviewsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GlassHeader />
      <div className="pt-14 sm:pt-16">
        <HeroSection />
        <ProblemSection />
        <BenefitsSection />
        <ReviewsSection />
        <GuaranteeSection />
        <FAQSection />
        <CTASection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
