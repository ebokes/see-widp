import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-emerald-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Heading level="h1" intent="title" className="text-white mb-6">
            Get in Touch
          </Heading>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Have questions about SEE-WIDP? We'd love to hear from you.
          </p>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <Heading level="h2" intent="section-heading" className="mb-6">
              Contact Information
            </Heading>
            <p className="text-emerald-900/80 mb-8">
              Reach out to us for exhibitor inquiries, sponsorship details, or
              press related questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950">Address</h4>
                  <p className="text-emerald-800/70">
                    Enugu, Nigeria (Full Address TBD)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950">Email</h4>
                  <p className="text-emerald-800/70">contact@see-widp.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950">Phone</h4>
                  <p className="text-emerald-800/70">+234 000 000 000</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-emerald-50 p-6 rounded-lg">
              <h4 className="font-bold text-emerald-950 mb-2">Stay Updated</h4>
              <p className="text-sm text-emerald-800/70 mb-4">
                Subscribe to our newsletter for the latest announcements.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 p-2 rounded border border-neutral-300 outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
                />
                <Button size="sm" variant="primary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Card padding="lg">
              <Heading level="h3" intent="section-heading" className="mb-6">
                Send us a Message
              </Heading>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-neutral-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-neutral-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-1">
                    Subject
                  </label>
                  <select className="w-full p-2 border border-neutral-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none">
                    <option>General Inquiry</option>
                    <option>Sponsorship</option>
                    <option>Exhibition</option>
                    <option>Press</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full p-2 border border-neutral-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none h-32"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full" variant="gold">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
