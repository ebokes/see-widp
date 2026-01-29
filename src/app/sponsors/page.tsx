import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Star, Award, TrendingUp } from "lucide-react";

export default function SponsorsPage() {
  return (
    <>
      <section className="bg-emerald-950 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <Heading level="h1" intent="title" className="text-white mb-6">
            Partnership & Sponsorship
          </Heading>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Position your brand at the forefront of the South East's most
            significant cultural and economic gathering.
          </p>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Heading level="h2" intent="section-heading" className="mb-6">
            Unlock Access & Impact
          </Heading>
          <p className="text-lg text-emerald-900/80 leading-relaxed">
            Sponsoring SEEI EXPO offers more than just logo placement. It is an
            opportunity to directly engage with policymakers, industry leaders,
            and a consumer base of millions in the South East region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center bg-emerald-900 text-white border-none py-10">
            <div className="mb-4 flex justify-center">
              <Star className="w-8 h-8 text-gold-500 fill-current" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Title Sponsor</h3>
            <p className="text-emerald-300 text-sm mb-6">Exclusive (1 Slot)</p>
            <ul className="text-sm space-y-2 text-emerald-100 mb-8 px-4">
              <li>"Powered By" status</li>
              <li>Keynote Address</li>
              <li>Premium Booth</li>
            </ul>
            <Button variant="gold" size="sm" className="w-full">
              Request Deck
            </Button>
          </Card>

          <Card className="text-center py-10 border-neutral-200">
            <div className="mb-4 flex justify-center">
              <Award className="w-8 h-8 text-neutral-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-emerald-950">
              Platinum
            </h3>
            <p className="text-emerald-600 text-sm mb-6">Limited (3 Slots)</p>
            <ul className="text-sm space-y-2 text-emerald-800 mb-8 px-4">
              <li>Session Branding</li>
              <li>Panel Slot</li>
              <li>Large Booth</li>
            </ul>
            <Button variant="outline" size="sm" className="w-full">
              Request Deck
            </Button>
          </Card>

          <Card className="text-center py-10 border-neutral-200">
            <div className="mb-4 flex justify-center">
              <Award className="w-8 h-8 text-gold-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-emerald-950">Gold</h3>
            <p className="text-emerald-600 text-sm mb-6">Open</p>
            <ul className="text-sm space-y-2 text-emerald-800 mb-8 px-4">
              <li>Logo on Materials</li>
              <li>Standard Booth</li>
              <li>Media Mention</li>
            </ul>
            <Button variant="outline" size="sm" className="w-full">
              Request Deck
            </Button>
          </Card>

          <Card className="text-center py-10 border-neutral-200">
            <div className="mb-4 flex justify-center">
              <TrendingUp className="w-8 h-8 text-neutral-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-emerald-950">Silver</h3>
            <p className="text-emerald-600 text-sm mb-6">Open</p>
            <ul className="text-sm space-y-2 text-emerald-800 mb-8 px-4">
              <li>Website Listing</li>
              <li>Shared Branding</li>
              <li>Bag Insert</li>
            </ul>
            <Button variant="outline" size="sm" className="w-full">
              Request Deck
            </Button>
          </Card>
        </div>

        <div className="bg-neutral-50 p-10 rounded-xl text-center max-w-3xl mx-auto">
          <Heading level="h3" intent="section-heading" className="mb-4">
            Not Ready for a Full Sponsorship?
          </Heading>
          <p className="text-emerald-900/70 mb-8">
            We offer tailored partnership packages for media, technical support,
            and in-kind services.
          </p>
          <Link href="/contact" className="inline-block">
            <Button variant="primary">Contact Partnership Team</Button>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
