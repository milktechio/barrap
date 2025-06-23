"use client";

import { Button } from "@/components/ui/button";
import { PhantomIcon } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";

export function ConnectWalletButton() {
  const { toast } = useToast();

  const handleConnect = () => {
    // Placeholder for actual wallet connection logic
    console.log("Attempting to connect to Phantom wallet...");
    toast({
      title: "Conectando Wallet",
      description: "Funcionalidad en desarrollo. ¡Vuelve pronto!",
    });
  };

  return (
    <Button 
      onClick={handleConnect} 
      variant="default" 
      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20 transition-all duration-300 ease-in-out transform hover:scale-105"
      aria-label="Conectar con Phantom Wallet"
    >
      <PhantomIcon className="w-5 h-5 mr-2" />
      Conectar Wallet
    </Button>
  );
}
