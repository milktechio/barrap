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
            <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              Donde la Comunidad se Une para la Acción
            </h1>
            <p className="mt-6 text-base leading-8 text-foreground/80 sm:text-lg">
              Barrap es una red social que te conecta con personas y recursos para superar desafíos comunes. Juntos, transformamos la colaboración en un impacto real y medible.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:justify-start">
              <Button size="lg" className="rounded-full font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105 w-full sm:w-auto text-xs sm:text-sm" asChild>
                <a href="https://hub.barra.mx" target="_blank" rel="noopener noreferrer">
                  Únete a la Comunidad <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent font-bold transition-transform hover:scale-105 hover:bg-primary/10 w-full sm:w-auto text-xs sm:text-sm" asChild>
                <a href="#products">
                  Explora Iniciativas <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-float">
            <Image
              src="/images/b_fondo_relleno.webp"
              alt="Ilustración de una red de personas conectadas"
              width={550}
              height={550}
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
