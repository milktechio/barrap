import { BarrapLogo } from "@/components/icons";
import { ConnectWalletButton } from "@/components/landing/connect-wallet-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <BarrapLogo />
        <ConnectWalletButton />
      </div>
    </header>
  );
}
