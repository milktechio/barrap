import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins, PT_Sans } from 'next/font/google';
import { WalletProvider } from '@/context/wallet-provider';

const siteUrl = 'https://www.barra.mx';
const siteTitle = 'Barrap: Comunidad, Colaboración y Acción para un Impacto Real';
const siteDescription = 'Barrap es la red social que te conecta con personas y recursos para superar desafíos. Únete a una comunidad de acción, invierte en proyectos y transforma la colaboración en un impacto real y medible.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  manifest: '/manifest.json',
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Barrap',
    images: [
      {
        url: '/images/redsocial.png',
        width: 1200,
        height: 630,
        alt: 'Una red de personas conectadas colaborando en la plataforma Barrap',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '600', '700']
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pt-sans',
  weight: ['400', '700']
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Barrap",
  "url": siteUrl,
  "logo": `${siteUrl}/images/logo_texto.png`,
  "sameAs": [
    "https://www.facebook.com/share/16aEithGqv/?mibextid=wwXIfr",
    "https://www.instagram.com/barra.app"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${ptSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <WalletProvider>
          {children}
        </WalletProvider>
        <Toaster />
      </body>
    </html>
  );
}
