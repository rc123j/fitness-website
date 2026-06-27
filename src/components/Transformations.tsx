"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Star, CheckCircle, User } from "lucide-react";
import LeafIcon from "./LeafIcon";
import { motion } from "framer-motion";

export default function Transformations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const clients = [
    {
      kg: "-18", unit: "KG", period: "In 3 Months",
      category: "Fat Loss", duration: "Lost in 12 Weeks",
      image: "/transformation_1.png"
    },
    {
      kg: "-14", unit: "KG", period: "In 4 Months",
      category: "Fat Loss", duration: "Lost in 16 Weeks",
      image: "/transformation_2.png"
    },
    {
      kg: "+7", unit: "KG", period: "In 4 Months",
      category: "Muscle Gain", duration: "Gained in 16 Weeks",
      image: "/transformation_3.png"
    },
    {
      kg: "-12", unit: "KG", period: "In 5 Months",
      category: "Fat Loss", duration: "Lost in 20 Weeks",
      image: "/transformation_4.png"
    },
    {
      kg: "-10", unit: "KG", period: "In 3 Months",
      category: "Fat Loss", duration: "Lost in 10 Weeks",
      image: "/transformation_5.png"
    }
  ];

  return (
    <section id="results" className="py-28 relative bg-white border-t border-[#1A1A1A]/12 z-10 overflow-hidden">

      {/* Leaf Decorations */}
      <div className="absolute left-[-20px] top-[40%] opacity-40 pointer-events-none">
        <LeafIcon className="w-[110px] h-[110px] rotate-[20deg] text-[#3F5E4A]" />
      </div>
      <div className="absolute right-[-20px] bottom-[20%] opacity-40 pointer-events-none">
        <LeafIcon className="w-[110px] h-[110px] -rotate-[20deg] text-[#3F5E4A]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-black/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E58A65] mb-6 shadow-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-[#E58A65] animate-pulse" />
            Real Results
          </div>
          <h2 className="font-serif text-5xl sm:text-[62px] lg:text-[70px] leading-[1.0] tracking-[-0.03em] text-[#111] mb-5">
            Real People. Real{" "}
            <span className="text-[#E58A65] italic">Transformations</span>.
          </h2>
          <p className="text-sm text-[#1A1A1A]/55 font-medium">
            Proven results from real clients who trusted the process and transformed their lives.
          </p>
        </motion.div>

        {/* Cards Slider with aligned nav buttons */}
        <div className="relative flex items-center gap-4">

          {/* Left Nav Button */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex shrink-0 h-11 w-11 items-center justify-center rounded-full bg-white border border-black/18 shadow-lg text-[#1A1A1A]/60 hover:bg-[#F9F7F3] hover:text-[#1A1A1A] hover:shadow-xl cursor-pointer transition-all active:scale-95 z-20"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Scrollable Cards Row */}
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none py-3 flex-1"
          >
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="w-[255px] shrink-0 snap-start flex flex-col bg-white rounded-[28px] border border-black/12 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-400 overflow-hidden group cursor-pointer"
              >
                {/* Before/After Split Image */}
                <div className="relative h-[270px] overflow-hidden">

                  {/* BEFORE half (left) */}
                  <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                    <Image
                      src={client.image}
                      fill
                      sizes="128px"
                      className="object-cover object-left scale-100"
                      alt="Before"
                    />
                  </div>

                  {/* AFTER half (right) */}
                  <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
                    <Image
                      src={client.image}
                      fill
                      sizes="128px"
                      className="object-cover object-right scale-100"
                      alt="After"
                    />
                  </div>

                  {/* Vertical Center Divider */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10 pointer-events-none">
                    <div className="absolute inset-y-0 w-[1.5px] bg-white/80" />
                    <div className="relative h-7 w-7 rounded-full bg-white/90 shadow-md flex items-center justify-center border border-black/12 text-[8px] font-black text-[#1A1A1A]/50">
                      &lt;&gt;
                    </div>
                  </div>

                  {/* Top-Right KG Badge */}
                  <div className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow-lg border border-black/10 text-right">
                    <span className="block text-[22px] font-black leading-none text-[#1A1A1A] tracking-tight">{client.kg}</span>
                    <span className="block text-[8px] font-black text-[#1A1A1A]/50 leading-none tracking-widest uppercase">{client.unit}</span>
                    <span className="block text-[7px] font-bold text-[#1A1A1A]/40 leading-none tracking-wider uppercase mt-0.5">{client.period}</span>
                  </div>

                  {/* Before / After Labels */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <span className="inline-block bg-[#3F5E4A] text-white text-[7px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      Before
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 z-20">
                    <span className="inline-block bg-[#E58A65] text-white text-[7px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      After
                    </span>
                  </div>
                </div>

                {/* Card Info Body */}
                <div className="p-4 flex flex-col gap-3">
                  {/* Category + Duration */}
                  <div className="flex items-start gap-2.5">
                    <div className="h-7 w-7 rounded-full bg-[#3F5E4A]/8 text-[#3F5E4A] flex items-center justify-center shrink-0 mt-0.5">
                      <User className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="block text-[13px] font-bold text-[#1A1A1A] leading-none">{client.category}</span>
                      <span className="block text-[10px] text-[#1A1A1A]/50 font-semibold mt-1">{client.duration}</span>
                    </div>
                  </div>
                  <div className="h-[1px] bg-black/[0.04]" />
                  {/* Verified + Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="h-3.5 w-3.5 text-[#3F5E4A] fill-[#3F5E4A]" style={{ color: "white" }} />
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#1A1A1A]/55">Verified Result</span>
                    </div>
                    <div className="flex text-[#E58A65] gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Nav Button */}
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex shrink-0 h-11 w-11 items-center justify-center rounded-full bg-white border border-black/18 shadow-lg text-[#1A1A1A]/60 hover:bg-[#F9F7F3] hover:text-[#1A1A1A] hover:shadow-xl cursor-pointer transition-all active:scale-95 z-20"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          {/* <a
            href="#contact"
            className="group relative inline-flex items-center justify-center rounded-full bg-[#3F5E4A] px-9 py-4 text-[11px] font-bold uppercase tracking-widest text-[#F9F7F3] shadow-[0_15px_40px_rgba(63,94,74,0.25)] transition-all hover:bg-[#2E4536] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />
            See More Transformations
            <ArrowRight className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a> */}
          <div className="flex items-center gap-1.5 text-[10px] text-[#1A1A1A]/40 font-semibold">
            <CheckCircle className="h-3 w-3 text-[#3F5E4A]" />
            Real People. Real Results. Real Stories.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
