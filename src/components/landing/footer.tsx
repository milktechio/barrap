import { BarrapLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-transparent border-t border-border/50 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-shrink-0">
            <BarrapLogo />
          </div>
          <p className="text-center text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Barrap. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-foreground/70 hover:text-primary" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-foreground/70 hover:text-primary" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-foreground/70 hover:text-primary" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
