"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Users, Star, TrendingUp, Clock } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Credentials() {
  const stats: StatItem[] = [
    {
      value: 500,
      suffix: "+",
      label: "Happy Clients",
      sublabel: "Transformations Delivered",
      icon: Users,
      color: "text-[#3F5E4A]",
      bg: "bg-[#3F5E4A]/10"
    },
    {
      value: 7,
      suffix: "+",
      label: "Years Experience",
      sublabel: "Elite Coaching Expertise",
      icon: Clock,
      color: "text-[#E58A65]",
      bg: "bg-[#E58A65]/10"
    },
    {
      value: 98,
      suffix: "%",
      label: "Success Rate",
      sublabel: "Goal Achievement Score",
      icon: TrendingUp,
      color: "text-[#3F5E4A]",
      bg: "bg-[#3F5E4A]/10"
    },
    {
      value: 4,
      suffix: "+",
      label: "Certifications",
      sublabel: "NASM · ISSN · ACE · PN",
      icon: Award,
      color: "text-[#E58A65]",
      bg: "bg-[#E58A65]/10"
    },
    {
      value: 49,
      suffix: "/5",
      label: "Avg. Rating",
      sublabel: "Verified Client Reviews",
      icon: Star,
      color: "text-[#3F5E4A]",
      bg: "bg-[#3F5E4A]/10"
    }
  ];

  return (
    <section className="relative py-24 bg-[#1A1A1A] z-10 overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute top-[-80px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#3F5E4A]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#E58A65]/8 blur-[100px] pointer-events-none" />

      {/* Fine mesh grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        {/* Section Label */}
        <div className="text-center mb-14">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-2">
            Credentials & Results
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
            Numbers That <span className="text-[#E58A65] italic">Speak for Themselves</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-center p-7 rounded-[32px] bg-white/[0.03] border border-white/8 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/15 hover:-translate-y-1.5 transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Background number watermark */}
              <span className="absolute bottom-3 right-4 text-[4rem] font-black text-white/[0.02] font-display leading-none select-none pointer-events-none">
                {idx + 1}
              </span>

              {/* Icon */}
              <div className={`h-12 w-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                <stat.icon className="h-5.5 w-5.5 stroke-[2]" />
              </div>

              {/* Animated Number */}
              <div className={`text-[2.4rem] font-black font-display leading-none tracking-tight mb-3 ${stat.color}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <span className="block text-[13px] font-bold text-white leading-none mb-2">
                {stat.label}
              </span>

              {/* Sublabel */}
              <span className="block text-[10px] font-semibold text-white/35 uppercase tracking-widest leading-snug">
                {stat.sublabel}
              </span>

              {/* Bottom colored line accent */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] ${stat.color.replace("text-", "bg-")} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Certification Logos / Text Row */}
        <div className="mt-14 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-x-10 gap-y-4 items-center">
          {["NASM Certified", "ISSN Nutrition", "ACE Trainer", "Precision Nutrition L1", "7+ Years Elite Coaching"].map((cert) => (
            <span key={cert} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/25 hover:text-white/50 transition-colors duration-300 cursor-default">
              {cert}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
