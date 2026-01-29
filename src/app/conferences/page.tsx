import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic2, TrendingUp, Users, Calendar } from "lucide-react";

export default function ConferencesPage() {
  return (
    <>
      <section className="bg-emerald-950 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <Heading level="h1" intent="title" className="text-white mb-6">
            Conferences & Masterclasses
          </Heading>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Empowering the industry through knowledge, strategy, and skill
            development.
          </p>
        </div>
      </section>

      <SectionWrapper background="white">
        <Heading
          level="h2"
          intent="section-heading"
          className="mb-10 text-center"
        >
          Program Tracks
        </Heading>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card padding="lg" className="border-emerald-100">
            <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Mic2 className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="font-bold text-xl text-emerald-950 mb-3">
              Creative Economy
            </h3>
            <p className="text-emerald-900/70 mb-4">
              Panel sessions focused on policy, infrastructure, and the role of
              the creative sector in GDP growth.
            </p>
            <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
              Day 1
            </span>
          </Card>

          <Card padding="lg" className="border-gold-100">
            <div className="bg-gold-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-gold-600" />
            </div>
            <h3 className="font-bold text-xl text-emerald-950 mb-3">
              Business Growth
            </h3>
            <p className="text-emerald-900/70 mb-4">
              Masterclasses on pricing, contracts, financial inclusion, and
              scaling an event business.
            </p>
            <span className="text-xs font-bold bg-gold-100 text-gold-800 px-2 py-1 rounded">
              Day 2
            </span>
          </Card>

          <Card padding="lg" className="border-emerald-100">
            <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="font-bold text-xl text-emerald-950 mb-3">
              Vendor Spotlight
            </h3>
            <p className="text-emerald-900/70 mb-4">
              Technical training and demos for decorators, florists,
              photographers, and lighting engineers.
            </p>
            <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
              Day 3
            </span>
          </Card>
        </div>

        <Heading level="h2" intent="section-heading" className="mb-8">
          Upcoming Sessions
        </Heading>
        <div className="space-y-4 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-6 p-6 border border-neutral-200 rounded-lg hover:border-emerald-300 transition-colors"
            >
              <div className="shrink-0 mt-1 flex flex-row md:flex-col items-center gap-2 text-emerald-600 min-w-[100px]">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">May 1{i}</span>
                <span className="text-sm">10:00 AM</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-emerald-950 mb-1">
                  {i === 1
                    ? "The Future of Events in SE Nigeria"
                    : i === 2
                      ? "Pricing for Profit: Workshop for Planners"
                      : i === 3
                        ? "Tech Integration in Event Management"
                        : "Leveraging Cultural Assets"}
                </h3>
                <p className="text-emerald-900/60 text-sm mb-3">
                  Speaker:{" "}
                  {i % 2 === 0
                    ? "Dr. Ngozi Okonjo-Iweala (TBC)"
                    : "Chude Jideonwo (TBC)"}
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-neutral-100 px-2 py-1 rounded text-neutral-600">
                    Keynote
                  </span>
                  <span className="text-xs bg-neutral-100 px-2 py-1 rounded text-neutral-600">
                    45 Mins
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
