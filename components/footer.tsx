"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-16 pb-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="font-serif text-2xl text-white tracking-wide">
              {t("site.name")}
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Un estudio boutique de impresión especializado en letterpress, estampado en foil y soluciones de impresión
              personalizadas.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#letterpress" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Letterpress
                </Link>
              </li>
              <li>
                <Link href="/services#foil" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Estampado en Foil
                </Link>
              </li>
              <li>
                <Link href="/services#embossing" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Relieve y Bajorrelieve
                </Link>
              </li>
              <li>
                <Link href="/services#custom" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Papelería Personalizada
                </Link>
              </li>
              <li>
                <Link href="/services#business" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Impresión Corporativa
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">{t("nav.about")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  {t("about.title")}
                </Link>
              </li>
              <li>
                <Link href="/about#process" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  {t("process.title")}
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">{t("footer.contact")}</h3>
            <address className="not-italic text-neutral-400 space-y-2">
              <p>Calle Artesanal 123</p>
              <p>Madrid, España 28001</p>
              <p className="mt-4">hola@prensaartesanal.com</p>
              <p>+34 91 123 4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} {t("site.name")}. {t("footer.rights")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-neutral-500 text-sm hover:text-amber-500 transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-neutral-500 text-sm hover:text-amber-500 transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
