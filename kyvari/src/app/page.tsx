import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Features } from "@/components/marketing/features";
import { Destinations } from "@/components/marketing/destinations";
import { Testimonials } from "@/components/marketing/testimonials";
import { Pricing } from "@/components/marketing/pricing";
import { ClosingCta, Footer } from "@/components/marketing/cta-footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Destinations />
        <Testimonials />
        <Pricing />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
