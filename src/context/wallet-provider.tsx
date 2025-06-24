"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { PublicKey } from "@solana/web3.js";

type PhantomProvider = {
  publicKey: PublicKey | null;
  isConnected: boolean;
  connect: (opts?: { onlyIfTrusted: boolean }) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: "connect" | "disconnect", callback: (publicKey?: PublicKey) => void) => void;
  off: (event: "connect" | "disconnect", callback: (publicKey?: PublicKey) => void) => void;
  isPhantom: boolean;
};

interface WalletContextType {
  provider: PhantomProvider | undefined;
  walletKey: PublicKey | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const getProvider = (): PhantomProvider | undefined => {
  if (typeof window !== "undefined" && "solana" in window) {
    const provider = (window as any).solana;
    if (provider?.isPhantom) {
      return provider as PhantomProvider;
    }
  }
};

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const [provider, setProvider] = useState<PhantomProvider | undefined>(undefined);
  const [walletKey, setWalletKey] = useState<PublicKey | null>(null);

  useEffect(() => {
    const phantomProvider = getProvider();
    if (phantomProvider) {
      setProvider(phantomProvider);
      phantomProvider.connect({ onlyIfTrusted: true }).catch(() => {
        // Silently fail if not trusted
      });
    }
  }, []);

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

    return () => {
      provider.off("connect", onConnect);
      provider.off("disconnect", onDisconnect);
    };
  }, [provider, toast]);

  const connectWallet = useCallback(async () => {
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
  }, [provider, toast]);

  const disconnectWallet = useCallback(async () => {
    if (provider) {
      await provider.disconnect();
    }
  }, [provider]);

  return (
    <WalletContext.Provider value={{ provider, walletKey, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
