import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
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
  title: "Estudio de Impresión y Diseño",
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
