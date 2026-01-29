import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ExpoPage() {
  return (
    <>
      <section className="bg-emerald-950 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <Heading level="h1" intent="title" className="text-white mb-6">
            Expo & Wedding Exhibition
          </Heading>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            The grandest stage for the event and wedding industry in South East
            Nigeria.
          </p>
        </div>
      </section>

      {/* Industry Expo Section */}
      <SectionWrapper background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full inline-block text-sm mb-4">
              INDUSTRY EXPO
            </div>
            <Heading level="h2" intent="section-heading" className="mb-6">
              The B2B Trade Show
            </Heading>
            <p className="text-lg text-emerald-900/80 mb-6 leading-relaxed">
              Connect with manufacturers, suppliers, and service providers. The
              Industry Expo is designed for business growth, offering a platform
              to source new products, network with distributors, and discover
              the latest trends in event technology and logistics.
            </p>
            <h4 className="font-bold text-emerald-950 mb-4">Who Exhibited?</h4>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Event Planners",
                "Equipment Rentals",
                "Caterers",
                "Tech Solutions",
                "Security Firms",
                "Logistics Companies",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-emerald-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-500" /> {item}
                </div>
              ))}
            </div>
            <Link href="/exhibitors">
              <Button variant="outline">Reserve a Booth</Button>
            </Link>
          </div>
          <div className="order-1 md:order-2 h-[400px] bg-neutral-200 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2573&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
        </div>
      </SectionWrapper>

      {/* Wedding Pavilion Section */}
      <SectionWrapper background="light">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] bg-neutral-200 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225448526-72997f552b69?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
          <div>
            <div className="bg-gold-100 text-gold-800 font-bold px-3 py-1 rounded-full inline-block text-sm mb-4">
              WEDDING PAVILION
            </div>
            <Heading level="h2" intent="section-heading" className="mb-6">
              The Ultimate Bridal Experience
            </Heading>
            <p className="text-lg text-emerald-900/80 mb-6 leading-relaxed">
              A curated showcase of the finest wedding vendors in the region.
              From high-fashion bridal runways to exquisite decor mock-ups, the
              Wedding Pavilion attracts thousands of intending couples and
              lifestyle enthusiasts.
            </p>
            <h4 className="font-bold text-emerald-950 mb-4">Highlights</h4>
            <ul className="space-y-4 mb-8">
              <li className="bg-white p-4 rounded-lg shadow-sm border border-neutral-100">
                <strong className="text-emerald-950 block">
                  Fashion Runway
                </strong>
                <span className="text-emerald-800/70 text-sm">
                  Top designers showcasing bridal and traditional wear.
                </span>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm border border-neutral-100">
                <strong className="text-emerald-950 block">
                  Decor Showcase
                </strong>
                <span className="text-emerald-800/70 text-sm">
                  Immersive installations by leading event decorators.
                </span>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm border border-neutral-100">
                <strong className="text-emerald-950 block">
                  Vendor Marketplace
                </strong>
                <span className="text-emerald-800/70 text-sm">
                  Direct access to photographers, makeup artists, and more.
                </span>
              </li>
            </ul>
            <Link href="/exhibitors">
              <Button variant="gold">Exhibit in Pavilion</Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
