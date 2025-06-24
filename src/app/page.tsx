import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero";
import { ProblemsSection } from "@/components/landing/problems";
import { SolutionSection } from "@/components/landing/solution";
import { ProductsSection } from "@/components/landing/products";
import { TestimonialsSection } from "@/components/landing/testimonials";
import { RoadmapSection } from "@/components/landing/roadmap";
import { Footer } from "@/components/landing/footer";
import { SwapSection } from "@/components/landing/swap-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <ProductsSection />
        <TestimonialsSection />
        <RoadmapSection />
        <SwapSection />
      </main>
      <Footer />
    </div>
  );
}
