"use client";

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-white border-t border-[#1A1A1A]/12 z-10">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-[#1a1a1a]">
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
              className="rounded-3xl border border-[#1A1A1A]/14 bg-[#F9F7F3]/15 overflow-hidden transition-all duration-300 hover:border-black/20 hover:shadow-md"
            >
              <details className="group">
                <summary className="flex items-center justify-between p-6 text-sm font-bold text-[#1A1A1A] cursor-pointer list-none select-none">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180 text-[#3F5E4A] h-5 w-5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 text-xs sm:text-sm text-[#1A1A1A]/65 leading-relaxed font-semibold border-t border-[#1A1A1A]/12 bg-white">
                  {faq.a}
                </div>
              </details>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
