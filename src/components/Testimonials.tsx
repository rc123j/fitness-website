"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-28 relative bg-white border-t border-[#1A1A1A]/5 z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-[#1a1a1a]">
            What My <span className="text-[#3F5E4A]">Clients Say</span>
          </h2>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "I've tried every diet out there, but nothing worked until I joined this program. I lost 14 kg and finally feel confident in my body again!",
              author: "Riya Sharma",
              title: "Marketing Manager",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120"
            },
            {
              quote: "The personalized approach and constant support made all the difference. I gained 7 kg of muscle and built habits that'll follow for life.",
              author: "Arjun Mehta",
              title: "Software Engineer",
              img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120&h=120"
            },
            {
              quote: "It's not just about weight loss, it's about becoming a healthier, happier and stronger version of yourself. Highly recommend!",
              author: "Neha Patel",
              title: "Entrepreneur",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
            }
          ].map((testimonial) => (
            <div 
              key={testimonial.author}
              className="relative p-8 rounded-[36px] border border-black/5 bg-[#F9F7F3]/40 hover:bg-white hover:border-[#1A1A1A]/8 hover:shadow-2xl hover:shadow-black/[0.02] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Decorative Quotes Mark in card background */}
              <div className="absolute top-6 right-8 text-[#3F5E4A]/8 text-[5rem] font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              <div>
                {/* Rating Stars */}
                <div className="text-amber-500 flex gap-0.5 mb-6 z-10 relative">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                
                {/* Quote content */}
                <p className="text-sm italic text-[#1A1A1A]/75 leading-relaxed font-medium mb-8 z-10 relative">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-[#1a1a1a]/5 z-10 relative">
                <div className="relative h-11 w-11 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                  <Image src={testimonial.img} alt={testimonial.author} fill sizes="40px" className="object-cover" />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-[#1A1A1A] leading-none">{testimonial.author}</span>
                  <span className="block text-[10px] text-[#1A1A1A]/40 mt-1.5 font-bold uppercase tracking-wider">{testimonial.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
