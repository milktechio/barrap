import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-transparent py-20 sm:py-32">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div 
            className="max-w-xl text-center md:text-left animate-fade-in-up" 
            style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
          >
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Putting Your Money in Product Backed Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              We provide a platform to invest in real-world projects with the power of cryptocurrency, ensuring transparency and growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4 md:justify-start">
              <Button size="lg" className="rounded-full font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                Purchase a Token <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent font-bold transition-transform hover:scale-105 hover:bg-primary/10">
                Read Documents <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-float">
            <Image
              src="https://placehold.co/600x600.png"
              alt="A black rocket launching into space"
              width={550}
              height={550}
              data-ai-hint="rocket space"
              className="w-full max-w-md lg:max-w-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
