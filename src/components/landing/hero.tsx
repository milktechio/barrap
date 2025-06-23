import { ConnectWalletButton } from "@/components/landing/connect-wallet-button";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
            Liderazgo colectivo para conexiones significativas.
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl">
            Barrap es una red social para la acción, conectando personas y empoderando soluciones para el bien común.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ConnectWalletButton />
          </div>
        </div>
      </div>
    </section>
  );
}
