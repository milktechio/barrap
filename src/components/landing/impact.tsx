import { Users, GitBranch, Handshake } from "lucide-react";

const stats = [
  {
    name: "Primeros Usuarios",
    value: "200+",
    icon: <Users className="h-8 w-8 text-primary" />,
    description: "Recopilando información valiosa en nuestra fase beta.",
  },
  {
    name: "Iniciativas Desplegadas",
    value: "1",
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    description: "Comenzando con nuestra primera iniciativa segmentada con éxito.",
  },
  {
    name: "Socios Estratégicos",
    value: "Próximamente",
    icon: <Handshake className="h-8 w-8 text-primary" />,
    description: "Cerrando colaboraciones para acceso a más recursos y grupos.",
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Nuestro Progreso Hasta la Fecha
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Estamos construyendo una base sólida para un crecimiento sostenible y un impacto duradero.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col items-center justify-center text-center p-8 rounded-lg border border-border/50 bg-background">
              {stat.icon}
              <p className="mt-4 text-4xl font-bold tracking-tight text-foreground">{stat.value}</p>
              <p className="mt-1 text-lg font-semibold text-foreground/90 font-headline">{stat.name}</p>
              <p className="mt-2 text-base text-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
