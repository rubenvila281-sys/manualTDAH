import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import BenefitsSection from "@/components/BenefitsSection";
import InsideBookSection from "@/components/InsideBookSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import AuthorSection from "@/components/AuthorSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FomoNotification from "@/components/FomoNotification";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F3EFE6]">
      <TopBar />
      <main className="flex-grow">
        <FomoNotification />
        <HeroSection />
        <PainPointsSection />
        <BenefitsSection />
        <InsideBookSection />
        <TestimonialsSection />
        <BonusSection />
        <AuthorSection />
        <PricingSection />
        <FAQSection />
      </main>
      <footer className="bg-[#1F2937] text-gray-400 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} El Manual del Usuario TDAH. Todos los derechos reservados.</p>
          <p className="mt-2">Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio no está respaldado por Facebook de ninguna manera.</p>
        </div>
      </footer>
    </div>
  );
}
