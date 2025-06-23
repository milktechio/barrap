import { Rocket, Scaling, Wand2, Handshake } from "lucide-react";

const roadmapItems = [
  {
    icon: <Rocket className="h-6 w-6 text-accent" />,
    title: "Lanzamiento Completo",
    description: "Despliegue de nuestras 4 iniciativas segmentadas para ofrecer una experiencia completa a todos los usuarios.",
  },
  {
    icon: <Scaling className="h-6 w-6 text-accent" />,
    title: "Crecimiento y Expansión",
    description: "Aumento de la base de usuarios y expansión geográfica con un enfoque en objetivos específicos y comunidades clave.",
  },
  {
    icon: <Wand2 className="h-6 w-6 text-accent" />,
    title: "Mejora de Características",
    description: "Mejora continua de la experiencia del usuario en la aplicación, escuchando el feedback de la comunidad.",
  },
  {
    icon: <Handshake className="h-6 w-6 text-accent" />,
    title: "Iniciativas de Impacto Social",
    description: "Asociación con al menos 5 organizaciones sin fines de lucro y ONGs para amplificar nuestro impacto positivo.",
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Nuestra Hoja de Ruta
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Nuestros planes para el futuro y la expansión de la red Barrap.
          </p>
        </div>
        <div className="mt-16 flow-root">
          <div className="-m-4 flex flex-wrap justify-center">
            {roadmapItems.map((item, index) => (
              <div key={item.title} className="p-4 w-full md:w-1/2 lg:w-1/4">
                <div className="relative">
                  <div className="relative flex flex-col items-center text-center p-6 bg-background rounded-lg border border-border/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground font-headline">{item.title}</h3>
                    <p className="mt-2 text-foreground/70">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
