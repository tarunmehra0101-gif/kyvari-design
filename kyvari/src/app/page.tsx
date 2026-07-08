import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { LogoMarquee } from "@/components/marketing/logo-marquee";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Features } from "@/components/marketing/features";
import { Testimonials } from "@/components/marketing/testimonials";
import { Pricing } from "@/components/marketing/pricing";
import { ClosingCta, Footer } from "@/components/marketing/cta-footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
