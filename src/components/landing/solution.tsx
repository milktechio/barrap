import { Users, Share2, Wrench, Zap } from "lucide-react";
import Image from "next/image";

const solutions = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Apoyo Comunitario",
    description: "Conectamos a individuos que enfrentan desafíos similares en una plataforma compartida y solidaria.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: "Recursos y Colaboración",
    description: "Permitimos a los usuarios compartir información valiosa, consejos prácticos y recursos de manera eficiente.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "Resolución Entre Pares",
    description: "Empoderamos a las personas para que se ayuden mutuamente a encontrar soluciones reales a sus problemas.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Acción Colectiva",
    description: "Facilitamos la organización y la acción colectiva para abordar problemas comunes y generar un gran impacto.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 sm:py-32 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <p className="text-base font-semibold leading-7 text-primary font-headline">La Solución de Barrap</p>
          <h2 className="mt-2 font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Una Red Social para la Acción
          </h2>
          <p className="mt-6 text-base leading-8 text-foreground/80 sm:text-lg">
            Nuestra propuesta de valor es simple: liderazgo colectivo para conexiones significativas y un impacto real.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group">
            <Image
              src="/images/redsocial.webp"
              alt="Comunidad de Barrap colaborando"
              fill
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
            
          <div className="space-y-6 md:space-y-10">
            {solutions.map((solution) => (
              <div key={solution.title} className="flex items-start gap-6">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-card border border-border/20">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="font-headline text-lg font-semibold text-foreground">{solution.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
