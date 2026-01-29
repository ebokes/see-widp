"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Expo & Weddings", href: "/expo" },
  { label: "Government", href: "/government-ppp" },
  { label: "Exhibitors", href: "/exhibitors" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-emerald-950 rounded-sm flex items-center justify-center text-gold-500 font-bold font-heading">
              S
            </div>
            <span
              className={cn(
                "font-heading font-bold text-xl tracking-tight",
                isScrolled || isOpen
                  ? "text-emerald-950"
                  : "text-emerald-950 lg:text-white",
              )}
            >
              SEE-WIDP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-gold-500",
                    isScrolled ? "text-emerald-950" : "text-white/90",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              <Link href="/exhibitors">
                <Button
                  variant={isScrolled ? "outline" : "gold"}
                  size="sm"
                  className={cn(
                    !isScrolled &&
                      "bg-white/10 text-white border-white/20 hover:bg-white/20",
                  )}
                >
                  Exhibitor Info
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant={isScrolled ? "gold" : "gold"} size="sm">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-emerald-950" />
            ) : (
              <Menu
                className={cn(
                  "w-6 h-6",
                  isScrolled
                    ? "text-emerald-950"
                    : "text-emerald-950 lg:text-white",
                )}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 lg:hidden pt-24 px-6 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col gap-6 text-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-emerald-950 hover:text-gold-600"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-8">
            <Link href="/exhibitors" onClick={() => setIsOpen(false)}>
              <Button className="w-full" variant="outline">
                Become an Exhibitor
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full" variant="gold">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
