import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Servigrafic Solutions - Impresión y Diseño de Alta Calidad",
  description: "Transformamos tus ideas en piezas impresas bellamente elaboradas. Libretas personalizadas, packaging, publicidad y más. Ciudad de México.",
  keywords: "impresión, diseño gráfico, libretas personalizadas, packaging, publicidad, impresión digital, Ciudad de México, CDMX",
  authors: [{ name: "Servigrafic Solutions" }],
  creator: "Servigrafic Solutions",
  publisher: "Servigrafic Solutions",
  openGraph: {
    title: "Servigrafic Solutions - Impresión y Diseño de Alta Calidad",
    description: "Transformamos tus ideas en piezas impresas bellamente elaboradas. Libretas personalizadas, packaging, publicidad y más.",
    url: "https://servigraficsolutions.com",
    siteName: "Servigrafic Solutions",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/printing.jpg",
        width: 1200,
        height: 630,
        alt: "Servigrafic Solutions - Servicios de Impresión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servigrafic Solutions - Impresión y Diseño",
    description: "Transformamos tus ideas en piezas impresas bellamente elaboradas.",
    images: ["/printing.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google", // Reemplazar con tu código real
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Link to your favicon */}
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${playfair.variable} ${lato.variable} font-sans`}>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KYJ2H4XVHG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KYJ2H4XVHG');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
