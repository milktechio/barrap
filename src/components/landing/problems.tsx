import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  return (
    <section id="problems" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Los Desafíos que Enfrentamos
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            En un mundo conectado, la verdadera colaboración sigue siendo un reto.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <Card key={problem.title} className="bg-card border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                    {problem.icon}
                  <CardTitle className="font-headline text-xl text-foreground">{problem.title}</CardTitle>
                </div>
                <CardDescription className="pt-4 text-base text-foreground/70">{problem.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
