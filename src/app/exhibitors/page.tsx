import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Store, Zap, Shield } from "lucide-react";

export default function ExhibitorsPage() {
  return (
    <>
      <section className="bg-emerald-950 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <Heading level="h1" intent="title" className="text-white mb-6">
            For Exhibitors
          </Heading>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Showcase your brand to thousands of potential clients, partners, and
            investors.
          </p>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto mb-16 px-4">
          <Heading
            level="h2"
            intent="section-heading"
            className="text-center mb-10"
          >
            Why Exhibit?
          </Heading>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-emerald-800" />
              </div>
              <h4 className="font-bold text-lg mb-2">Lead Generation</h4>
              <p className="text-emerald-900/70">
                Direct sales opportunities and new client acquisition.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-emerald-800" />
              </div>
              <h4 className="font-bold text-lg mb-2">Brand Visibility</h4>
              <p className="text-emerald-900/70">
                Position your business as a leader in the South East industry.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-800" />
              </div>
              <h4 className="font-bold text-lg mb-2">Credibility</h4>
              <p className="text-emerald-900/70">
                Align your brand with a government-endorsed initiative.
              </p>
            </div>
          </div>
        </div>

        <Heading
          level="h2"
          intent="section-heading"
          className="text-center mb-10"
        >
          Booth Categories
        </Heading>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-neutral-200" padding="lg">
            <h3 className="text-2xl font-bold text-emerald-950 mb-2">
              Standard
            </h3>
            <p className="text-3xl font-bold text-gold-500 mb-6">₦X00,000</p>
            <ul className="space-y-3 mb-8 text-emerald-900/80">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> 3x3m Space
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> 1 Table, 2
                Chairs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Basic Power
                Supply
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Directory
                Listing
              </li>
            </ul>
            <Button className="w-full" variant="outline">
              Select Standard
            </Button>
          </Card>

          <Card
            className="border-gold-400 ring-2 ring-gold-100 relative"
            padding="lg"
          >
            <div className="absolute top-0 right-0 bg-gold-400 text-white text-xs font-bold px-2 py-1 rounded-bl">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold text-emerald-950 mb-2">
              Premium
            </h3>
            <p className="text-3xl font-bold text-gold-500 mb-6">₦X,000,000</p>
            <ul className="space-y-3 mb-8 text-emerald-900/80">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> 6x3m Space
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Premium
                Shell Scheme
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Dedicated
                Power
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Logo on
                Website
              </li>
            </ul>
            <Button className="w-full" variant="gold">
              Select Premium
            </Button>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50/50" padding="lg">
            <h3 className="text-2xl font-bold text-emerald-950 mb-2">
              Pavilion
            </h3>
            <p className="text-3xl font-bold text-gold-500 mb-6">₦X,X00,000</p>
            <ul className="space-y-3 mb-8 text-emerald-900/80">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Custom
                Built Booth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Prime
                Location
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Speaking
                Opportunity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Media
                Feature
              </li>
            </ul>
            <Button className="w-full" variant="primary">
              Contact Sales
            </Button>
          </Card>
        </div>

        <div className="bg-neutral-50 p-8 rounded-lg max-w-2xl mx-auto border border-neutral-200">
          <Heading
            level="h3"
            intent="section-heading"
            className="text-center mb-6"
          >
            Exhibitor Registration
          </Heading>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-emerald-900 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-neutral-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none"
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-900 mb-1">
                  Contact Person
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-neutral-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-900 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 border border-neutral-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none"
                placeholder="email@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-900 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-2 border border-neutral-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none"
                placeholder="+234..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-900 mb-1">
                Category
              </label>
              <select className="w-full p-2 border border-neutral-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none">
                <option>Event Planning</option>
                <option>Catering</option>
                <option>Fashion</option>
                <option>Tech</option>
                <option>Other</option>
              </select>
            </div>
            <Button className="w-full" variant="gold">
              Submit Registration
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </>
  );
}
