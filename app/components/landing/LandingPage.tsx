 
 
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

            <div className="relative">

            <HeroSection />
                <svg
                    className="hero-curve"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,55 C320,105 1120,105 1440,55 L1440,120 L0,120 Z"
                        fill="#ffffff"
                    />
                </svg>
        </div>
            

            <FeaturesSection />
            <DeveloperSection />
            <BusinessSection />
            <DocsSection />

            <FinalCta />
        </main>
    );
}
