import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
  const categories = [
    { name: "All", slug: "all" },
    { name: "Letterpress", slug: "letterpress" },
    { name: "Foil Stamping", slug: "foil" },
    { name: "Business", slug: "business" },
    { name: "Wedding", slug: "wedding" },
    { name: "Art Prints", slug: "art" },
    { name: "Custom", slug: "custom" },
  ];

  const galleryItems = [
    {
      title: "Gold Foil Business Cards",
      category: ["business", "foil"],
      description: "Minimalist design with gold foil on navy cotton paper",
      image: "/placeholder.svg?height=800&width=800",
    },
    {
      title: "Letterpress Wedding Suite",
      category: ["wedding", "letterpress"],
      description:
        "Complete wedding invitation suite with blind deboss and floral motifs",
      image: "/placeholder.svg?height=800&width=800",
    },
    {
      title: "Embossed Art Print",
      category: ["art", "letterpress"],
      description: "Limited edition art print with multi-level embossing",
      image: "/placeholder.svg?height=800&width=800",
    },
    {
      title: "Custom Notebook Collection",
      category: ["custom", "letterpress"],
      description: "Hand-bound notebooks with letterpress covers",
      image: "/placeholder.svg?height=800&width=800",
    },
    {
      title: "Copper Foil Greeting Cards",
      category: ["custom", "foil"],
      description: "Holiday greeting cards with copper foil on textured paper",
      image: "/placeholder.svg?height=800&width=800",
    },
    {
      title: "Edge-Painted Business Cards",
      category: ["business", "letterpress"],
      description: "Letterpress cards with vibrant edge painting",
      image: "/placeholder.svg?height=800&width=800",
    },
    {
      title: "Botanical Wedding Invitations",
      category: ["wedding", "letterpress", "foil"],
      description: "Detailed botanical illustrations with gold foil accents",
      image: "/placeholder.svg?height=800&width=800",
    },
    {
      title: "Typographic Art Series",
      category: ["art", "letterpress"],
      description: "Limited edition typographic prints on handmade paper",
      image: "/placeholder.svg?height=800&width=800",
    },
    {
      title: "Luxury Brand Packaging",
      category: ["business", "foil", "custom"],
      description: "Custom packaging with blind emboss and gold foil details",
      image: "/placeholder.svg?height=800&width=800",
    },
    {
      title: "Die-Cut Event Invitations",
      category: ["custom", "letterpress"],
      description: "Intricate die-cut design with two-color letterpress",
      image: "/placeholder.svg?height=800&width=800",
    },
    {
      title: "Monogram Stationery Set",
      category: ["custom", "letterpress", "foil"],
      description:
        "Personal stationery with custom monogram and rose gold foil",
      image: "/placeholder.svg?height=800&width=800",
    },
    {
      title: "Restaurant Menu Collection",
      category: ["business", "letterpress"],
      description:
        "Cohesive set of menus with letterpress covers and hand-binding",
      image: "/placeholder.svg?height=800&width=800",
    },
  ];

  return (
    <div className="flex flex-col pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] overflow-hidden bg-neutral-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1000&width=2000"
            alt="Print gallery"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight mb-6">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-neutral-600">
            Explore our collection of artfully crafted print projects
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.slug}
                className="px-4 py-2 border border-neutral-200 hover:border-primary hover:text-primary transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <div className="text-white text-center">
                      <p className="font-serif text-xl mb-2">{item.title}</p>
                      <p className="text-neutral-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-lg">{item.title}</h3>
                <p className="text-sm text-neutral-500">
                  {item.category.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-neutral-50">
        <div className="container px-4">
          <h2 className="font-serif text-3xl font-light mb-12 text-center">
            Featured Project
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="font-serif text-2xl mb-4">
                Botanical Wedding Collection
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                This comprehensive wedding suite features hand-illustrated
                botanical elements printed with a combination of letterpress and
                gold foil on luxurious cotton paper. The collection includes
                invitations, RSVP cards, details cards, envelopes with custom
                liners, menus, and place cards.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Each piece was carefully designed to create a cohesive
                experience for guests, with thoughtful details like
                hand-calligraphed addresses and custom wax seals. The result is
                an elegant and memorable suite that set the tone for a
                sophisticated garden wedding.
              </p>
              <div className="flex gap-4">
                <span className="text-sm bg-neutral-200 px-3 py-1">
                  Letterpress
                </span>
                <span className="text-sm bg-neutral-200 px-3 py-1">
                  Gold Foil
                </span>
                <span className="text-sm bg-neutral-200 px-3 py-1">
                  Wedding
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Wedding invitation detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Wedding suite overview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Wedding envelope detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Wedding menu detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Stories */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="font-serif text-3xl font-light mb-12 text-center">
            Client Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <p className="text-lg italic mb-6 leading-relaxed">
                "Working with Artisan Press on our wedding stationery was a
                dream. They took our vision and elevated it beyond what we could
                have imagined. The letterpress invitations with gold foil
                details were absolutely stunning, and our guests couldn't stop
                raving about them. The attention to detail and quality of
                materials made our wedding communications feel truly special."
              </p>
              <div>
                <p className="font-medium">Emma & Thomas</p>
                <p className="text-neutral-500 text-sm">
                  Botanical Wedding Collection
                </p>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <p className="text-lg italic mb-6 leading-relaxed">
                "As a small luxury brand, every touchpoint with our customers
                matters. Artisan Press created business cards and packaging that
                perfectly communicate our brand's commitment to quality and
                craftsmanship. The combination of letterpress and foil stamping
                creates a tactile experience that makes a memorable impression.
                They're true artisans who understand the power of print."
              </p>
              <div>
                <p className="font-medium">James Wilson</p>
                <p className="text-neutral-500 text-sm">
                  Founder, Meridian Goods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Inspired by What You See?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 opacity-90">
            Let's discuss how we can create something equally beautiful for your
            project. Our team is ready to bring your vision to life with our
            artisanal printing techniques.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-amber-800 rounded-none px-8"
          >
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
