import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Calendar, Users, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-emerald-950 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950 via-emerald-900 to-emerald-800 opacity-90" />
          {/* Placeholder for Hero Image - would be a background image here */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2698&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-gold-400 text-sm font-medium tracking-wide animate-fade-in-up">
            SOUTH EAST EVENT & WEDDING INDUSTRY DEVELOPMENT PROJECT
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6 animate-fade-in-up delay-100">
            Building the Future of the <br className="hidden md:block" />
            <span className="text-gold-500">Event & Wedding Industry</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up delay-200">
            A government-endorsed public-private partnership driving
            professionalization, SME growth, and creative economy development in
            South East Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link href="/exhibitors">
              <Button
                size="lg"
                variant="gold"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Become an Exhibitor
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-w-[200px] text-white border-white hover:bg-white hover:text-emerald-950"
              >
                Partner With Us
              </Button>
            </Link>
          </div>

          <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">Enugu</p>
              <p className="text-xs text-emerald-300 uppercase tracking-wider">
                Pilot Location
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">500+</p>
              <p className="text-xs text-emerald-300 uppercase tracking-wider">
                Exhibitors Target
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">10k+</p>
              <p className="text-xs text-emerald-300 uppercase tracking-wider">
                Expected Visitors
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">N5B+</p>
              <p className="text-xs text-emerald-300 uppercase tracking-wider">
                Economic Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Teaser */}
      <SectionWrapper background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-emerald-600 font-semibold mb-2 uppercase tracking-wide text-sm">
              Our Mission
            </div>
            <Heading level="h2" intent="title" className="mb-6">
              Transforming the Industry Standard
            </Heading>
            <p className="text-lg text-emerald-900/80 mb-6 leading-relaxed">
              SEE-WIDP is not just an event; it's a movement. We are bridging
              the gap between talent and opportunity, creating a structured
              ecosystem where businesses thrive.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Professionalization of services and standards",
                "Facilitating access to market and finance",
                "Fostering government and private sector collaboration",
                "Promoting South East Nigeria as an event destination",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-emerald-800"
                >
                  <div className="h-2 w-2 rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about">
              <Button variant="outline" className="group">
                Learn More About Us{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="relative h-[500px] bg-neutral-100 rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-emerald-950/20" />
          </div>
        </div>
      </SectionWrapper>

      {/* Event Highlights */}
      <SectionWrapper background="light" id="highlights">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading level="h2" intent="title">
            Everything Under One Roof
          </Heading>
          <p className="text-emerald-800/80 mt-4 text-lg">
            A comprehensive platform designed to serve every stakeholder in the
            event and wedding ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            className="flex flex-col h-full group cursor-pointer"
            hoverEffect
            padding="none"
          >
            <div className="h-64 bg-neutral-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase">
                  View Details
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4 p-3 bg-emerald-50 w-fit rounded-lg text-emerald-800">
                <Briefcase className="w-6 h-6" />
              </div>
              <Heading
                level="h3"
                intent="section-heading"
                className="text-2xl mb-3"
              >
                Industry Expo
              </Heading>
              <p className="text-emerald-900/70 mb-6 flex-1">
                A massive showcase of vendors, suppliers, and service providers.
                Connect with industry leaders and discover new products.
              </p>
              <Link href="/expo">
                <span className="text-gold-600 font-semibold inline-flex items-center hover:text-gold-700">
                  Explore Expo <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </div>
          </Card>

          <Card
            className="flex flex-col h-full group cursor-pointer"
            hoverEffect
            padding="none"
          >
            <div className="h-64 bg-neutral-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase">
                  View Details
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4 p-3 bg-gold-50 w-fit rounded-lg text-gold-700">
                <Users className="w-6 h-6" />
              </div>
              <Heading
                level="h3"
                intent="section-heading"
                className="text-2xl mb-3"
              >
                Wedding Pavilion
              </Heading>
              <p className="text-emerald-900/70 mb-6 flex-1">
                The ultimate bridal experience. Fashion runways, decor
                showcases, and direct access to top planners and vendors.
              </p>
              <Link href="/expo">
                <span className="text-gold-600 font-semibold inline-flex items-center hover:text-gold-700">
                  See Wedding Highlights <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </div>
          </Card>

          <Card
            className="flex flex-col h-full group cursor-pointer"
            hoverEffect
            padding="none"
          >
            <div className="h-64 bg-neutral-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase">
                  View Details
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4 p-3 bg-emerald-50 w-fit rounded-lg text-emerald-800">
                <Calendar className="w-6 h-6" />
              </div>
              <Heading
                level="h3"
                intent="section-heading"
                className="text-2xl mb-3"
              >
                Masterclasses
              </Heading>
              <p className="text-emerald-900/70 mb-6 flex-1">
                Learn from the best. Business growth sessions, creative
                workshops, and financial inclusion panels for SMEs.
              </p>
              <Link href="/conferences">
                <span className="text-gold-600 font-semibold inline-flex items-center hover:text-gold-700">
                  View Schedule <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* Stats / Impact Section */}
      <SectionWrapper background="dark">
        <div className="text-center mb-16">
          <Heading level="h2" intent="title" className="text-white">
            Why Participate?
          </Heading>
          <p className="text-emerald-100/80 mt-4 text-lg">
            Join the movement that is redefining the creative economy in South
            East Nigeria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
          <div className="p-6 border border-emerald-800 rounded-2xl bg-emerald-900/30 backdrop-blur">
            <h3 className="text-5xl font-bold text-gold-500 mb-2">100%</h3>
            <p className="text-white font-medium mb-2">Government Endorsed</p>
            <p className="text-emerald-200/60 text-sm">
              Full support from state leadership and agencies.
            </p>
          </div>
          <div className="p-6 border border-emerald-800 rounded-2xl bg-emerald-900/30 backdrop-blur">
            <h3 className="text-5xl font-bold text-gold-500 mb-2">3 Days</h3>
            <p className="text-white font-medium mb-2">
              Of Immersive Experience
            </p>
            <p className="text-emerald-200/60 text-sm">
              Networking, learning, and business deals.
            </p>
          </div>
          <div className="p-6 border border-emerald-800 rounded-2xl bg-emerald-900/30 backdrop-blur">
            <h3 className="text-5xl font-bold text-gold-500 mb-2">Unlimited</h3>
            <p className="text-white font-medium mb-2">
              Business Opportunities
            </p>
            <p className="text-emerald-200/60 text-sm">
              Direct access to clients and investors.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Heading level="h2" intent="title" className="mb-6">
            Ready to Showcase Your Brand?
          </Heading>
          <p className="text-xl text-emerald-900/70 mb-10 max-w-2xl mx-auto">
            Secure your spot at the biggest event and wedding industry gathering
            in the South East.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/exhibitors">
              <Button
                size="lg"
                variant="gold"
                className="w-full sm:w-auto px-12 h-14 text-lg"
              >
                Register as Exhibitor
              </Button>
            </Link>
            <Link href="/sponsors">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto px-12 h-14 text-lg"
              >
                Become a Sponsor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners / Collaboration Placeholder */}
      <SectionWrapper
        background="white"
        className="border-t border-neutral-100"
      >
        <p className="text-center text-sm font-semibold uppercase text-emerald-900/40 tracking-widest mb-10">
          In Collaboration With
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
          {/* Logo 1: Enugu State Govt Placeholder */}
          <div className="h-16 w-40 bg-neutral-200 rounded flex items-center justify-center font-bold text-neutral-400">
            Enugu Govt
          </div>
          {/* Logo 2: Partner */}
          <div className="h-16 w-32 bg-neutral-200 rounded flex items-center justify-center font-bold text-neutral-400">
            Partner 1
          </div>
          {/* Logo 3: Partner */}
          <div className="h-16 w-36 bg-neutral-200 rounded flex items-center justify-center font-bold text-neutral-400">
            Partner 2
          </div>
          {/* Logo 4: Media Partner */}
          <div className="h-16 w-32 bg-neutral-200 rounded flex items-center justify-center font-bold text-neutral-400">
            Media
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
