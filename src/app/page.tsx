import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero";
import { Footer } from "@/components/landing/footer";
import dynamic from 'next/dynamic';

const ProblemsSection = dynamic(() => import('@/components/landing/problems').then(mod => mod.ProblemsSection));
const SolutionSection = dynamic(() => import('@/components/landing/solution').then(mod => mod.SolutionSection));
const ProductsSection = dynamic(() => import('@/components/landing/products').then(mod => mod.ProductsSection));
const TestimonialsSection = dynamic(() => import('@/components/landing/testimonials').then(mod => mod.TestimonialsSection));
const RoadmapSection = dynamic(() => import('@/components/landing/roadmap').then(mod => mod.RoadmapSection));
const SwapSection = dynamic(() => import('@/components/landing/swap-section').then(mod => mod.SwapSection));

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
