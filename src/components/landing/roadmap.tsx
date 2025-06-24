import { Rocket, Scaling, Wand2, Handshake, Users, GitBranch, CheckCircle2, CircleDot, Link } from "lucide-react";
import { SolanaLogo } from "@/components/icons";

const doneItems = [
  {
    icon: SolanaLogo,
    title: "Integración con Solana",
    description: "Conexión nativa con la red de Solana para transacciones rápidas y seguras.",
  },
  {
    icon: Link,
    title: "Integración con Binance",
    description: "Acceso a liquidez y servicios a través de la red de Binance.",
  },
  {
    icon: Users,
    title: "200+ Primeros Usuarios",
    description: "Recopilando información valiosa en nuestra fase beta.",
  },
  {
    icon: GitBranch,
    title: "1 Iniciativa Desplegada",
    description: "Comenzando con nuestra primera iniciativa segmentada con éxito.",
  },
];

const pendingItems = [
  {
    icon: Handshake,
    title: "Socios Estratégicos",
    description: "Cerrando colaboraciones para acceso a más recursos y grupos.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento Completo",
    description: "Despliegue de nuestras 4 iniciativas segmentadas para una experiencia completa.",
  },
  {
    icon: Scaling,
    title: "Crecimiento y Expansión",
    description: "Aumento de la base de usuarios y expansión geográfica.",
  },
  {
    icon: Wand2,
    title: "Mejora de Características",
    description: "Mejora continua de la app escuchando a la comunidad.",
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 sm:py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Nuestro Progreso y Hoja de Ruta
          </h2>
          <p className="mt-4 text-base text-foreground/80 sm:text-lg">
            Un vistazo a lo que hemos logrado y hacia dónde nos dirigimos.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-4 hidden h-full w-px -translate-x-1/2 bg-border/50 lg:block" aria-hidden="true"></div>

          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16">
            
            <div className="flex flex-col items-center lg:items-end gap-y-12">
                <div className="text-center lg:text-right lg:pr-8">
                    <h3 className="font-headline text-xl font-bold text-foreground">Logrado</h3>
                </div>
                <div className="w-full max-w-md space-y-8">
                {doneItems.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 translate-x-1/2 lg:flex items-center justify-center">
                             <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                                <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                            </div>
                        </div>
                        <div className="p-6 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                <item.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="text-base font-semibold text-foreground font-headline">{item.title}</h4>
                            </div>
                            <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-y-12">
                <div className="text-center lg:text-left lg:pl-8">
                    <h3 className="font-headline text-xl font-bold text-foreground">Pendiente</h3>
                </div>
                <div className="w-full max-w-md space-y-8">
                {pendingItems.map((item, index) => (
                    <div key={index} className="relative">
                         <div className="absolute -left-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 -translate-x-1/2 lg:flex items-center justify-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/50 border-2 border-accent">
                                <CircleDot className="h-5 w-5 text-accent" />
                            </div>
                        </div>
                         <div className="p-6 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                                    <item.icon className="h-6 w-6 text-accent" />
                                </div>
                                <h4 className="text-base font-semibold text-foreground font-headline">{item.title}</h4>
                            </div>
                            <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
