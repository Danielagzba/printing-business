"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-neutral-50">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              src="/printing.jpg"
              alt="Proceso de impresión artística"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="container relative z-10 px-4 py-20 md:py-32">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-6">
              <span className="block">{t("Servigrafic")}</span>
              <span className="block">{t("Solutions")}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-600 max-w-md">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="primary-700 hover:primary-800 rounded-none px-8"
              >
                {/* <Link href="/gallery">{t("hero.button.explore")}</Link> */}
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:primary-50 rounded-none px-8"
              >
                {/* <Link href="/contact">{t("hero.button.contact")}</Link> */}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-neutral-50 to-transparent"></div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              {t("intro.title")}
            </h2>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
              {t("intro.description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: t("intro.craftsmanship.title"),
                  description: t("intro.craftsmanship.description"),
                },
                {
                  title: t("intro.innovation.title"),
                  description: t("intro.innovation.description"),
                },
                {
                  title: t("intro.quality.title"),
                  description: t("intro.quality.description"),
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-neutral-50">
        <div className="container px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-16 text-center">
            {t("featured.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Libretas",

                image: "/libreta.png",
              },
              {
                title: "Libretas con Suaje",

                image: "/libreta_suaje.png",
              },
              {
                title: "Publicidad",

                image: "/revistas.png",
              },
              {
                title: "Packaging Personalizado",

                image: "/cajas.png",
              },
              {
                title: "Calendarios",
                category: "Arte",
                image: "/calendario.png",
              },
              {
                title: "Carpetas",

                image: "/carpetas.png",
              },
            ].map((work, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden mb-4">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-serif text-lg">{work.title}</h3>
                    <p className="text-sm text-neutral-500">{work.category}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:primary-50 rounded-none px-8"
            >
              <Link href="/gallery">{t("featured.viewAll")}</Link>
            </Button>
          </div> */}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-16 text-center">
              {t("process.title")}
            </h2>
            <div className="space-y-24">
              {[
                {
                  number: "01",
                  title: t("process.consultation.title"),
                  description: t("process.consultation.description"),
                  image: "/consulta.jpg",
                },
                {
                  number: "02",
                  title: t("process.design.title"),
                  description: t("process.design.description"),
                  image: "/diseño.png",
                },
                {
                  number: "03",
                  title: t("process.production.title"),
                  description: t("process.production.description"),
                  image: "/machine.png",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        layout="intrinsic" // Using intrinsic to define the aspect ratio
                        width={400} // Define the width
                        height={300} // Define the height
                        className="object-cover max-w-[80%] mx-auto" // Limiting the max-width and centering the image
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <span className="font-serif text-6xl text-neutral-200">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-2xl">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 primary-50">
        <div className="container px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-16 text-center">
            {t("testimonials.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "La atención al detalle y la calidad de los materiales superaron nuestras expectativas. Nuestras invitaciones de boda fueron absolutamente impresionantes.",
                author: "Emma y Tomás",
                project: "Colección de Boda",
              },
              {
                quote:
                  "Trabajar con este estudio transformó la identidad de nuestra marca. Las tarjetas de visita en letterpress causan una impresión duradera en todos los que las reciben.",
                author: "Sara Jiménez",
                project: "Identidad de Marca",
              },
              {
                quote:
                  "Los cuadernos personalizados que crearon para el retiro de nuestra empresa fueron hermosos y elaborados con esmero. A todos les encantó el toque personal.",
                author: "Miguel Chen",
                project: "Regalos Corporativos",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-neutral-200"
              >
                <p className="text-lg italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-neutral-500 text-sm">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 primary-700 text-white bg-primary">
        <div className="container px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 opacity-90">
            {t("cta.description")}
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-primary border-white hover:primary-800 rounded-none px-8"
          >
            {/* <Link href="/contact">{t("cta.button")}</Link> */}
          </Button>
        </div>
      </section>
    </div>
  );
}
