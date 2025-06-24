import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const team = [
  {
    name: "Luis Enrique Vázquez de la Paz",
    role: "CEO & Fundador",
    description: "Doctor en Derecho, Profesor e Investigador Especialista en Derecho y Tecnología, Emprendedor, Papá, Esposo, Cryptobro, Plant 🌱 Fueled.",
    avatar: "LV",
    image: "/images/luis.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/mtroluisevazquez/",
  },
];

export function TestimonialsSection() {
  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Conoce a la mente detrás de Barrap.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          {team.map((member) => (
            <Card key={member.name} className="bg-card border-border/50 max-w-lg w-full rounded-2xl">
              <CardContent className="p-8 flex flex-col sm:flex-row items-center text-center sm:text-left gap-8">
                <div 
                  className="w-32 h-48 flex-shrink-0 relative" 
                  style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="font-bold text-2xl text-foreground">{member.name}</div>
                  <div className="font-semibold text-primary">{member.role}</div>
                  <p className="mt-4 text-sm text-foreground/70">
                    {member.description}
                  </p>
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
