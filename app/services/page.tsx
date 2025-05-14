import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      id: "letterpress",
      title: "Libretas",
      description:
        "Nuestras libretas están diseñadas con atención al detalle, utilizando materiales de alta calidad para lograr un acabado funcional y estético. Cada pieza combina practicidad con diseño, ideal para quienes valoran la organización sin sacrificar el estilo.",
      details: [
        "Libretas personalizadas para empresas",
        "Agendas diarias o semanales",
        "Cuadernos tipo bullet journal",
        "Libretas para eventos o conferencias",
        "Libretas de viaje o escritura personal",
      ],
      image: "/libreta.png",
    },
    {
      id: "custom",
      title: "Libretas con Suaje",
      description:
        "Nuestras libretas con suaje destacan por sus detalles únicos y acabados personalizados. El suaje permite crear formas o cortes especiales en la portada o el interior, añadiendo un toque creativo y distintivo. Son ideales para marcas que buscan diferenciarse y ofrecer una experiencia visual y táctil desde el primer vistazo.",
      details: [
        "Libretas corporativas con logotipo troquelado",
        "Libretas para eventos o conferencias con suaje de detalles",
        "Cuadernos de lujo con suaje en la portada",
        "Libretas para regalos promocionales con cortes creativos",
      ],
      image: "/libreta_suaje.png",
    },
    {
      id: "foil",
      title: "Publicidad",
      description:
        "Dale vida a tu marca a través de impresos publicitarios que combinan funcionalidad y diseño. Desde revistas corporativas y catálogos de productos hasta libretas personalizadas y material promocional, cada pieza se convierte en una oportunidad para comunicar tu identidad con impacto.",
      details: [
        "Revistas",
        "Folletos y trípticos informativos",
        "Libretas personalizadas con branding",
        "Volantes promocionales",
        "Catálogos corporativos",
      ],
      image: "/revistas.png",
    },
    {
      id: "embossing",
      title: "Cajas",
      description:
        "Nuestras cajas personalizadas están diseñadas para elevar la presentación de tu producto y reforzar la identidad de tu marca. Ofrecemos soluciones funcionales y estéticas, con acabados de alta calidad, ideales para packaging corporativo, regalos empresariales o ediciones especiales.",
      details: [
        "Cajas para productos",
        "Cajas para regalos corporativos",
        "Cajas plegables con diseño personalizado",
        "Cajas para kits promocionales",
      ],
      image: "/cajas.png",
    },
    {
      id: "business",
      title: "Papelería Personalizada",
      description:
        "Nuestra papelería personalizada transforma la imagen de tu marca con productos únicos y funcionales. Desde folders y calendarios hasta tarjetas de presentación y hojas membretadas, cada pieza está diseñada para transmitir tu estilo corporativo de manera profesional y elegante.",
      details: [
        "Folders y carpetas personalizadas",
        "Calendarios corporativos",
        "Sobres personalizados",
        "Carpetas personalizadas",
      ],
      image: "/calendario.png",
    },
  ];

  return (
    <div className="flex flex-col pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden bg-neutral-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/printing.jpg"
            alt="Printing press in action"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-neutral-600">
            Descubre nuestra gama de técnicas y servicios de impresión premium,
            cada uno elaborado con atención al detalle y excelencia artística.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="font-serif text-3xl font-light">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <span className="h-1 w-1 rounded-full primary-700 mr-2"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paper & Materials */}
      {/* <section className="py-20 bg-neutral-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Papers & Materials
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              We source the finest papers and materials from around the world,
              selecting each for its quality, texture, and environmental
              responsibility. The right paper enhances the printing technique
              and elevates the final piece.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Cotton Papers",
                description:
                  "Luxurious 100% cotton papers with a soft texture that's perfect for letterpress and foil stamping.",
                image: "/placeholder.svg?height=600&width=600",
              },
              {
                name: "Specialty Finishes",
                description:
                  "Unique papers with special finishes including metallic, shimmer, and textured surfaces.",
                image: "/placeholder.svg?height=600&width=600",
              },
              {
                name: "Colored Papers",
                description:
                  "A rainbow of colored papers from subtle off-whites to bold, vibrant hues for distinctive designs.",
                image: "/placeholder.svg?height=600&width=600",
              },
              {
                name: "Recycled Options",
                description:
                  "Environmentally friendly papers made from recycled materials without compromising on quality.",
                image: "/placeholder.svg?height=600&width=600",
              },
              {
                name: "Handmade Papers",
                description:
                  "Artisanal handmade papers with unique textures and natural deckled edges for special projects.",
                image: "/placeholder.svg?height=600&width=600",
              },
              {
                name: "Specialty Materials",
                description:
                  "Beyond paper, we work with wood, fabric, leather, and other materials for truly unique printing projects.",
                image: "/placeholder.svg?height=600&width=600",
              },
            ].map((material, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={material.image || "/placeholder.svg"}
                    alt={material.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2">{material.name}</h3>
                  <p className="text-neutral-600">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Custom Projects */}
      {/* <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
                Custom Projects
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Have a unique printing project in mind? We love creative
                challenges and collaborating with clients to bring distinctive
                visions to life. Our team can help with everything from concept
                development to production of one-of-a-kind printed pieces.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Whether you're planning a special event, creating a limited
                edition art piece, or developing a unique brand experience, we
                have the expertise and passion to help you create something
                extraordinary.
              </p>
              <Button
                asChild
                className="primary-700 hover:primary-800 rounded-none px-8"
              >
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Custom printing project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="py-20 bg-neutral-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-light mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  question:
                    "What is the difference between letterpress and digital printing?",
                  answer:
                    "Letterpress is a traditional printing technique where designs are physically impressed into the paper, creating a tactile, dimensional effect. Digital printing uses modern technology to print designs directly onto paper without physical impression. Letterpress offers a distinctive, artisanal quality with a unique texture, while digital printing provides consistency and is often more suitable for complex color work.",
                },
                {
                  question: "How long does a custom printing project take?",
                  answer:
                    "Project timelines vary depending on complexity, techniques used, and current studio workload. Simple letterpress projects might take 2-3 weeks, while complex custom projects with multiple techniques could take 4-8 weeks. We'll provide a detailed timeline during our initial consultation and keep you updated throughout the process.",
                },
                {
                  question:
                    "Do you offer design services or do I need to provide finished artwork?",
                  answer:
                    "We offer comprehensive design services and can work with you from concept to completion. Our designers specialize in creating artwork optimized for our printing techniques. We also welcome client-provided designs and can advise on any adjustments needed for optimal printing results.",
                },
                {
                  question: "What information do you need for a quote?",
                  answer:
                    "To provide an accurate quote, we need details about your project including: printing techniques desired, quantity needed, paper preferences, size specifications, number of ink colors, and timeline requirements. If you have a specific budget in mind, we can also suggest options that work within your parameters.",
                },
                {
                  question: "Do you ship internationally?",
                  answer:
                    "Yes, we ship worldwide. International shipping costs and delivery times vary by destination. We carefully package all orders to ensure they arrive in perfect condition, regardless of distance traveled.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-neutral-200 pb-8">
                  <h3 className="font-serif text-xl mb-3">{faq.question}</h3>
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 primary-700 text-white">
        <div className="container px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 opacity-90">
            Contact us to discuss your printing needs and discover how our
            artisanal approach can bring your vision to life with exceptional
            quality and craftsmanship.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:primary-800 rounded-none px-8"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section> */}
    </div>
  );
}
