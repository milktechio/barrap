import { ConnectWalletButton } from "@/components/landing/connect-wallet-button";

const navLinks = [
  { title: "INICIO", href: "#hero" },
  { title: "DESAFÍOS", href: "#problems" },
  { title: "PRODUCTOS", href: "#products" },
  { title: "ROADMAP", href: "#roadmap" },
  { title: "CONTACTO", href: "#footer" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <img src="/images/logo_texto.png" alt="Barrap logo" className="h-10 w-auto" />
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.href}
              className={`uppercase tracking-wider transition-colors ${
                index === 0
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {link.title}
            </a>
          ))}
        </nav>
        <ConnectWalletButton />
      </div>
    </header>
  );
}
