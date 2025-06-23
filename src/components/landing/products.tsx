import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Bitcoin, Landmark, TrendingUp, Banknote, HeartHandshake, Award } from "lucide-react";

const products = [
  {
    icon: <Bitcoin className="h-10 w-10" />,
    title: "Mina 3 BTC",
    description: "Únete a nuestro pool de minería de Bitcoin. Una nueva oportunidad de ganar cada 10 minutos, sin necesidad de experiencia previa.",
    color: "text-yellow-400",
  },
  {
    icon: <Landmark className="h-10 w-10" />,
    title: "Invierte en el Mundo Real",
    description: "Participa en fracciones de proyectos inmobiliarios mediante tokens y recibe ganancias a medida que el proyecto crece.",
    color: "text-green-400",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Apuesta al Futuro del Bitcoin",
    description: "Participa en nuestro pool de futuros y gana con predicciones sobre el precio de BTC, con total transparencia.",
    color: "text-blue-400",
  },
  {
    icon: <Banknote className="h-10 w-10" />,
    title: "Préstamos Cripto, Sin Bancos",
    description: "Accede a finanzas descentralizadas. Pide préstamos usando tu Bitcoin como garantía o aporta liquidez para ganar un APY.",
    color: "text-purple-400",
  },
  {
    icon: <HeartHandshake className="h-10 w-10" />,
    title: "Saldeudas",
    description: "Una iniciativa de ayuda mutua. Aporta a una bolsa común para ayudar a otros a pagar deudas importantes y salir adelante.",
    color: "text-red-400",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Fitpago",
    description: "Te recompensamos por cuidar tu salud. Gana premios por hacer ejercicio y mantener un estilo de vida activo.",
    color: "text-orange-400",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Productos y Oportunidades
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Herramientas simplificadas para ganar, ahorrar y mejorar tu vida en el ecosistema cripto.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.title} className="flex flex-col bg-card border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 ${product.color}`}>
                  {product.icon}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow text-center">
                <CardTitle className="font-headline text-xl text-foreground">{product.title}</CardTitle>
                <CardDescription className="mt-2 flex-grow text-base text-foreground/70">{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
