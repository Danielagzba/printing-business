import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const team = [
    {
      name: "Eleanor Wright",
      position: "Founder & Master Printer",
      bio: "With over 15 years of experience in traditional printing techniques, Eleanor founded Artisan Press to preserve and celebrate the craft of letterpress printing in a digital age.",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      name: "Marcus Chen",
      position: "Creative Director",
      bio: "Marcus brings his background in fine arts and graphic design to create distinctive concepts that perfectly complement our artisanal printing techniques.",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      name: "Sophia Rodriguez",
      position: "Production Manager",
      bio: "Sophia oversees our printing studio, ensuring each project meets our exacting standards for quality and craftsmanship from start to finish.",
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      name: "James Wilson",
      position: "Client Relations",
      bio: "James works closely with our clients to understand their vision and guide them through the process of creating beautiful printed materials.",
      image: "/placeholder.svg?height=600&width=600",
    },
  ];

  return (
    <div className="flex flex-col pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden bg-neutral-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1000&width=2000"
            alt="About Artisan Press"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight mb-6">
            Our Story
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-neutral-600">
            Crafting beautiful printed pieces with passion and precision since
            2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-light mb-6">
                The Beginning
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Artisan Press began in 2010 when founder Eleanor Wright
                  discovered a vintage letterpress in an old print shop that was
                  closing down. Fascinated by the history and craftsmanship of
                  traditional printing techniques, she purchased the press and
                  began a journey to master this time-honored art form.
                </p>
                <p>
                  What started as a passion project in a small studio space
                  quickly grew as people discovered the unique quality and
                  character that only letterpress printing can provide. In an
                  increasingly digital world, the tactile nature and artistic
                  quality of our printed pieces resonated with those seeking
                  something more personal and distinctive.
                </p>
                <p>
                  Over the years, we've expanded our techniques to include foil
                  stamping, embossing, and other specialty printing methods,
                  while remaining true to our commitment to quality,
                  craftsmanship, and artistic expression. Today, Artisan Press
                  is a boutique printing studio creating beautiful, thoughtfully
                  crafted printed materials for clients who value the art of
                  print.
                </p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Vintage letterpress"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-neutral-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl font-light mb-6">
              Our Philosophy
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              At Artisan Press, we believe in the power of print to create
              meaningful connections in an increasingly digital world. Our
              approach combines respect for traditional craftsmanship with
              contemporary design sensibilities to create printed pieces that
              are both timeless and relevant.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Craftsmanship",
                description:
                  "We honor the tradition of printing through meticulous attention to detail and dedication to quality in every piece we create.",
              },
              {
                title: "Sustainability",
                description:
                  "We are committed to environmentally responsible practices, from sourcing recycled and sustainable papers to minimizing waste in our production process.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in working closely with our clients, combining their vision with our expertise to create something truly special and meaningful.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-neutral-200"
              >
                <h3 className="font-serif text-xl mb-4">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="font-serif text-3xl font-light mb-16 text-center">
            Our Process
          </h2>
          <div className="space-y-24">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "Every project begins with a conversation. We take the time to understand your vision, goals, and preferences, discussing everything from design concepts to paper selection and printing techniques.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                number: "02",
                title: "Design & Concept",
                description:
                  "Our design team creates concepts that align with your vision while optimizing for the printing techniques we'll use. We consider every detail, from typography and layout to how different elements will interact with the chosen printing methods.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                number: "03",
                title: "Proofing",
                description:
                  "Before production begins, we provide detailed proofs so you can see exactly how your project will look. For specialty techniques like letterpress and foil stamping, we can provide physical samples to demonstrate the effect.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                number: "04",
                title: "Production",
                description:
                  "Once the design is approved, our master printers bring your project to life. Each piece is carefully printed using our vintage presses and specialty equipment, with meticulous attention to detail at every step.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                number: "05",
                title: "Finishing & Delivery",
                description:
                  "The final touches often make all the difference. From edge painting and die-cutting to hand assembly and packaging, we ensure every aspect of your project is perfect before carefully packaging and delivering the finished pieces.",
                image: "/placeholder.svg?height=600&width=800",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center`}
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
      </section>

      {/* Our Team */}
      <section id="team" className="py-20 bg-neutral-50">
        <div className="container px-4">
          <h2 className="font-serif text-3xl font-light mb-16 text-center">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative aspect-square overflow-hidden mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl">{member.name}</h3>
                <p className="text-primary mb-2">{member.position}</p>
                <p className="text-neutral-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Studio */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-3xl font-light mb-6">
                Our Studio
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Our printing studio is a blend of history and innovation,
                  housing our collection of vintage presses alongside modern
                  equipment. It's a space where traditional craftsmanship meets
                  contemporary design, allowing us to create printed pieces with
                  character and quality that can't be replicated digitally.
                </p>
                <p>
                  The heart of our studio is our collection of letterpress
                  equipment, including a restored Chandler & Price press from
                  1915 and a Heidelberg Windmill from the 1960s. These machines,
                  with their distinctive rhythmic sounds and mechanical
                  precision, are operated by our skilled printers who have
                  mastered the art of achieving the perfect impression.
                </p>
                <p>
                  We welcome visitors to our studio by appointment, where you
                  can see our presses in action and experience firsthand the
                  craftsmanship that goes into every printed piece we create.
                </p>
              </div>
              <Button
                asChild
                className="mt-6 primary-700 hover:primary-800 rounded-none px-8"
              >
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Letterpress machine"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Studio space"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Printing supplies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Printer at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 primary-700 text-white">
        <div className="container px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Work With Us
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 opacity-90">
            Ready to create something beautiful together? Contact us to discuss
            your project and discover how our artisanal approach to printing can
            bring your vision to life.
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
      </section>
    </div>
  );
}
