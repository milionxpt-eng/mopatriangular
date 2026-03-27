import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import ReviewsSection from "@/components/ReviewsSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <ReviewsSection />
      <OfferSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
