 
 
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { DeveloperSection } from "./DeveloperSection";
import { BusinessSection } from "./BusinessSection";
import { DocsSection } from "./DocsSection";
import { FinalCta } from "./FinalCta";

export function LandingPage() {
    return (
        <main id="top" className="min-h-screen relative overflow-x-clip overflow-y-hidden bg-[#F3EEE4] text-[#19150F]">
            <Header />

            <HeroSection />
            
            <FeaturesSection />
            <DeveloperSection />
            <BusinessSection />
            <DocsSection />

            <FinalCta />
        </main>
    );
}
