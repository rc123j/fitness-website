"use client";

import Image from "next/image";
import { BookOpen, Dumbbell, Activity, ShieldCheck, Sparkles, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Programs() {
  return (
    <section id="programs" className="py-28 relative bg-[#F9F7F3] border-t border-[#1A1A1A]/12 z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-[#1a1a1a] leading-tight">
            What You Get <br className="sm:hidden" />
            <span className="text-[#E58A65]">Inside My Programs</span>
          </h2>
        </div>

        {/* Three Column Details Layout with Center Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Items Column */}
          <div className="lg:col-span-4 space-y-10 order-2 lg:order-1">
            {[
              {
                title: "Personalized Nutrition Plan",
                desc: "Custom meal plans built around your goals, lifestyle and food preferences.",
                icon: BookOpen
              },
              {
                title: "Custom Workout Program",
                desc: "Gym or home workouts designed to maximize results in minimum time.",
                icon: Dumbbell
              },
              {
                title: "Progress Tracking",
                desc: "Regular check-ins, detailed feedback and adjustments to keep you on track.",
                icon: Activity
              },
              {
                title: "Mindset & Habit Coaching",
                desc: "Build lasting habits and the right mindset to achieve long-term success.",
                icon: ShieldCheck
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-5 group/item">
                <div className="h-11 w-11 shrink-0 rounded-2xl bg-[#3F5E4A]/8 text-[#3F5E4A] flex items-center justify-center shadow-sm group-hover/item:scale-105 transition-transform duration-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-2 leading-snug font-display">{item.title}</h3>
                  <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Nutrition Bowl Container */}
          <div className="lg:col-span-4 flex justify-center py-8 lg:py-0 order-1 lg:order-2 relative">
            
            {/* Visual radial light behind bowl */}
            <div className="absolute inset-0 bg-radial from-[#E58A65]/15 to-transparent rounded-full filter blur-xl transform scale-90 pointer-events-none" />
            
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full border-8 border-white shadow-2xl overflow-hidden hover:scale-102 transition-transform duration-700 cursor-pointer group">
              <Image
                src="/nutrition_bowl_hero.png"
                alt="Gourmet Tailored Recipe Plate"
                fill
                sizes="(max-width: 768px) 300px, 350px"
                className="object-cover transition-transform duration-1000 group-hover:rotate-6 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Items Column */}
          <div className="lg:col-span-4 space-y-10 order-3">
            {[
              {
                title: "Grocery Lists & Guides",
                desc: "Simple grocery lists and guides to make healthy eating easy and stress-free.",
                icon: Sparkles
              },
              {
                title: "24/7 Support",
                desc: "Direct access for support, motivation and answers to your questions.",
                icon: MessageSquare
              },
              {
                title: "Sustainable Results",
                desc: "No crash diets or shortcuts. Just real strategies that create real, lasting changes.",
                icon: CheckCircle2
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-5 group/item">
                <div className="h-11 w-11 shrink-0 rounded-2xl bg-[#E58A65]/8 text-[#E58A65] flex items-center justify-center shadow-sm group-hover/item:scale-105 transition-transform duration-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-2 leading-snug font-display">{item.title}</h3>
                  <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
