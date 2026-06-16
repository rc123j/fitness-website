"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 border-t border-white/5 relative z-15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white border border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
              <path d="M9 22v-4h4" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display text-xl font-bold tracking-tight leading-none text-white">
              THRIVE
            </span>
            <span className="text-[9px] font-bold text-white/50 tracking-widest mt-0.5 uppercase">
              Fitness & Nutrition
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
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
              className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 mb-10">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all hover:translate-y-[-2px]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noreferrer" 
            className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all hover:translate-y-[-2px]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noreferrer" 
            className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all hover:translate-y-[-2px]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3v6z"/></svg>
          </a>
          <a 
            href="mailto:info@thrive.com" 
            className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all hover:translate-y-[-2px]"
          >
            <Mail className="h-4.5 w-4.5" />
          </a>
        </div>

        {/* Copyright */}
        <span className="text-[10px] text-white/30 font-bold tracking-widest uppercase">
          &copy; {new Date().getFullYear()} THRIVE Fitness & Nutrition. All rights reserved.
        </span>

      </div>
    </footer>
  );
}
