import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ana Pérez",
    role: "Usuaria de Saldeudas",
    quote: "Gracias a Barrap, encontré el apoyo que necesitaba para organizar mis finanzas. La comunidad es increíble y realmente se preocupan por ayudar.",
    avatar: "AP",
    image: "https://placehold.co/100x100",
    aiHint: "woman smiling",
  },
  {
    name: "Carlos Gómez",
    role: "Inversor en Real Estate",
    quote: "Invertir en propiedades parecía imposible para mí. Con los tokens de Barrap, soy dueño de una pequeña parte de un proyecto real y ya estoy viendo ganancias.",
    avatar: "CG",
    image: "https://placehold.co/100x100",
    aiHint: "man portrait",
  },
  {
    name: "Sofía Rodríguez",
    role: "Participante de Fitpago",
    quote: "¡Me pagan por hacer ejercicio! Fitpago es la motivación que me faltaba. He ganado premios y me siento mejor que nunca.",
    avatar: "SR",
    image: "https://placehold.co/100x100",
    aiHint: "woman jogging",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Lo que Nuestra Comunidad Dice
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Historias reales de personas reales que están cambiando sus vidas con Barrap.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-border/50">
              <CardContent className="pt-6">
                <blockquote className="text-lg text-foreground/90">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-foreground/70">{testimonial.role}</div>
                  </div>
                </figcaption>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
