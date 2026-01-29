import Link from "next/link";
import { SectionWrapper } from "../ui/section-wrapper";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900">
      <SectionWrapper className="py-12 md:py-16 bg-transparent text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center text-emerald-950 font-bold font-heading">
                S
              </div>
              <span className="font-heading font-bold text-xl">SEE-WIDP</span>
            </div>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              The official industry platform for the South East event & wedding
              ecosystem. Building a stronger creative economy through
              public-private partnership.
            </p>
            <div className="pt-4">
              <p className="text-xs uppercase tracking-wider text-gold-500/80 font-semibold mb-2">
                In Collaboration With
              </p>
              <div className="h-10 border border-white/20 rounded-md flex items-center justify-center text-white/40 text-xs">
                [Enugu State Govt Logo]
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-gold-500">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  About Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/expo"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Expo & Weddings
                </Link>
              </li>
              <li>
                <Link
                  href="/government-ppp"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Government & PPP
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  News & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-gold-500">
              For Business
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/exhibitors"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Exhibitor Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Sponsorship Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/conferences"
                  className="text-emerald-100 hover:text-white transition-colors"
                >
                  Conferences & Masterclasses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-gold-500">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-emerald-100">
              <li>Enugu, Nigeria</li>
              <li>contact@see-widp.com</li>
              <li>+234 000 000 000</li>
            </ul>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="gold" size="sm" className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-400">
          <p>
            &copy; {new Date().getFullYear()} SEE-WIDP Projects Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}
