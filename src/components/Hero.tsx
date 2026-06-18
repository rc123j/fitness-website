"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Play, Star, ArrowRight, Activity, Smile } from "lucide-react";
import LeafIcon from "./LeafIcon";

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 70, damping: 15 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-12 pb-24 lg:px-8 lg:pt-20 lg:pb-36 z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12 items-center"
      >
        {/* Hero Content Left */}
        <div className="lg:col-span-7 text-center lg:text-left">
          
          {/* Small pill chip */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2.5 rounded-full bg-[#3F5E4A]/5 border border-[#3F5E4A]/18 px-4.5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#3F5E4A] mb-8"
          >
            <Award className="h-4 w-4 text-[#E58A65]" />
            <span>Coaching by <span className="text-[#E58A65] font-black font-display">Rakesh Bharti</span> | Elite Fitness & Nutrition</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="font-display text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-6xl lg:text-[4.75rem] leading-[1.05] mb-8"
          >
            Personal Coaching.<br />
            Smarter Nutrition.<br />
            <span className="text-[#E58A65] relative inline-block">
              Real Results.
              <svg className="absolute bottom-[-14px] left-0 w-full h-[12px] text-[#3F5E4A]/15" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-[1.1rem] leading-relaxed text-[#1A1A1A]/65 max-w-xl mx-auto lg:mx-0 mb-10 font-medium"
          >
            I help busy professionals lose fat, build strength and create lifelong healthy habits—without extreme diets or endless hours in the gym.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <a
              href="#contact"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#3F5E4A] px-9 py-5 text-xs font-bold uppercase tracking-widest text-[#F9F7F3] shadow-lg shadow-[#3F5E4A]/25 transition-all hover:bg-[#2E4536] hover:shadow-xl hover:translate-y-[-2px] active:scale-98 overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />
              Book Free Strategy Call
              <ArrowRight className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <button
              onClick={() => alert("Watch Video clicked!")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-[#1A1A1A]/18 bg-white/60 backdrop-blur-md px-9 py-5 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] transition-all hover:bg-white hover:border-[#1A1A1A]/30 hover:translate-y-[-1px] active:scale-98 shadow-sm"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E58A65] text-[#F9F7F3] shadow-sm animate-pulse">
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </div>
              Watch Video
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-8 border-t border-[#1A1A1A]/15 max-w-lg"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-3.5">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120&h=120"
              ].map((src, i) => (
                <div key={i} className="relative h-12 w-12 rounded-full border-3 border-[#F9F7F3] overflow-hidden shadow-sm hover:translate-y-[-3px] transition-transform cursor-pointer">
                  <Image src={src} alt="Client Avatar" fill sizes="48px" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center sm:items-start text-xs font-bold tracking-wide">
              <span className="text-[#1A1A1A]/80 text-sm">500+ Happy Clients</span>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[#1A1A1A]/50 text-[11px] font-semibold">4.9/5 Average Rating</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual Right */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center items-center">
          
          {/* Visual Leaf ornaments */}
          <LeafIcon className="absolute top-[20px] left-[-35px] w-14 h-14 rotate-12 z-20" />
          <LeafIcon className="absolute bottom-[30px] right-[-25px] w-12 h-12 -rotate-45 z-20" />

          {/* Custom Background Organic Plate */}
          <div className="absolute inset-0 bg-radial from-[#3F5E4A]/15 to-transparent rounded-[50px] filter blur-2xl transform scale-110 pointer-events-none" />

          {/* Main Visual Container */}
          <div className="relative w-full max-w-[430px] aspect-[4/5] rounded-[48px] bg-[#E1DBD2] overflow-hidden border-8 border-white shadow-2xl hover:scale-101 transition-transform duration-500 group">
            <Image
              src="/hero_coach.jpeg"
              alt="Bharti Fit Professional Coach"
              fill
              sizes="(max-width: 1024px) 100vw, 430px"
              className="object-cover transition-transform duration-1000 group-hover:scale-104"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent pointer-events-none" />
          </div>

          {/* Overlay Bowl Image Bottom-Right */}
          <div className="absolute bottom-[-25px] right-[-10px] w-[150px] h-[150px] rounded-full border-6 border-white overflow-hidden shadow-xl transform rotate-6 hover:rotate-12 transition-transform duration-500 cursor-pointer z-10">
            <Image
              src="/nutrition_bowl_hero.png"
              alt="Nutrition Plan Meal"
              fill
              sizes="150px"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Badge 1 (Top-Right) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute top-12 right-[-25px] flex items-center gap-3.5 px-5 py-3 rounded-[24px] bg-white/95 backdrop-blur-md shadow-lg border border-black/12 hover:-translate-y-1 transition-transform duration-300 z-10 cursor-default"
          >
            <div className="h-9 w-9 rounded-xl bg-[#E58A65]/10 flex items-center justify-center text-[#E58A65] shadow-sm">
              <Activity className="h-4.5 w-4.5" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-lg font-black text-[#1A1A1A] font-display">7+</span>
              <span className="block text-[9px] font-bold text-[#1A1A1A]/40 uppercase tracking-widest mt-0.5">Years Experience</span>
            </div>
          </motion.div>

          {/* Floating Badge 2 (Middle-Left) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="absolute bottom-32 left-[-30px] flex items-center gap-3.5 px-5 py-3 rounded-[24px] bg-white/95 backdrop-blur-md shadow-lg border border-black/12 hover:-translate-y-1 transition-transform duration-300 z-10 cursor-default"
          >
            <div className="h-9 w-9 rounded-xl bg-[#3F5E4A]/10 flex items-center justify-center text-[#3F5E4A] shadow-sm">
              <Smile className="h-5 w-5" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-lg font-black text-[#1A1A1A] font-display">100%</span>
              <span className="block text-[9px] font-bold text-[#1A1A1A]/40 uppercase tracking-widest mt-0.5">Personalized Plans</span>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
}
