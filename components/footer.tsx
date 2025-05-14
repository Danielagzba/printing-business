"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-16 pb-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-serif text-2xl text-white tracking-wide"
            >
              {t("Servigrafic Solutions")}
            </Link>

            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/servigrafic_solutions/"
                target="_blank"
                className="hover:text-amber-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#letterpress"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  Libretas Personalizadas
                </Link>
              </li>
              <li>
                <Link
                  href="/services#foil"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  Libretas con Suaje
                </Link>
              </li>
              <li>
                <Link
                  href="/services#embossing"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  Publicidad
                </Link>
              </li>
              <li>
                <Link
                  href="/services#custom"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  Papelería Personalizada
                </Link>
              </li>
              <li>
                <Link
                  href="/services#business"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  Carpetas y Sobres
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          {/* <div>
            <h3 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">
              {t("nav.about")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  {t("about.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about#process"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  {t("process.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about#team"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  Equipo
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-amber-500 transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">
              {t("footer.contact")}
            </h3>
            <address className="not-italic text-neutral-400 space-y-2">
              <p>Jesus García Morales 404</p>
              <p>Ciudad de México</p>
              <p className="mt-4">servigrafic@live.com.mx</p>
              <p>+52 1 55 5143 0814</p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} {t("Servigrafic Solutions")}.{" "}
            {t("footer.rights")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-neutral-500 text-sm hover:text-amber-500 transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-neutral-500 text-sm hover:text-amber-500 transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
