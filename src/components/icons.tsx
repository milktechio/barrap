import type { SVGProps } from "react";

export const BarrapLogo = ({ className }: { className?: string }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        <svg
            className="h-8 w-auto text-primary"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M50 5C25.14 5 5 25.14 5 50s20.14 45 45 45 45-20.14 45-45S74.86 5 50 5zm0 82.5c-20.71 0-37.5-16.79-37.5-37.5S29.29 12.5 50 12.5s37.5 16.79 37.5 37.5-16.79 37.5-37.5 37.5z"
                fill="currentColor"
            />
            <path
                d="M50 27.5c-12.43 0-22.5 10.07-22.5 22.5S37.57 72.5 50 72.5s22.5-10.07 22.5-22.5-10.07-22.5-22.5-22.5zm0 37.5c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15z"
                fill="currentColor"
                fillOpacity="0.6"
            />
        </svg>
        <span className="font-headline font-bold text-2xl text-foreground">Barrap</span>
    </div>
);

export const PhantomIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M15 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
        <path d="M12 14.5a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" />
    </svg>
);
