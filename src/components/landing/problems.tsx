"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { XCircle, ShieldOff, Coins, Clock, Users, Globe2 } from "lucide-react";

const problems = [
  {
    icon: <XCircle className="h-8 w-8 text-primary" />,
    title: "Esfuerzos Infructuosos",
    description: "Los esfuerzos colectivos en redes sociales tradicionales a menudo no logran resultados concretos.",
  },
  {
    icon: <ShieldOff className="h-8 w-8 text-primary" />,
    title: "Falta de Liderazgo Confiable",
    description: "La dificultad de encontrar y acceder a un liderazgo de confianza que guíe las iniciativas.",
  },
  {
    icon: <Coins className="h-8 w-8 text-primary" />,
    title: "Recursos Limitados",
    description: "Las comunidades a menudo carecen de los recursos necesarios para resolver problemas comunes.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Proceso Abrumador",
    description: "Encontrar soluciones consume tiempo y requiere una coordinación que es difícil de lograr.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Desconexión Humana",
    description: "Dificultad para conectar con personas que realmente entienden tu situación y desafíos.",
  },
  {
    icon: <Globe2 className="h-8 w-8 text-primary" />,
    title: "Mundo Hostil",
    description: "La necesidad de navegar un mundo cada vez más complejo y, a menudo, adverso.",
  },
];

export function ProblemsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="problems" className="py-20 sm:py-32 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 items-center">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Los Desafíos que Enfrentamos
              </h2>
              <p className="mt-6 text-lg text-foreground/80">
                En un mundo conectado, la verdadera colaboración sigue siendo un reto.
              </p>
            </div>
            <div className="lg:col-span-8">
              <CarouselContent className="-ml-4">
                {problems.map((problem) => (
                  <CarouselItem key={problem.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full bg-card/50 border border-border/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group backdrop-blur-sm">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(226,40,254,0.15),transparent_70%)]"></div>
                        <CardHeader className="relative z-10 h-full">
                          <div className="flex items-center gap-4">
                              {problem.icon}
                            <CardTitle className="font-headline text-xl text-foreground">{problem.title}</CardTitle>
                          </div>
                          <CardDescription className="pt-4 text-base text-foreground/70">{problem.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <div className="lg:col-start-5 lg:col-span-8 flex items-center justify-center lg:justify-start gap-x-2">
                <CarouselPrevious className="static" />
                <CarouselNext className="static" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
