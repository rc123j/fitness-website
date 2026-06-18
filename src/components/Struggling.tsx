"use client";

import { motion } from "framer-motion";
import { Heart, Users, Calendar, ShieldCheck, ArrowRight, Check } from "lucide-react";

export default function Struggling() {
  const cards = [
    {
      step: "01",
      title: "Tried Multiple Diets?",
      desc: "Tired of restrictive eating plans that leave you feeling hungry, depleted, and eventually rebound.",
      solution: "Flexible Nutrition System",
      solDesc: "We build your program around foods you love, focusing on calorie control and macros without restricting entire food groups.",
      icon: Heart,
      color: "#E58A65",
      bg: "bg-[#E58A65]/10",
      accent: "from-[#E58A65]/15 via-[#E58A65]/5 to-transparent",
      tilt: "hover:-rotate-1"
    },
    {
      step: "02",
      title: "No Time for Fitness?",
      desc: "Struggling to balance work, family, and social life with long, exhausting hours inside a gym.",
      solution: "Time-Efficient Workouts",
      solDesc: "Get custom 30-to-45 minute routines tailored to your gym or home setup, designed to maximize muscle tone and metabolic rate.",
      icon: Users,
      color: "#3F5E4A",
      bg: "bg-[#3F5E4A]/10",
      accent: "from-[#3F5E4A]/15 via-[#3F5E4A]/5 to-transparent",
      tilt: "hover:rotate-1"
    },
    {
      step: "03",
      title: "Can't Stay Consistent?",
      desc: "Starting strong on Mondays only to fall off by Friday because you lack guidance and feedback.",
      solution: "Daily Habit Coaching",
      solDesc: "Direct daily communication, weekly video check-ins, and biometric tracking mean you never feel alone or confused.",
      icon: Calendar,
      color: "#E58A65",
      bg: "bg-[#E58A65]/10",
      accent: "from-[#E58A65]/15 via-[#E58A65]/5 to-transparent",
      tilt: "hover:-rotate-1"
    },
    {
      step: "04",
      title: "Confused About Food?",
      desc: "Overwhelmed by influencer misinformation, diet fads, and contradictory health trends online.",
      solution: "Science-Backed Science",
      solDesc: "We strip away the noise. You get clear, evidence-based meal plans tailored to your specific metabolic rate and lifestyle.",
      icon: ShieldCheck,
      color: "#3F5E4A",
      bg: "bg-[#3F5E4A]/10",
      accent: "from-[#3F5E4A]/15 via-[#3F5E4A]/5 to-transparent",
      tilt: "hover:rotate-1"
    }
  ];

  return (
    <section id="about" className="py-32 relative bg-[#1A1A1A] border-y border-white/10 z-10 overflow-hidden">
      
      {/* Dynamic Ambient Background Glows inside Dark Section */}
      <div className="absolute top-[20%] left-[-150px] w-[500px] h-[500px] rounded-full bg-[#E58A65]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#3F5E4A]/8 blur-[120px] pointer-events-none" />

      {/* Decorative Subtle Dark Mesh lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(255,255,255,0.008)_1.5px,transparent_1.5px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with high-end typography layout */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#E58A65] mb-4 bg-white/5 px-4.5 py-2 rounded-full border border-white/10">
            Identify The Barrier
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem] text-white leading-none mt-2">
            Are you <span className="text-[#E58A65] relative inline-block italic">
              struggling
              <svg className="absolute bottom-[-8px] left-0 w-full h-[8px] text-[#E58A65]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span> with?
          </h2>
          <p className="mt-8 text-sm sm:text-base text-white/50 leading-relaxed font-semibold max-w-lg mx-auto">
            Hover over each roadblock to see the exact blueprint we use to solve it.
          </p>
        </div>

        {/* Dynamic Bento Cards Grid with Glassmorphic styling */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`group relative min-h-[380px] rounded-[44px] bg-white/[0.03] border border-white/10 shadow-lg shadow-black/[0.02] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-black/50 ${card.tilt} cursor-pointer flex flex-col p-8`}
            >
              {/* Decorative Subtle Grid Mesh Card Background */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />
              
              {/* Accent Gradient Corner Glow */}
              <div className={`absolute inset-0 bg-radial-gradient bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* CARD FRONT: The Struggle (default state) */}
              <div className="flex flex-col h-full z-10 transition-all duration-500 group-hover:opacity-0 group-hover:pointer-events-none group-hover:translate-y-[-10px]">
                
                {/* Step / Index */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-black tracking-widest text-white/30 font-mono uppercase">
                    Roadblock // {card.step}
                  </span>
                </div>

                {/* Styled Double Circle Icon */}
                <div className="relative mb-8 self-start">
                  <div className="absolute inset-[-4px] rounded-2xl border border-dashed border-white/10 group-hover:rotate-90 transition-transform duration-700" />
                  <div 
                    className={`h-13 w-13 rounded-2xl flex items-center justify-center ${card.bg}`}
                    style={{ color: card.color }}
                  >
                    <card.icon className="h-6 w-6 stroke-[2]" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-4 font-display text-white tracking-tight group-hover:text-[#E58A65] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-white/60 leading-relaxed font-semibold">
                  {card.desc}
                </p>

                {/* Interactive Swipe Indicator */}
                <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#E58A65] group-hover:text-white transition-colors duration-300">
                  <span>See How We Fix It</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>

              </div>

              {/* CARD BACK: The Solution (revealed on hover) */}
              <div className="absolute inset-8 flex flex-col justify-between z-25 opacity-0 pointer-events-none translate-y-[20px] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-500 delay-75">
                
                <div>
                  {/* Solved Title */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <div 
                      className="h-7 w-7 rounded-lg flex items-center justify-center text-[#F9F7F3]"
                      style={{ backgroundColor: card.color }}
                    >
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: card.color }}>
                      The Solution
                    </span>
                  </div>

                  <h4 className="text-lg font-black font-display text-white mb-3 leading-snug">
                    {card.solution}
                  </h4>
                  <p className="text-xs sm:text-[12.5px] text-white/80 leading-relaxed font-semibold">
                    {card.solDesc}
                  </p>
                </div>

                {/* Action Link indicator */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-white/40">
                  <span>Customized for you</span>
                  <span className="text-[14px] font-mono font-bold" style={{ color: card.color }}>{card.step}</span>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="h-[1px] w-16 bg-white/10" />
          <p className="text-white/45 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-center px-4 leading-relaxed max-w-xl">
            You&apos;re not alone. And you don&apos;t have to figure it out by yourself.
          </p>
        </div>
        
      </div>
    </section>
  );
}
