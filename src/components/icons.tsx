export const BarrapLogo = ({ className }: { className?: string }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        <svg
            className="h-8 w-auto text-primary"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c.373 0 .74-.016 1.107-.046C11.17 29.536 6 23.413 6 16S11.17 2.464 17.107.046C16.74.016 16.373 0 16 0z" />
        </svg>
        <span className="font-headline font-bold text-2xl text-foreground tracking-wider">Barrap</span>
    </div>
);

export const SolanaLogo = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M4.75 4.75v3.5h14.5v-3.5H4.75zM4.75 10.25v3.5h14.5v-3.5H4.75zm0 5.5v3.5h14.5v-3.5H4.75z"></path>
    </svg>
);

export const PhantomIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2Zm3.12,14.65c-1.37,1.14-3.26,1.48-5.04,1.03-1.78-.45-3.26-1.6-4.1-3.15-.84-1.55-.99-3.38-.44-5.06s1.82-3.12,3.48-3.93c1.66-.81,3.53-.94,5.23-.38,1.7,.56,3.09,1.87,3.87,3.53.78,1.66.86,3.56.23,5.26-0.63,1.7-1.95,3.03-3.73,3.7Z" />
    <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5,5-2.24,5-5S14.76,7,12,7Zm0,8c-1.65,0-3-1.35-3-3s1.35-3,3-3,3,1.35,3,3-1.35,3-3,3Z" />
  </svg>
);
