"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import LanguageToggle from "./language-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    // { name: t("nav.home"), path: "/" },
    // { name: t("nav.services"), path: "/services" },
    // { name: t("nav.gallery"), path: "/gallery" },
    // { name: t("nav.about"), path: "/about" },
    // { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 md:h-10 w-auto transition-all duration-300">
            <Image
              src="/icon.png"
              alt={t("site.name")}
              width={180}
              height={40}
              className="object-contain h-full w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm tracking-wide hover:text-primary transition-colors relative py-1",
                pathname === item.path ? "text-primary" : "text-neutral-800",
                pathname === item.path &&
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:primary-700"
              )}
            >
              {item.name}
            </Link>
          ))}
          {/* <LanguageToggle /> */}
        </nav>

        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button> */}
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container flex flex-col h-full justify-center items-center space-y-8 p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-2xl font-serif hover:text-primary transition-colors",
                pathname === item.path ? "text-primary" : "text-neutral-800"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
