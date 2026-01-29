import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Building2, Handshake, ShieldCheck } from "lucide-react";

export default function GovernmentPPPPage() {
  return (
    <>
      <section className="bg-emerald-950 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <Heading level="h1" intent="title" className="text-white mb-6">
            Government & PPP
          </Heading>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            A landmark Public-Private Partnership driving economic development
            through the creative sector.
          </p>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
          <Heading level="h2" intent="section-heading" className="mb-6">
            The Partnership Model
          </Heading>
          <p className="text-lg text-emerald-900/80 mb-8 leading-relaxed">
            SEE-WIDP operates on a robust Public-Private Partnership (PPP)
            framework designed to leverage the strengths of both sectors. While
            the <span className="font-bold">Enugu State Government</span> provides the enabling environment,
            endorsement, and institutional support, <span className="font-bold">SEE-WIDP Projects Ltd</span> drives the execution, funding, and operational excellence of the
            platform.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card padding="lg" className="border-emerald-100 bg-emerald-50/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-200 p-3 rounded-md">
                  <Building2 className="w-6 h-6 text-emerald-800" />
                </div>
                <Heading level="h3" intent="subtitle" className="mb-0">
                  Government Role
                </Heading>
              </div>
              <ul className="space-y-3 text-emerald-900/80">
                <li className="flex items-start gap-2">
                  <span>•</span> Policy support and industry endorsement
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span> Facilitating venue and security logistics
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span> Promoting the state as an event destination
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span> Creating an enabling business environment
                </li>
              </ul>
            </Card>

            <Card padding="lg" className="border-gold-100 bg-gold-50/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gold-200 p-3 rounded-md">
                  <Handshake className="w-6 h-6 text-emerald-950" />
                </div>
                <Heading level="h3" intent="subtitle" className="mb-0">
                  Private Sector Role
                </Heading>
              </div>
              <ul className="space-y-3 text-emerald-900/80">
                <li className="flex items-start gap-2">
                  <span>•</span> Project funding and financial management
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span> Event planning, execution, and marketing
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span> Driving exhibitor and sponsor participation
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span> ensuring global standards of delivery
                </li>
              </ul>
            </Card>
          </div>

          <Heading level="h2" intent="section-heading" className="mb-6">
            Governance & Transparency
          </Heading>
          <p className="text-lg text-emerald-900/80 mb-6 leading-relaxed">
            To ensure accountability and long-term sustainability, the project
            is overseen by a Steering Committee comprising representatives from
            the government, industry leaders, and the organizing company.
          </p>
          <Card className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-emerald-700 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg text-emerald-950 mb-2">
                Committed to Best Practices
              </h4>
              <p className="text-emerald-900/70">
                We adhere to strict governance protocols to maintain the trust
                of our partners, sponsors, and the public. Every aspect of
                SEE-WIDP is designed to deliver measurable economic impact.
              </p>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
