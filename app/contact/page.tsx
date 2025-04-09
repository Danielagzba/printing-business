"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "business-stationery",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        projectType: "business-stationery",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Contact us" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl">Get in touch with our team to discuss your printing needs</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Project Type</Label>
                  <RadioGroup
                    value={formData.projectType}
                    onValueChange={handleRadioChange}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="business-stationery" id="business-stationery" />
                      <Label htmlFor="business-stationery">Business Stationery</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="marketing-materials" id="marketing-materials" />
                      <Label htmlFor="marketing-materials">Marketing Materials</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom-printing" id="custom-printing" />
                      <Label htmlFor="custom-printing">Custom Printing</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="large-format" id="large-format" />
                      <Label htmlFor="large-format">Large Format</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="specialty-items" id="specialty-items" />
                      <Label htmlFor="specialty-items">Specialty Items</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-rose-600 hover:bg-rose-700 w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-rose-600 mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-neutral-600">123 Print Avenue, Design District</p>
                    <p className="text-neutral-600">City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-rose-600 mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-neutral-600">Main: (555) 123-4567</p>
                    <p className="text-neutral-600">Customer Support: (555) 765-4321</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-rose-600 mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-neutral-600">info@printcraft.com</p>
                    <p className="text-neutral-600">support@printcraft.com</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-neutral-600">
                    <p>Monday - Friday:</p>
                    <p>9:00 AM - 6:00 PM</p>
                    <p>Saturday:</p>
                    <p>10:00 AM - 4:00 PM</p>
                    <p>Sunday:</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-neutral-200 rounded-lg relative overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Map location" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="bg-white px-4 py-2 rounded-md shadow-md">Map Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "How do I request a quote for my printing project?",
                  answer:
                    "You can request a quote by filling out our contact form above, calling our office, or sending us an email with details about your project. The more information you provide about your printing needs, the more accurate our quote will be.",
                },
                {
                  question: "What file formats do you accept for printing?",
                  answer:
                    "We accept a variety of file formats including PDF, AI, PSD, INDD, JPG, and TIFF. For the best results, we recommend providing print-ready PDF files with at least 300 DPI resolution and CMYK color mode.",
                },
                {
                  question: "How long does it take to complete a printing project?",
                  answer:
                    "Turnaround times vary depending on the complexity and size of your project. Standard business cards might take 2-3 business days, while more complex projects like catalogs or specialty items may take 5-7 business days. Rush services are available for an additional fee.",
                },
                {
                  question: "Do you offer design services?",
                  answer:
                    "Yes, we offer professional design services for all types of printing projects. Our experienced designers can help create or refine your designs to ensure they're optimized for printing and effectively communicate your message.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
