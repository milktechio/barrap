import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero";
import { ProblemsSection } from "@/components/landing/problems";
import { SolutionSection } from "@/components/landing/solution";
import { ProductsSection } from "@/components/landing/products";
import { ImpactSection } from "@/components/landing/impact";
import { TestimonialsSection } from "@/components/landing/testimonials";
import { RoadmapSection } from "@/components/landing/roadmap";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <ProductsSection />
        <ImpactSection />
        <TestimonialsSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
}
