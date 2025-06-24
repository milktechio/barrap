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