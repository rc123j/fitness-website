"use client";

import Image from "next/image";
import { ArrowRight, Check, Sprout, Dumbbell, MessageSquare } from "lucide-react";
import LeafIcon from "./LeafIcon";
import { motion } from "framer-motion";

export default function Approach() {
  const steps = [
    {
      step: "01",
      title: "Smarter Nutrition",
      icon: Sprout,
      bullets: [
        "Custom calorie & macro targets",
        "Flexible dieting approach",
        "100+ gourmet recipes",
        "Sustainable lifestyle habit"
      ],
      iconBg: "bg-[#3F5E4A]",
      lineColor: "bg-[#3F5E4A]",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400&h=300",
      imgClass: "w-[220px] h-[220px] mx-auto rounded-full overflow-hidden mb-6 relative border-3 border-[#F9F7F3] shadow-sm z-10"
    },
    {
      step: "02",
      title: "Personal Coaching",
      icon: Dumbbell,
      bullets: [
        "Tailored gym & home workouts",
        "Form correction video analysis",
        "Strength progress tracking",
        "Expert trainer direct access"
      ],
      iconBg: "bg-[#E58A65]",
      lineColor: "bg-[#E58A65]",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400&h=300",
      imgClass: "w-full aspect-[1.05] rounded-[42px] overflow-hidden mb-6 relative border-3 border-[#F9F7F3] shadow-sm z-10"
    },
    {
      step: "03",
      title: "Daily Support",
      icon: MessageSquare,
      bullets: [
        "24/7 direct chat coaching",
        "Weekly mindset strategy",
        "Habit progress logs",
        "Long-term exit blueprint"
      ],
      iconBg: "bg-[#8B9B73]",
      lineColor: "bg-[#8B9B73]",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400&h=300",
      imgClass: "w-full aspect-[1.05] rounded-[42px] overflow-hidden mb-6 relative border-3 border-[#F9F7F3] shadow-sm z-10"
    }
  ];

  return (
    <section id="approach" className="py-28 relative bg-[#F9F7F3] border-t border-[#1A1A1A]/12 z-10 overflow-hidden">
      
      {/* Background Leaf Decorations */}
      <div className="absolute left-[-60px] top-20 opacity-20 pointer-events-none">
        <LeafIcon className="w-[220px] h-[220px] rotate-[15deg] text-[#3F5E4A]" />
      </div>

      <div className="absolute right-[-60px] bottom-20 opacity-20 pointer-events-none">
        <LeafIcon className="w-[220px] h-[220px] -rotate-[45deg] text-[#3F5E4A]" />
      </div>

      <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Description Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#E58A65] mb-5 bg-[#E58A65]/5 border border-[#E58A65]/10 px-4.5 py-2.5 rounded-full">
              TRANSFORMATION FRAMEWORK
            </span>
            <h2 className="font-serif text-[64px] sm:text-[72px] leading-[0.95] tracking-[-0.04em] text-[#111] mb-8 mt-2">
              A Complete<br />
              System<br />
              Designed<br />
              Around <span className="text-[#E58A65] italic font-serif">You</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/65 font-medium mb-10">
              It&apos;s not about eating less or training more. It&apos;s about training smart, eating right and building habits that last.
            </p>
            <a
              href="#programs"
              className="group inline-flex items-center justify-center rounded-[999px] bg-[#3F5E4A] px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-[#F9F7F3] shadow-[0_12px_30px_rgba(63,94,74,0.25)] transition-all hover:bg-[#2E4536] hover:-translate-y-0.5 active:scale-95 border border-white/10"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Right Cards Column */}
          <div className="lg:col-span-9 flex flex-col md:flex-row gap-6 relative mt-12 lg:mt-0">
            
            {/* Floating Connectors */}
            <div className="hidden lg:block absolute top-[220px] left-[30.5%] w-[5%] h-[2px] border-t border-dashed border-[#D9D1C8] z-0 pointer-events-none" />
            <div className="hidden lg:block absolute top-[220px] left-[64.5%] w-[5%] h-[2px] border-t border-dashed border-[#D9D1C8] z-0 pointer-events-none" />

            {steps.map((step, idx) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group relative flex-1 min-h-[560px] rounded-[40px] bg-gradient-to-b from-white to-[#FCFBF8] border border-black/12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.09)] transition-all duration-500 p-8 pt-14 pb-24 flex flex-col z-10"
              >
                
                {/* Decorative Card Glow */}
                <div className="absolute -top-24 right-[-50px] h-[180px] w-[180px] rounded-full bg-[#E58A65]/10 blur-[90px] pointer-events-none" />

                {/* Top-Left Floating Icon Badge */}
                <div className={`absolute top-[-22px] left-[24px] h-12 w-12 rounded-2xl ${step.iconBg} text-white flex items-center justify-center shadow-md z-20`}>
                  <step.icon className="h-5 w-5 stroke-[2.5]" />
                </div>

                {/* Top-Right Step Indicator */}
                <span className="absolute top-[20px] right-[24px] text-[9px] font-black tracking-widest text-[#3F5E4A]/60 uppercase font-mono">
                  STEP {step.step}
                </span>

                {/* Organic Rounded Image Container */}
                <div className={step.imgClass}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="250px"
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-[38px] leading-none tracking-tight font-medium text-[#161616] z-10">
                  {step.title}
                </h3>
                
                {/* Small colored line under title */}
                <div className={`w-8 h-[2px] mt-3 mb-6 ${step.lineColor}`} />

                {/* Bullet Points */}
                <ul className="space-y-4 mt-auto z-10">
                  {step.bullets.map((bullet) => (
                    <li 
                      key={bullet} 
                      className="flex items-start text-[12px] text-[#1A1A1A]/75 font-semibold"
                    >
                      <div className="h-4.5 w-4.5 rounded-full border border-black/18 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-[#3F5E4A] stroke-[3.5]" />
                      </div>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Wave background vector gradient backdrop */}
                <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#F4F0E9] to-transparent rounded-b-[40px] pointer-events-none z-0" />

                {/* Circle Arrow Action Button */}
                <button 
                  type="button"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-white shadow-md flex items-center justify-center text-[#1A1A1A]/60 border border-black/12 hover:text-[#1A1A1A] hover:scale-105 transition-all z-10"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
