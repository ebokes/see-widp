import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="bg-emerald-950 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <Heading level="h1" intent="title" className="text-white mb-6">
            About SEE-WIDP
          </Heading>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            A strategic initiative to formalize, grow, and project the South
            East Event & Wedding Industry to the world.
          </p>
        </div>
      </section>

      <SectionWrapper background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Heading level="h2" intent="section-heading">
              Why We Exist
            </Heading>
            <p className="text-lg text-emerald-900/80 leading-relaxed mb-6">
              The event and wedding industry in South East Nigeria is a
              multi-billion Naira creative economy that has largely remained
              fragmented and informal. SEE-WIDP was born out of the need to
              structure this ecosystem, providing a unified platform for
              professionals to collaborate, learn, and scale.
            </p>
            <p className="text-lg text-emerald-900/80 leading-relaxed">
              We believe that by empowering SMEs and setting global standards,
              we can transform Enugu and the entire region into a premier
              destination for world-class events.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-100 rounded-lg h-48 w-full bg-[url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="bg-neutral-100 rounded-lg h-48 w-full bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mt-8" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center" padding="lg">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-emerald-700" />
            </div>
            <Heading
              level="h3"
              intent="section-heading"
              className="text-xl mb-4"
            >
              Our Mission
            </Heading>
            <p className="text-emerald-900/70">
              To build a sustainable ecosystem that professionalizes the
              industry, creates jobs, and boosts the regional economy through
              strategic partnerships.
            </p>
          </Card>
          <Card className="text-center" padding="lg">
            <div className="bg-gold-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-gold-600" />
            </div>
            <Heading
              level="h3"
              intent="section-heading"
              className="text-xl mb-4"
            >
              Our Vision
            </Heading>
            <p className="text-emerald-900/70">
              To be the leading catalyst for the growth and global recognition
              of the South East creative and event industry.
            </p>
          </Card>
          <Card className="text-center" padding="lg">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-emerald-700" />
            </div>
            <Heading
              level="h3"
              intent="section-heading"
              className="text-xl mb-4"
            >
              Core Values
            </Heading>
            <p className="text-emerald-900/70">
              Excellence, Integrity, Collaboration, Innovation, and
              Sustainability define every aspect of our operations.
            </p>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
