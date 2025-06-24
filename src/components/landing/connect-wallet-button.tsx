"use client";

import { Button } from "@/components/ui/button";
import { SolanaLogo } from "@/components/icons";
import { useWallet } from "@/context/wallet-provider";

export function ConnectWalletButton() {
  const { walletKey, connectWallet, disconnectWallet } = useWallet();

  if (walletKey) {
    const keyString = walletKey.toBase58();
    const truncatedKey = `${keyString.substring(0, 4)}...${keyString.substring(keyString.length - 4)}`;
    return (
      <Button 
        onClick={disconnectWallet} 
        variant="outline"
        className="rounded-full !px-4 !py-3 font-bold border-primary text-primary text-xs sm:text-sm"
        aria-label="Desconectar Wallet"
      >
        <SolanaLogo className="w-5 h-5 mr-2" />
        {truncatedKey}
      </Button>
    );
  }

  return (
    <Button 
      onClick={connectWallet} 
      variant="default" 
      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-full !px-6 !py-3 gradient-button text-xs sm:text-sm"
      aria-label="Conectar Wallet"
    >
      <SolanaLogo className="w-5 h-5 mr-2" />
      Conectar Wallet
    </Button>
  );
}
