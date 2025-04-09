import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-16 pb-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="font-serif text-2xl text-white tracking-wide">
              Artisan Press
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              A boutique printing studio specializing in letterpress, foil stamping, and custom printing solutions.
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
            <h3 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#letterpress" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Letterpress Printing
                </Link>
              </li>
              <li>
                <Link href="/services#foil" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Foil Stamping
                </Link>
              </li>
              <li>
                <Link href="/services#embossing" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Embossing & Debossing
                </Link>
              </li>
              <li>
                <Link href="/services#custom" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Custom Stationery
                </Link>
              </li>
              <li>
                <Link href="/services#business" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Business Printing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about#process" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">Contact</h3>
            <address className="not-italic text-neutral-400 space-y-2">
              <p>123 Artisan Way</p>
              <p>Craftsville, CA 90210</p>
              <p className="mt-4">hello@artisanpress.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Artisan Press. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-neutral-500 text-sm hover:text-amber-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-500 text-sm hover:text-amber-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
