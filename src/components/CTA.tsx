"use client";

import { ArrowRight } from "lucide-react";
import LeafIcon from "./LeafIcon";

export default function CTA() {
  return (
    <section id="cta" className="py-28 relative bg-[#F9F7F3] z-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Card Frame */}
        <div className="relative rounded-[48px] bg-[#3F5E4A] text-white p-8 sm:p-16 overflow-hidden shadow-2xl border-6 border-white flex flex-col items-center text-center">

          {/* Visual Leaf decorations */}
          <LeafIcon className="absolute top-[20px] left-[-30px] w-20 h-20 text-white/5 rotate-45" />
          <LeafIcon className="absolute bottom-[20px] right-[-30px] w-24 h-24 text-white/5 -rotate-12" />

          {/* Soft Warm Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3F5E4A] via-transparent to-[#E58A65]/20 pointer-events-none z-0" />

          <div className="relative z-10 max-w-xl">
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl tracking-tight leading-[1.1] mb-6 text-white">
              Ready to Transform Your Body & Life?
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-medium mb-10 max-w-md mx-auto">
              Book your free strategy call and let&apos;s create your personalized plan for success.
            </p>

            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center rounded-full bg-[#E58A65] px-10 py-5 text-xs font-bold uppercase tracking-widest text-white shadow-xl shadow-black/15 transition-all hover:bg-[#d47854] hover:scale-102 active:scale-98 overflow-hidden"
            >
              {/* Visual Shine Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />

              Book Free Strategy Call
              <ArrowRight className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Badges row below */}
          <div className="relative z-10 grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-white/10 w-full max-w-lg">
            <div>
              <span className="block text-2xl sm:text-3xl font-black font-display leading-none text-white">500+</span>
              <span className="block text-[10px] font-bold text-white/60 mt-2.5 uppercase tracking-widest">Clients Helped</span>
            </div>
            <div className="border-l border-white/10 pl-4">
              <span className="block text-2xl sm:text-3xl font-black font-display leading-none text-white">4.9/5</span>
              <span className="block text-[10px] font-bold text-white/60 mt-2.5 uppercase tracking-widest">Average Rating</span>
            </div>
            <div className="border-l border-white/10 pl-4">
              <span className="block text-2xl sm:text-3xl font-black font-display leading-none text-white">100%</span>
              <span className="block text-[10px] font-bold text-white/60 mt-2.5 uppercase tracking-widest">Personalized</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
