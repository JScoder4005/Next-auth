import { FeaturesSection } from "@/features/landing/components/features-section";
import HeroSection from "@/features/landing/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <HeroSection />
        <FeaturesSection />
      </div>
    </div>
  );
}
