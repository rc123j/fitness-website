"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Heart, 
  Menu, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Users, 
  X, 
  Play, 
  Calendar,
  Dumbbell,
  BookOpen,
  MessageSquare,
  Activity,
  Smile,
  Mail,
  Award,
  Zap
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
  };

  const leafHover = {
    hover: {
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F9F7F3] text-[#1A1A1A] font-sans selection:bg-[#3F5E4A] selection:text-[#F9F7F3] overflow-x-hidden">
      
      {/* Decorative Top Leaf/Blur Details */}
      <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full bg-[#3F5E4A]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#E58A65]/5 blur-[120px] pointer-events-none z-0" />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#1A1A1A]/5 bg-[#F9F7F3]/85 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3F5E4A] text-[#F9F7F3] shadow-md shadow-[#3F5E4A]/10">
              {/* Leaf Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
                <path d="M9 22v-4h4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-[#1A1A1A] leading-none">
                THRIVE
              </span>
              <span className="text-[9px] font-semibold text-[#3F5E4A] tracking-wider mt-0.5 uppercase">
                Fitness & Nutrition
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
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
                className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/70 transition-colors hover:text-[#3F5E4A] relative group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#3F5E4A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Nav CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center rounded-full bg-[#3F5E4A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F9F7F3] shadow-md transition-all hover:bg-[#2E4536] hover:shadow-lg hover:translate-y-[-1px] active:scale-95"
            >
              Book Free Call
              <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#1A1A1A]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F9F7F3] p-6 flex flex-col md:hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3F5E4A] text-[#F9F7F3]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
                  <path d="M9 22v-4h4" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-[#1A1A1A]">THRIVE</span>
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
                className="text-[#1A1A1A]/80 hover:text-[#3F5E4A] py-2 border-b border-[#1A1A1A]/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 flex items-center justify-center rounded-full bg-[#3F5E4A] py-3.5 text-xs font-bold uppercase tracking-wider text-[#F9F7F3] shadow-md"
            >
              Book Free Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative mx-auto max-w-7xl px-6 pt-8 pb-20 lg:px-8 lg:pt-12 lg:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center"
        >
          {/* Hero Content Left */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Small pill chip */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-[#3F5E4A]/5 border border-[#3F5E4A]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3F5E4A] mb-6"
            >
              <Award className="h-3.5 w-3.5" />
              Fitness Coaching & Nutrition Expert
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-6xl lg:text-[4.5rem] leading-[1.08] mb-6"
            >
              Personal Coaching.<br />
              Smarter Nutrition.<br />
              <span className="text-[#E58A65] relative inline-block">
                Real Results.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed text-[#1A1A1A]/70 max-w-xl mx-auto lg:mx-0 mb-8 font-light"
            >
              I help busy professionals lose fat, build strength and create lifelong healthy habits—without extreme diets or endless hours in the gym.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#3F5E4A] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#F9F7F3] shadow-lg shadow-[#3F5E4A]/10 transition-all hover:bg-[#2E4536] hover:shadow-xl hover:translate-y-[-1px] active:scale-98"
              >
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => alert("Watch Video clicked!")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-[#1A1A1A]/10 bg-white/40 backdrop-blur-sm px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] transition-all hover:bg-white hover:border-[#1A1A1A]/20 active:scale-98"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E58A65] text-[#F9F7F3]">
                  <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                </div>
                Watch Video
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-6 border-t border-[#1A1A1A]/5"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2.5">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100"
                ].map((src, i) => (
                  <div key={i} className="relative h-9 w-9 rounded-full border-2 border-[#F9F7F3] overflow-hidden">
                    <Image src={src} alt="Client Avatar" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start text-xs font-semibold">
                <span className="text-[#1A1A1A]">500+ Happy Clients</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[#1A1A1A]/60">4.9/5 Average Rating</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual Right */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center items-center">
            
            {/* Background Decorative Organic/Circular Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3F5E4A]/10 to-[#E58A65]/10 rounded-[48px] filter blur-xl transform scale-95 pointer-events-none" />

            {/* Main Visual Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[36px] bg-[#E1DBD2] overflow-hidden border-4 border-white shadow-xl group">
              <Image
                src="/fitness_coach_hero.png"
                alt="Thrive Professional Coach"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Overlay Bowl Image Bottom-Right */}
            <div className="absolute bottom-[-20px] right-[-15px] w-[140px] h-[140px] rounded-full border-4 border-white overflow-hidden shadow-lg transform rotate-6 hover:rotate-12 transition-transform duration-300">
              <Image
                src="/nutrition_bowl_hero.png"
                alt="Nutrition Plan Meal"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge 1 (Top-Right) */}
            <motion.div
              variants={itemVariants}
              className="absolute top-8 right-[-24px] hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white shadow-md border border-black/5 hover:translate-y-[-2px] transition-transform duration-300"
            >
              <div className="h-8 w-8 rounded-full bg-[#E58A65]/10 flex items-center justify-center text-[#E58A65]">
                <Activity className="h-4 w-4" />
              </div>
              <div className="text-left leading-none">
                <span className="block text-base font-bold text-[#1a1a1a]">7+</span>
                <span className="block text-[9px] font-semibold text-[#1a1a1a]/50 uppercase mt-0.5">Years Experience</span>
              </div>
            </motion.div>

            {/* Floating Badge 2 (Middle-Left) */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-24 left-[-24px] hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white shadow-md border border-black/5 hover:translate-y-[-2px] transition-transform duration-300"
            >
              <div className="h-8 w-8 rounded-full bg-[#3F5E4A]/10 flex items-center justify-center text-[#3F5E4A]">
                <Smile className="h-4.5 w-4.5" />
              </div>
              <div className="text-left leading-none">
                <span className="block text-base font-bold text-[#1a1a1a]">100%</span>
                <span className="block text-[9px] font-semibold text-[#1a1a1a]/50 uppercase mt-0.5">Personalized Plans</span>
              </div>
            </motion.div>

            {/* Floating Green Leaves (Ornaments) */}
            <motion.div 
              variants={leafHover}
              whileHover="hover"
              className="absolute top-1/2 right-[-45px] text-[#3F5E4A]/25 pointer-events-none hidden sm:block"
            >
              <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L7,18C12,18 15.06,15.5 17,13C18.35,11.3 18,10 17,8Z" />
              </svg>
            </motion.div>
            
          </div>
        </motion.div>
      </section>

      {/* 2. STRUGGLING SECTION */}
      <section id="about" className="py-20 relative bg-white border-t border-[#1A1A1A]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          
          {/* Section Heading */}
          <div className="max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#1a1a1a]">
              Are you <span className="text-[#E58A65]">struggling</span> with?
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {[
              {
                title: "Tried Multiple Diets?",
                desc: "Tired of restrictive diets that never last and leave you feeling frustrated.",
                icon: Heart,
                color: "#E58A65",
                bg: "#E58A65/10"
              },
              {
                title: "No Time for Fitness?",
                desc: "Busy schedule making it impossible to stay consistent with workouts.",
                icon: Users,
                color: "#3F5E4A",
                bg: "#3F5E4A/10"
              },
              {
                title: "Can't Stay Consistent?",
                desc: "Lack of guidance and accountability keeps you from seeing results.",
                icon: Calendar,
                color: "#E58A65",
                bg: "#E58A65/10"
              },
              {
                title: "Confused About Nutrition?",
                desc: "Too much information online makes it hard to know what actually works.",
                icon: ShieldCheck,
                color: "#3F5E4A",
                bg: "#3F5E4A/10"
              }
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-[28px] border border-[#1A1A1A]/5 bg-[#F9F7F3]/40 hover:bg-white hover:border-[#1A1A1A]/10 hover:shadow-xl hover:shadow-black/[0.02] transition-all duration-300 group cursor-default"
              >
                <div 
                  className="h-11 w-11 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: card.color === "#3F5E4A" ? "rgba(63,94,74,0.08)" : "rgba(229,138,101,0.08)", color: card.color }}
                >
                  <card.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-lg font-bold mb-3 font-display text-[#1a1a1a]">{card.title}</h3>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed font-light">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-[#1a1a1a]/60 text-sm font-semibold tracking-wide">
            You&apos;re not alone. And you don&apos;t have to figure it out by yourself.
          </p>
        </div>
      </section>

      {/* 3. APPROACH / FRAMEWORK SECTION */}
      <section id="approach" className="py-20 relative bg-[#F9F7F3] border-t border-[#1A1A1A]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#E58A65] mb-4">
                My Transformation Framework
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#1a1a1a] mb-6 leading-tight">
                A Complete System Designed Around <span className="text-[#E58A65]">You</span>
              </h2>
              <p className="text-base leading-relaxed text-[#1A1A1A]/70 font-light mb-8">
                It&apos;s not about eating less or training more. It&apos;s about training smart, eating right and building habits that last.
              </p>
              <a
                href="#programs"
                className="group inline-flex items-center justify-center rounded-full bg-[#3F5E4A] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F9F7F3] shadow-md transition-all hover:bg-[#2E4536] hover:translate-y-[-1px] active:scale-98"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right Cards Column (3 interconnected cards) */}
            <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 relative">
              
              {/* Optional Dashed Connection Path (Hidden on Mobile) */}
              <div className="absolute top-[28%] left-[20%] right-[20%] h-px border-t border-dashed border-[#3F5E4A]/20 z-0 hidden md:block" />

              {[
                {
                  step: "01",
                  title: "Personalized Nutrition",
                  icon: Sparkles,
                  bullets: ["Custom meal plans", "Flexible approach", "Foods you enjoy", "Sustainable for life"],
                  bgColor: "bg-[#3F5E4A]",
                  imageBg: "from-emerald-500/10 to-teal-500/10"
                },
                {
                  step: "02",
                  title: "Personal Coaching",
                  icon: Dumbbell,
                  bullets: ["Tailored workouts", "Weekly check-ins", "Progress tracking", "Expert guidance"],
                  bgColor: "bg-[#E58A65]",
                  imageBg: "from-orange-500/10 to-amber-500/10"
                },
                {
                  step: "03",
                  title: "Accountability & Support",
                  icon: MessageSquare,
                  bullets: ["24/7 support", "Habit building", "Motivation", "Long-term results"],
                  bgColor: "bg-[#3F5E4A]",
                  imageBg: "from-blue-500/10 to-indigo-500/10"
                }
              ].map((step, idx) => (
                <div 
                  key={step.title}
                  className="flex-1 rounded-[28px] bg-white border border-[#1A1A1A]/5 shadow-sm p-6 flex flex-col relative z-10 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Step Badge / Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`h-9 w-9 rounded-xl ${step.bgColor} text-white flex items-center justify-center`}>
                      <step.icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-xs font-bold text-[#1A1A1A]/30">Step {step.step}</span>
                  </div>

                  {/* Empty/Placeholder Image Box with nice gradient styling */}
                  <div className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-tr ${step.imageBg} border border-[#1A1A1A]/5 mb-5 flex items-center justify-center`}>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#1a1a1a]/30">
                      Visual Asset
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-4 leading-tight">{step.title}</h3>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mt-auto">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start text-xs text-[#1A1A1A]/70 font-light">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#3F5E4A] mr-2 shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* 4. RESULTS / TRANSFORMATIONS */}
      <section id="results" className="py-20 relative bg-white border-t border-[#1A1A1A]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          
          {/* Section Heading */}
          <div className="max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#1a1a1a]">
              Real People. Real <span className="text-[#E58A65]">Transformations</span>.
            </h2>
          </div>

          {/* Transformation Slides */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-thin scrollbar-thumb-forest scrollbar-track-transparent">
            {[
              { kg: "-18 KG", desc: "Fat Loss in 3 Months", sex: "Male", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=300&h=350" },
              { kg: "-14 KG", desc: "Fat Loss in 4 Months", sex: "Female", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=300&h=350" },
              { kg: "+7 KG", desc: "Muscle Gain in 4 Months", sex: "Male", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=300&h=350" },
              { kg: "-12 KG", desc: "Fat Loss in 5 Months", sex: "Female", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=300&h=350" },
              { kg: "-10 KG", desc: "Fat Loss in 4 Months", sex: "Male", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=300&h=350" }
            ].map((client, idx) => (
              <div 
                key={idx}
                className="w-[280px] shrink-0 bg-[#F9F7F3]/40 border border-[#1A1A1A]/5 rounded-[28px] p-4 snap-center flex flex-col hover:shadow-md hover:translate-y-[-2px] transition-all duration-300"
              >
                {/* Before/After Placeholder/Image */}
                <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#3F5E4A]/5 to-[#3F5E4A]/10 border border-[#1a1a1a]/5 overflow-hidden relative mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#1a1a1a]/30 uppercase">
                    Before / After Split
                  </div>
                  {/* Real image background overlay for visual richness */}
                  <Image
                    src={client.img}
                    alt="Transformation"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay"
                  />
                  {/* Subtle Split Divider Label */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#3F5E4A] text-white text-[9px] font-bold uppercase tracking-wider leading-none">
                    Before
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#E58A65] text-white text-[9px] font-bold uppercase tracking-wider leading-none">
                    After
                  </div>
                </div>

                {/* Metrics */}
                <div className="text-center mt-2">
                  <span className="block text-2xl font-black text-[#1a1a1a] font-display leading-none">{client.kg}</span>
                  <span className="block text-xs font-semibold text-[#1a1a1a]/50 mt-1.5">{client.desc}</span>
                  <div className="flex justify-center text-amber-500 gap-0.5 mt-2.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#programs"
              className="group inline-flex items-center justify-center rounded-full bg-[#3F5E4A] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F9F7F3] shadow-md transition-all hover:bg-[#2E4536] hover:translate-y-[-1px] active:scale-98"
            >
              See More Transformations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </section>

      {/* 5. PROGRAMS / WHAT YOU GET SECTION */}
      <section id="programs" className="py-20 relative bg-[#F9F7F3] border-t border-[#1A1A1A]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Title */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#1a1a1a] leading-tight">
              What You Get <br className="sm:hidden" />
              <span className="text-[#E58A65]">Inside My Programs</span>
            </h2>
          </div>

          {/* Three Column Details Layout with Center Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Items Column */}
            <div className="lg:col-span-4 space-y-8">
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
                <div key={item.title} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-[#3F5E4A]/10 text-[#3F5E4A] flex items-center justify-center">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1A1A1A] mb-1.5">{item.title}</h3>
                    <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Nutrition Bowl Container */}
            <div className="lg:col-span-4 flex justify-center py-6 lg:py-0 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3F5E4A]/10 to-[#E58A65]/10 rounded-full filter blur-xl transform scale-75 pointer-events-none" />
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border-4 border-white shadow-xl overflow-hidden hover:scale-102 transition-transform duration-500">
                <Image
                  src="/nutrition_bowl_hero.png"
                  alt="Gourmet Tailored Recipe Plate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Items Column */}
            <div className="lg:col-span-4 space-y-8">
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
                <div key={item.title} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-[#E58A65]/10 text-[#E58A65] flex items-center justify-center">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1A1A1A] mb-1.5">{item.title}</h3>
                    <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS / WHAT CLIENTS SAY */}
      <section id="reviews" className="py-20 relative bg-white border-t border-[#1A1A1A]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#1a1a1a]">
              What My <span className="text-[#3F5E4A]">Clients Say</span>
            </h2>
          </div>

          {/* Testimonial Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "I've tried every diet out there, but nothing worked until I joined this program. I lost 14 kg and finally feel confident in my body again!",
                author: "Riya Sharma",
                title: "Marketing Manager",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                quote: "The personalized approach and constant support made all the difference. I gained 7 kg of muscle and built habits that'll follow for life.",
                author: "Arjun Mehta",
                title: "Software Engineer",
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                quote: "It's not just about weight loss, it's about becoming a healthier, happier and stronger version of yourself. Highly recommend!",
                author: "Neha Patel",
                title: "Entrepreneur",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
              }
            ].map((testimonial) => (
              <div 
                key={testimonial.author}
                className="p-8 rounded-[28px] border border-[#1A1A1A]/5 bg-[#F9F7F3]/40 hover:bg-white hover:border-[#1A1A1A]/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Review Text */}
                <div>
                  <div className="text-amber-500 flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm italic text-[#1A1A1A]/70 leading-relaxed font-light mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#1a1a1a]/5">
                  <div className="relative h-9 w-9 rounded-full overflow-hidden shrink-0 border border-white">
                    <Image src={testimonial.img} alt={testimonial.author} fill className="object-cover" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-[#1A1A1A] leading-none">{testimonial.author}</span>
                    <span className="block text-[10px] text-[#1A1A1A]/40 mt-1 font-semibold">{testimonial.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CREDENTIALS SECTION */}
      <section className="py-12 bg-[#F9F7F3] border-t border-[#1A1A1A]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center items-center opacity-70">
            {[
              { title: "NASM", desc: "Certified Coach" },
              { title: "ISSN", desc: "Sports Nutrition Specialist" },
              { title: "ACE", desc: "Certified Personal Trainer" },
              { title: "Precision Nutrition", desc: "Level 1 Certified" },
              { title: "7+ Years", desc: "Coaching Experience" }
            ].map((badge) => (
              <div key={badge.title} className="flex flex-col items-center justify-center p-3">
                <div className="h-8 w-8 rounded-full bg-[#3F5E4A]/10 text-[#3F5E4A] flex items-center justify-center mb-2">
                  <Award className="h-4 w-4" />
                </div>
                <span className="block text-xs font-extrabold text-[#1a1a1a] uppercase tracking-wide leading-none">{badge.title}</span>
                <span className="block text-[9px] font-semibold text-[#1a1a1a]/50 mt-1 leading-none">{badge.desc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section id="faq" className="py-20 bg-white border-t border-[#1A1A1A]/5">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#1a1a1a]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What does the 1-on-1 coaching involve?",
                a: "Our coaching includes customized nutrition meal profiling, tailored gym or home workout designs, weekly check-in strategy calls, and direct daily accountability support via WhatsApp."
              },
              {
                q: "Do I have to follow a strict calorie count or meal plan?",
                a: "No! We focus on lifestyle-friendly, flexible nutrition where you eat foods you actually enjoy while meeting your macro-nutrient profiles for consistent results."
              },
              {
                q: "How long does it take to see sustainable progress?",
                a: "Most clients notice increased energy levels and initial physical changes within the first 2-4 weeks, with solid long-term transformations occurring within 12 weeks."
              },
              {
                q: "Can I do the workout programs from home?",
                a: "Absolutely. We build programs that work around your equipment access, whether that is a full commercial gym setup or simple home-based bands and dumbbells."
              }
            ].map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-[#1A1A1A]/5 bg-[#F9F7F3]/20 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-5 text-sm font-bold text-[#1A1A1A] cursor-pointer list-none">
                    {faq.q}
                    <span className="transition-transform group-open:rotate-180 text-[#3F5E4A]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-5 pt-0 text-xs sm:text-sm text-[#1A1A1A]/60 leading-relaxed font-light border-t border-[#1A1A1A]/5 bg-white">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section id="contact" className="py-20 relative bg-[#F9F7F3]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          
          {/* Card Frame */}
          <div className="relative rounded-[40px] bg-[#3F5E4A] text-white p-8 sm:p-14 overflow-hidden shadow-2xl border-4 border-white flex flex-col items-center text-center">
            
            {/* Soft Warm Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3F5E4A] via-transparent to-[#E58A65]/20 pointer-events-none z-0" />

            <div className="relative z-10 max-w-xl">
              <h2 className="font-display text-3xl font-extrabold sm:text-5xl tracking-tight leading-tight mb-4 text-white">
                Ready to Transform Your Body & Life?
              </h2>
              <p className="text-sm sm:text-base text-white/80 font-light mb-8 max-w-md mx-auto">
                Book your free strategy call and let&apos;s create your personalized plan for success.
              </p>
              
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-[#E58A65] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-black/10 transition-all hover:bg-[#d47854] hover:scale-102 active:scale-98"
              >
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Badges row below */}
            <div className="relative z-10 grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10 w-full max-w-md">
              <div>
                <span className="block text-xl sm:text-2xl font-black font-display leading-none text-white">500+</span>
                <span className="block text-[9px] font-semibold text-white/60 mt-1 uppercase tracking-wider">Clients Helped</span>
              </div>
              <div className="border-l border-white/10 pl-2">
                <span className="block text-xl sm:text-2xl font-black font-display leading-none text-white">4.9/5</span>
                <span className="block text-[9px] font-semibold text-white/60 mt-1 uppercase tracking-wider">Average Rating</span>
              </div>
              <div className="border-l border-white/10 pl-2">
                <span className="block text-xl sm:text-2xl font-black font-display leading-none text-white">100%</span>
                <span className="block text-[9px] font-semibold text-white/60 mt-1 uppercase tracking-wider">Personalized</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#1A1A1A] text-white py-14 border-t border-white/5 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
                <path d="M9 22v-4h4" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-lg font-bold tracking-tight leading-none text-white">
                THRIVE
              </span>
              <span className="text-[8px] font-semibold text-white/50 tracking-wider mt-0.5 uppercase">
                Fitness & Nutrition
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
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
                className="text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-5 mb-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3v6z"/></svg>
            </a>
            <a 
              href="mailto:info@thrive.com" 
              className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright */}
          <span className="text-[10px] text-white/30 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} THRIVE Fitness & Nutrition. All rights reserved.
          </span>

        </div>
      </footer>

    </div>
  );
}
