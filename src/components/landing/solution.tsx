import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Share2, Wrench, Zap } from "lucide-react";

const solutions = [
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Apoyo Comunitario",
    description: "Conectamos a individuos que enfrentan desafíos similares en una plataforma compartida y solidaria.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-accent" />,
    title: "Recursos y Colaboración",
    description: "Permitimos a los usuarios compartir información valiosa, consejos prácticos y recursos de manera eficiente.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-accent" />,
    title: "Resolución Entre Pares",
    description: "Empoderamos a las personas para que se ayuden mutuamente a encontrar soluciones reales a sus problemas.",
  },
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: "Acción Colectiva",
    description: "Facilitamos la organización y la acción colectiva para abordar problemas comunes y generar un gran impacto.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold leading-7 text-accent font-headline">La Solución de Barrap</p>
          <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Una Red Social para la Acción
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Nuestra propuesta de valor es simple: liderazgo colectivo para conexiones significativas y un impacto real.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div key={solution.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                {solution.icon}
              </div>
              <h3 className="mt-6 font-headline text-xl font-semibold leading-7 text-foreground">{solution.title}</h3>
              <p className="mt-2 leading-7 text-foreground/70">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
