import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Luis Enrique Vázquez de la Paz",
    role: "CEO & Fundador",
    description: "Doctor en Derecho, Profesor e Investigador Especialista en Derecho y Tecnología, Emprendedor, Papá, Esposo, Cryptobro, Plant 🌱 Fueled.",
    avatar: "LV",
    image: "https://placehold.co/128x128",
    aiHint: "man professional portrait",
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
            <Card key={member.name} className="bg-card border-border/50 max-w-sm w-full">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.aiHint} />
                  <AvatarFallback>{member.avatar}</AvatarFallback>
                </Avatar>
                <div className="font-bold text-xl text-foreground">{member.name}</div>
                <div className="font-semibold text-primary">{member.role}</div>
                <p className="mt-4 text-foreground/70">
                  {member.description}
                </p>
                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Button variant="outline" className="mt-4 rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}