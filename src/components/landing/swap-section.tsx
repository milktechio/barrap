"use client";

import { useState, useEffect, useCallback } from "react";
import { useWallet } from "@/context/wallet-provider";
import { ConnectWalletButton } from "@/components/landing/connect-wallet-button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDownUp } from "lucide-react";

const tokens = [
  { value: 'sol', label: 'SOL' },
  { value: 'usdc', label: 'USDC' },
  { value: 'usdt', label: 'USDT' },
];

const liquidityPools = {
  sol: 10000,
  usdc: 500000,
  usdt: 500000,
};

export function SwapSection() {
  const { walletKey } = useWallet();
  const [sellAmount, setSellAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [sellToken, setSellToken] = useState("sol");
  const [receiveToken, setReceiveToken] = useState("usdc");

  const calculateReceiveAmount = useCallback(() => {
    if (!sellAmount || !sellToken || !receiveToken || parseFloat(sellAmount) <= 0 || sellToken === receiveToken) {
      setReceiveAmount("");
      return;
    }

    const sellPool = liquidityPools[sellToken as keyof typeof liquidityPools];
    const receivePool = liquidityPools[receiveToken as keyof typeof liquidityPools];
    const k = sellPool * receivePool;
    
    const sellAmountFloat = parseFloat(sellAmount);
    const newSellPool = sellPool + sellAmountFloat;
    const newReceivePool = k / newSellPool;
    const amountOut = receivePool - newReceivePool;

    const fee = 0.003; 
    const finalAmount = amountOut * (1 - fee);

    if (finalAmount > 0) {
      setReceiveAmount(finalAmount.toFixed(6)); 
    } else {
      setReceiveAmount("");
    }
  }, [sellAmount, sellToken, receiveToken]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      calculateReceiveAmount();
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [sellAmount, sellToken, receiveToken, calculateReceiveAmount]);
  
  const handleSwapTokens = () => {
    setSellToken(receiveToken);
    setReceiveToken(sellToken);
    setSellAmount(receiveAmount);
  };

  const renderConnectWallet = () => (
    <Card className="bg-card/50 border border-border/20 backdrop-blur-sm text-center max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Conecta tu Wallet</CardTitle>
        <CardDescription>
          Para usar el servicio de Swap, por favor conecta tu wallet de Solana.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ConnectWalletButton />
      </CardContent>
    </Card>
  );

  const renderSwapInterface = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      <Card className="lg:col-span-1 bg-card/50 border-2 border-b-4 border-r-4 border-primary/20 backdrop-blur-sm shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary">Token Swap</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80">Vendes</label>
            <div className="flex gap-2">
              <Input 
                type="number" 
                placeholder="0.0" 
                className="flex-grow" 
                value={sellAmount}
                onChange={(e) => setSellAmount(e.target.value)}
              />
              <Select value={sellToken} onValueChange={setSellToken}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Token" />
                </SelectTrigger>
                <SelectContent>
                  {tokens.map(token => (
                    <SelectItem key={token.value} value={token.value}>
                      {token.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-center">
            <Button variant="ghost" size="icon" className="rounded-full bg-background hover:bg-accent" onClick={handleSwapTokens}>
              <ArrowDownUp className="h-5 w-5 text-primary" />
            </Button>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80">Recibes (Estimado)</label>
            <div className="flex gap-2">
              <Input 
                type="number" 
                placeholder="0.0" 
                className="flex-grow bg-muted/50" 
                value={receiveAmount}
                readOnly
              />
              <Select value={receiveToken} onValueChange={setReceiveToken}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Token" />
                </SelectTrigger>
                <SelectContent>
                  {tokens.map(token => (
                    <SelectItem key={token.value} value={token.value}>
                      {token.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button size="lg" className="w-full gradient-button font-bold">
            Realizar Swap
          </Button>
        </CardContent>
      </Card>
      <div className="lg:col-span-2 space-y-4 text-sm sm:text-base">
        <h3 className="font-headline text-xl font-bold tracking-tight text-foreground">
          Sobre el Programa Token Swap
        </h3>
        <p className="text-foreground/80">
          El Programa Token Swap permite el intercambio simple de pares de tokens sin un libro de órdenes de límite centralizado. Utiliza una fórmula matemática llamada "curva" para calcular el precio de todas las operaciones, imitando la dinámica normal del mercado. Los depositantes en el pool proporcionan liquidez, lo que permite la ejecución de operaciones a precio spot y, a cambio, reciben tokens de pool que representan su propiedad fraccionada.
        </p>
        <p className="text-foreground/80">
          Este programa se inspiró en gran medida en Uniswap y Balancer. Puede encontrar más información en su excelente documentación y documentos técnicos.
        </p>
        <Button variant="link" asChild>
            <a href="https://github.com/solana-labs/solana-program-library/tree/master/token-swap" target="_blank" rel="noopener noreferrer">
                Ver en GitHub
            </a>
        </Button>
      </div>
    </div>
  );

  return (
    <section id="swap" className="py-20 sm:py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Intercambio de Tokens (Swap)
          </h2>
          <p className="mt-4 text-base text-foreground/80 sm:text-lg">
            Intercambia tus tokens de forma segura y descentralizada en la red de Solana.
          </p>
        </div>
        {walletKey ? renderSwapInterface() : renderConnectWallet()}
      </div>
    </section>
  );
}
