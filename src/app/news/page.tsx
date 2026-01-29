import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Image as ImageIcon } from "lucide-react";

export default function NewsPage() {
  return (
    <>
      <section className="bg-emerald-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Heading level="h1" intent="title" className="text-white mb-6">
            News & Media
          </Heading>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Latest updates, press releases, and gallery from SEE-WIDP.
          </p>
        </div>
      </section>

      <SectionWrapper background="white">
        <Heading level="h2" intent="section-heading" className="mb-8">
          Latest News
        </Heading>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              padding="none"
              hoverEffect
              className="flex flex-col h-full"
            >
              <div className="h-48 bg-neutral-200 w-full" />
              <div className="p-6 flex-1">
                <span className="text-xs font-bold text-gold-600 uppercase mb-2 block">
                  Press Release
                </span>
                <h3 className="text-lg font-bold text-emerald-950 mb-3 hover:text-emerald-800 cursor-pointer">
                  SEE-WIDP Launches Pilot in Enugu State
                </h3>
                <p className="text-sm text-emerald-900/60 mb-4">
                  The highly anticipated development project was officially
                  flagged off by global partners today...
                </p>
                <span className="text-xs text-neutral-400 font-medium">
                  May 12, 2026
                </span>
              </div>
            </Card>
          ))}
        </div>

        <Heading level="h2" intent="section-heading" className="mb-8">
          Gallery
        </Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="aspect-square bg-neutral-100 rounded-lg flex items-center justify-center relative group overflow-hidden cursor-pointer"
            >
              <ImageIcon className="text-neutral-300 w-8 h-8" />
              <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
                View Image
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-emerald-900/50 mt-4 italic">
          Event photos will appear here.
        </p>
      </SectionWrapper>
    </>
  );
}
