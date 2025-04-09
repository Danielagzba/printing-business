import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-neutral-50">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              src="/printing.jpg"
              alt="Artistic printing process"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="container relative z-10 px-4 py-20 md:py-32">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-6">
              <span className="block">Servigrafic</span>
              <span className="block">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-600 max-w-md">
              Where creativity meets exceptional quality. We transform your
              ideas into beautifully crafted printed pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-amber-800 rounded-none px-8"
              >
                <Link href="/gallery">Explore Our Work</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-amber-50 rounded-none px-8"
              >
                <Link href="/contact">Get in Touch</Link>
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
              The Art of Print
            </h2>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
              We believe in the power of print to captivate, communicate, and
              connect. Our studio combines traditional craftsmanship with modern
              techniques to create printed pieces that stand out in a digital
              world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Craftsmanship",
                  description:
                    "Meticulous attention to detail in every printed piece we create.",
                },
                {
                  title: "Innovation",
                  description:
                    "Blending traditional techniques with cutting-edge technology.",
                },
                {
                  title: "Quality",
                  description:
                    "Premium materials and processes for exceptional results.",
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
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Letterpress Stationery",
                category: "Business",
                image: "/placeholder.svg?height=600&width=600",
              },
              {
                title: "Hand-bound Notebooks",
                category: "Custom",
                image: "/placeholder.svg?height=600&width=600",
              },
              {
                title: "Foil Stamped Invitations",
                category: "Wedding",
                image: "/placeholder.svg?height=600&width=600",
              },
              {
                title: "Embossed Business Cards",
                category: "Business",
                image: "/placeholder.svg?height=600&width=600",
              },
              {
                title: "Screen Printed Posters",
                category: "Art",
                image: "/placeholder.svg?height=600&width=600",
              },
              {
                title: "Custom Packaging",
                category: "Retail",
                image: "/placeholder.svg?height=600&width=600",
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
          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-amber-50 rounded-none px-8"
            >
              <Link href="/gallery">View All Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-16 text-center">
              Our Process
            </h2>
            <div className="space-y-24">
              {[
                {
                  number: "01",
                  title: "Consultation",
                  description:
                    "We begin with a thoughtful conversation about your vision, goals, and preferences. This helps us understand the essence of your project and how we can bring it to life through print.",
                  image: "/placeholder.svg?height=600&width=800",
                },
                {
                  number: "02",
                  title: "Design & Concept",
                  description:
                    "Our designers translate your ideas into visual concepts, considering everything from paper selection to printing techniques. We explore creative possibilities while keeping your objectives in focus.",
                  image: "/placeholder.svg?height=600&width=800",
                },
                {
                  number: "03",
                  title: "Crafting & Production",
                  description:
                    "With approved designs in hand, our master printers bring your project to life using a blend of traditional craftsmanship and modern techniques. Each piece receives meticulous attention to detail.",
                  image: "/placeholder.svg?height=600&width=800",
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
                        fill
                        className="object-cover"
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
      <section className="py-24 bg-amber-50">
        <div className="container px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-16 text-center">
            Client Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The attention to detail and quality of materials exceeded our expectations. Our wedding invitations were absolutely stunning.",
                author: "Emily & James",
                project: "Wedding Suite",
              },
              {
                quote:
                  "Working with this studio transformed our brand identity. The letterpress business cards make a lasting impression on everyone who receives them.",
                author: "Sarah Johnson",
                project: "Brand Identity",
              },
              {
                quote:
                  "The custom notebooks they created for our company retreat were beautiful and thoughtfully crafted. Everyone loved the personal touch.",
                author: "Michael Chen",
                project: "Corporate Gifts",
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
      <section className="py-24 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 opacity-90">
            Ready to bring your printing project to life? Contact us to discuss
            your ideas and discover how we can help create something
            extraordinary.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-amber-800 rounded-none px-8"
          >
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
