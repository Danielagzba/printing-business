"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";
import { X, Mail } from "lucide-react";

export default function GalleryPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      title: "Libretas",
      image: "https://i.imgur.com/gZe11T9.png",
      description: "Libretas personalizadas con acabados premium",
    },
    {
      title: "Libretas con Suaje",
      image: "https://i.imgur.com/QucSkQz.jpeg",
      description: "Diseños únicos con cortes especiales",
    },
    {
      title: "Packaging Personalizado",
      image: "https://i.imgur.com/ovnpBDU.png",
      description: "Empaques únicos para tu marca",
    },
    {
      title: "Calendarios",
      image: "https://i.imgur.com/WFFK2Hz.png",
      description: "Calendarios personalizados",
    },
    {
      title: "Carpetas",
      image: "/carpetas.png",
      description: "Carpetas corporativas",
    },
    // Añadir más ejemplos de trabajo aquí
    {
      title: "Tarjetas de Presentación",
      image: "https://i.imgur.com/3uX5Eky.png",
      description: "Tarjetas con acabados especiales",
    },
    {
      title: "Invitaciones",
      image: "https://i.imgur.com/E2OmT78.png",
      description: "Invitaciones para eventos especiales",
    },
    {
      title: "Folletos",
      image: "https://i.imgur.com/9Y44kYk.png",
      description: "Folletos informativos y promocionales",
    },
    {
      title: "Etiquetas",
      image: "https://i.imgur.com/j2hyNDl.png",
      description: "Etiquetas adhesivas personalizadas",
    },
    {
      title: "Menús",
      image: "https://i.imgur.com/cyCikhK.png",
      description: "Menús para restaurantes",
    },
    {
      title: "Posters",
      image: "https://i.imgur.com/2wRnyzL.png",
      description: "Posters publicitarios",
    },
    {
      title: "Posters",
      image: "https://i.imgur.com/yH0D35W.png",
      description: "Posters publicitarios",
    },
    {
      title: "Posters",
      image: "https://i.imgur.com/NdNWr5n.png",
      description: "Posters publicitarios",
    },
    {
      title: "Posters",
      image: "https://i.imgur.com/qDbVlcK.png",
      description: "Posters publicitarios",
    },
    {
      title: "Posters",
      image: "https://i.imgur.com/apprjWB.png",
      description: "Posters publicitarios",
    },
    {
      title: "Publicidad",
      image: "/revistas.png",
      description: "Material publicitario de alta calidad",
    },
  ];

  return (
    <div className="flex flex-col pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight mb-6 text-center">
            Galería
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-neutral-600">
            Explora nuestra colección de trabajos realizados con la más alta
            calidad
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item.image)}
                className="cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            ¿Interesado en nuestros servicios?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 opacity-90">
            Contáctanos para discutir cómo podemos ayudarte con tu próximo
            proyecto de impresión
          </p>
          <a 
            href="mailto:servigrafic@live.com.mx" 
            className="inline-flex items-center justify-center p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Enviar correo electrónico"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Vista completa"
                width={1200}
                height={1200}
                className="object-contain max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
