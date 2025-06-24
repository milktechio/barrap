import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram, X } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="footer" className="bg-transparent border-t border-border/50 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-shrink-0">
            <Image src="/images/logo_texto.png" alt="Barrap logo" width={158} height={40} />
          </div>
          <div className="flex flex-col items-center gap-2 text-center text-sm text-foreground/60">
            <p>&copy; {new Date().getFullYear()} Barrap. Todos los derechos reservados.</p>
            <p>Hecho con 🩷 por <a href="https://milktech.io" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">milktech.io</a></p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.facebook.com/share/16aEithGqv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-foreground/70 hover:text-primary" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.instagram.com/barra.app" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-foreground/70 hover:text-primary" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com/Barra_App" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                <X className="h-5 w-5 text-foreground/70 hover:text-primary" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/milktechio/barrap/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-foreground/70 hover:text-primary" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
