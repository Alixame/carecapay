import { Header } from "./Header";
import { Hero } from "./Hero";
import {
    FaqSection,
    FinalCta,
    Footer,
    IntegrationsSection,
    PricingBand,
    ProductsSection,
} from "./sections";

export function LandingPage() {
    return (
        <main className="min-h-screen overflow-x-clip bg-[#F3EEE4] text-[#19150F]">
            <Header />
            <Hero />
            <ProductsSection />
            <PricingBand />
            <IntegrationsSection />
            <FaqSection />
            <FinalCta />
            <Footer />
        </main>
    );
}
