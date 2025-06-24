"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PhantomIcon } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";
import type { PublicKey } from "@solana/web3.js";

// A simplified type for the Phantom provider
type PhantomProvider = {
  publicKey: PublicKey | null;
  isConnected: boolean;
  connect: (opts?: { onlyIfTrusted: boolean }) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: "connect" | "disconnect", callback: (publicKey?: PublicKey) => void) => void;
  // isPhantom property is used to identify the provider
  isPhantom: boolean;
};

/**
 * Gets the Phantom provider from the window object.
 */
const getProvider = (): PhantomProvider | undefined => {
  if (typeof window !== "undefined" && "solana" in window) {
    const provider = (window as any).solana;
    if (provider?.isPhantom) {
      return provider as PhantomProvider;
    }
  }
};

export function ConnectWalletButton() {
  const { toast } = useToast();
  const [provider, setProvider] = useState<PhantomProvider | undefined>(undefined);
  const [walletKey, setWalletKey] = useState<PublicKey | null>(null);

  // Set provider and try to connect eagerly on mount
  useEffect(() => {
    const phantomProvider = getProvider();
    if (phantomProvider) {
      setProvider(phantomProvider);
      // Try to connect if already trusted
      phantomProvider.connect({ onlyIfTrusted: true }).catch(() => {
        // Silently fail if not trusted
      });
    }
  }, []);

  // Set up event listeners for the provider
  useEffect(() => {
    if (!provider) return;

    const onConnect = (publicKey?: PublicKey) => {
      if (publicKey) {
        setWalletKey(publicKey);
        toast({
          title: "Wallet Conectado",
          description: `Conectado a: ${publicKey.toBase58()}`,
        });
      }
    };

    const onDisconnect = () => {
      setWalletKey(null);
      toast({
        title: "Wallet Desconectado",
        description: "Tu wallet ha sido desconectada.",
      });
    };

    provider.on("connect", onConnect);
    provider.on("disconnect", onDisconnect);

    // Clean up listeners on component unmount
    return () => {
      provider.on("connect", onConnect);
      provider.on("disconnect", onDisconnect);
    };
  }, [provider, toast]);

  const handleConnect = async () => {
    if (!provider) {
      toast({
        title: "Phantom no detectado",
        description: "Por favor, instala la extensión de Phantom Wallet.",
        variant: "destructive",
      });
      window.open("https://phantom.app/", "_blank");
      return;
    }

    try {
      await provider.connect();
    } catch (err: any) {
      toast({
        title: "Error al conectar",
        description: err.message || "El usuario rechazó la solicitud de conexión.",
        variant: "destructive",
      });
    }
  };

  const handleDisconnect = async () => {
    if (provider) {
      await provider.disconnect();
    }
  };

  if (walletKey) {
    const keyString = walletKey.toBase58();
    const truncatedKey = `${keyString.substring(0, 4)}...${keyString.substring(keyString.length - 4)}`;
    return (
      <Button 
        onClick={handleDisconnect} 
        variant="outline"
        className="rounded-full !px-4 !py-3 font-bold border-primary text-primary"
        aria-label="Desconectar Wallet"
      >
        <PhantomIcon className="w-5 h-5 mr-2" />
        {truncatedKey}
      </Button>
    );
  }

  return (
    <Button 
      onClick={handleConnect} 
      variant="default" 
      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-full !px-6 !py-3"
      aria-label="Conectar con Phantom Wallet"
    >
      <PhantomIcon className="w-5 h-5 mr-2" />
      Conectar Wallet
    </Button>
  );
}
