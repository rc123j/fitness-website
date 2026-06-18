"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#1A1A1A]/12 bg-[#F9F7F3]/75 backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4.5 lg:px-8">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative h-11 w-11 flex items-center justify-center overflow-hidden rounded-2xl border border-[#1A1A1A]/12 bg-white/40 shadow-sm shrink-0">
              <Image src="/logo.png" alt="Bharti Fit Logo" fill sizes="44px" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tight text-[#1A1A1A] leading-none">
                BHARTI FIT
              </span>
              <span className="text-[9px] font-bold text-[#3F5E4A] tracking-[0.2em] mt-1.5 uppercase leading-none">
                Fitness & Nutrition
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: "#" },
              { label: "About", href: "#about" },
              { label: "Programs", href: "#programs" },
              { label: "Results", href: "#results" },
              { label: "Approach", href: "#approach" },
              { label: "Reviews", href: "#reviews" },
              { label: "FAQ", href: "#faq" }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A]/70 transition-colors hover:text-[#3F5E4A] relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3F5E4A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Nav CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center rounded-full bg-[#3F5E4A] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#F9F7F3] shadow-md shadow-[#3F5E4A]/10 transition-all hover:bg-[#2E4536] hover:shadow-lg hover:-translate-y-0.5 active:scale-95 border border-white/10"
            >
              Book Free Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel - Rendered outside of sticky header to resolve containing block bug */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F9F7F3] p-6 flex flex-col md:hidden overflow-y-auto">
          <div className="flex items-center justify-between mb-8 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative h-10 w-10 flex items-center justify-center overflow-hidden rounded-xl border border-[#1A1A1A]/12 bg-white/40 shadow-sm shrink-0">
                <Image src="/logo.png" alt="Bharti Fit Logo" fill sizes="40px" className="object-cover" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-[#1A1A1A]">BHARTI FIT</span>
            </div>
            <button
              type="button"
              className="rounded-md p-2 text-[#1A1A1A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col gap-5 text-base font-semibold uppercase tracking-wider">
            {[
              { label: "Home", href: "#" },
              { label: "About", href: "#about" },
              { label: "Programs", href: "#programs" },
              { label: "Results", href: "#results" },
              { label: "Approach", href: "#approach" },
              { label: "Reviews", href: "#reviews" },
              { label: "FAQ", href: "#faq" }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1A1A1A]/80 hover:text-[#3F5E4A] py-2 border-b border-[#1A1A1A]/12"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 flex items-center justify-center rounded-full bg-[#3F5E4A] py-3.5 text-xs font-bold uppercase tracking-wider text-[#F9F7F3] shadow-md shrink-0"
            >
              Book Free Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
