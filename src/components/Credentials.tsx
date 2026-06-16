"use client";

import { Award } from "lucide-react";

export default function Credentials() {
  return (
    <section className="py-16 bg-[#F9F7F3] border-t border-[#1A1A1A]/5 z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center items-center opacity-85">
          {[
            { title: "NASM", desc: "Certified Coach" },
            { title: "ISSN", desc: "Sports Nutrition Specialist" },
            { title: "ACE", desc: "Certified Personal Trainer" },
            { title: "Precision Nutrition", desc: "Level 1 Certified" },
            { title: "7+ Years", desc: "Coaching Experience" }
          ].map((badge) => (
            <div key={badge.title} className="flex flex-col items-center justify-center p-3 hover:translate-y-[-2px] transition-transform duration-300">
              <div className="h-10 w-10 rounded-2xl bg-[#3F5E4A]/10 text-[#3F5E4A] flex items-center justify-center mb-3.5 shadow-sm">
                <Award className="h-5 w-5" />
              </div>
              <span className="block text-xs font-black text-[#1a1a1a] uppercase tracking-widest leading-none">{badge.title}</span>
              <span className="block text-[10px] font-bold text-[#1a1a1a]/40 mt-1.5 leading-none">{badge.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
