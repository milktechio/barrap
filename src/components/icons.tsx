export const IkoLogo = ({ className }: { className?: string }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        <svg
            className="h-8 w-auto text-primary"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c.373 0 .74-.016 1.107-.046C11.17 29.536 6 23.413 6 16S11.17 2.464 17.107.046C16.74.016 16.373 0 16 0z" />
        </svg>
        <span className="font-headline font-bold text-2xl text-foreground tracking-wider">IKO</span>
    </div>
);
