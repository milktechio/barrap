import { Bitcoin, Landmark, TrendingUp, Banknote, HeartHandshake, Award } from "lucide-react";

const products = [
  {
    icon: <Bitcoin className="h-8 w-8" />,
    title: "Mina 3 BTC",
    description: "Únete a nuestro pool de minería de Bitcoin. Una nueva oportunidad de ganar cada 10 minutos, sin necesidad de experiencia previa.",
    color: "text-yellow-400",
  },
  {
    icon: <Landmark className="h-8 w-8" />,
    title: "Invierte en el Mundo Real",
    description: "Participa en fracciones de proyectos inmobiliarios mediante tokens y recibe ganancias a medida que el proyecto crece.",
    color: "text-green-400",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Apuesta al Futuro del Bitcoin",
    description: "Participa en nuestro pool de futuros y gana con predicciones sobre el precio de BTC, con total transparencia.",
    color: "text-blue-400",
  },
  {
    icon: <Banknote className="h-8 w-8" />,
    title: "Préstamos Cripto, Sin Bancos",
    description: "Accede a finanzas descentralizadas. Pide préstamos usando tu Bitcoin como garantía o aporta liquidez para ganar un APY.",
    color: "text-purple-400",
  },
  {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: "Saldeudas",
    description: "Una iniciativa de ayuda mutua. Aporta a una bolsa común para ayudar a otros a pagar deudas importantes y salir adelante.",
    color: "text-red-400",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Fitpago",
    description: "Te recompensamos por cuidar tu salud. Gana premios por hacer ejercicio y mantener un estilo de vida activo.",
    color: "text-orange-400",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 sm:py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Productos y Oportunidades
          </h2>
          <p className="mt-4 text-base text-foreground/80 sm:text-lg">
            Herramientas simplificadas para ganar, ahorrar y mejorar tu vida en el ecosistema cripto.
          </p>
        </div>
        
        <div className="flex flex-col max-w-3xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.title} 
              className="group relative border-l-2 border-border/20 hover:border-primary transition-all duration-300"
            >
              <div className="absolute -left-[9px] top-8 h-4 w-4 rounded-full bg-background border-2 border-border/20 group-hover:border-primary transition-all duration-300"></div>

              <div className="pl-8 pb-12">
                <h3 className="text-xl font-headline font-bold pt-6 text-foreground/80 group-hover:text-primary transition-colors duration-300 cursor-pointer">
                  {product.title}
                </h3>
                <div className="mt-4 max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                  <div className="flex items-start gap-x-4">
                    <div className={`flex-shrink-0 mt-1 ${product.color}`}>
                      {product.icon}
                    </div>
                    <p className="text-foreground/70 text-sm">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
