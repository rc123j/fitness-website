"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, Send, CheckCircle2, ChevronDown } from "lucide-react";
import LeafIcon from "./LeafIcon";

function Instagram(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Failed to submit. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-[#F9F7F3] border-t border-[#1A1A1A]/12 z-10 overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute top-[-80px] right-[-80px] w-[450px] h-[450px] rounded-full bg-[#3F5E4A]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[450px] h-[450px] rounded-full bg-[#E58A65]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] left-[-40px] pointer-events-none opacity-20">
        <LeafIcon className="w-[160px] h-[160px] rotate-[30deg] text-[#3F5E4A]" />
      </div>
      <div className="absolute bottom-[10%] right-[-40px] pointer-events-none opacity-20">
        <LeafIcon className="w-[160px] h-[160px] -rotate-[20deg] text-[#3F5E4A]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Info Column */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#E58A65] mb-5 bg-[#E58A65]/5 border border-[#E58A65]/10 px-4 py-2 rounded-full">
              Book Your Free Call
            </span>
            <h2 className="font-serif text-[52px] sm:text-[64px] leading-[0.95] tracking-[-0.03em] text-[#111] mb-6 mt-2">
              Let&apos;s Build<br />
              Your <span className="text-[#E58A65] italic">Dream</span><br />
              Body Together.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#1A1A1A]/60 font-medium mb-10 max-w-md">
              Take the first step today. Book a free 30-minute strategy call and get a custom plan built around your body, lifestyle and goals.
            </p>

            {/* Contact Info Tiles */}
            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: Mail, label: "Email Us", value: "support@fitwithdeveloper.com", href: "mailto:support@fitwithdeveloper.com" },
                { icon: Phone, label: "Call / WhatsApp", value: "+91 9960003179", href: "tel:+919960003179" },
                { icon: Instagram, label: "Instagram DM", value: "@fit_with_developer", href: "https://www.instagram.com/fit_with_developer/" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/12 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group text-left"
                >
                  <div className="h-11 w-11 rounded-2xl bg-[#3F5E4A]/8 text-[#3F5E4A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 mb-0.5">{item.label}</span>
                    <span className="block text-sm font-bold text-[#1A1A1A]">{item.value}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#1A1A1A]/20 ml-auto group-hover:text-[#3F5E4A] group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {["Free Strategy Call", "No Commitment", "Personalized Plan", "Expert Coach"].map((tag) => (
                <div key={tag} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#3F5E4A]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Column */}
          <div className="relative">
            <div className="bg-white rounded-[44px] border border-black/12 shadow-[0_24px_80px_rgba(0,0,0,0.05)] p-8 sm:p-10">

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
                  <div className="h-20 w-20 rounded-full bg-[#3F5E4A]/10 text-[#3F5E4A] flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#1A1A1A]">You&apos;re Booked In!</h3>
                  <p className="text-sm text-[#1A1A1A]/60 max-w-sm leading-relaxed">
                    Thanks! We&apos;ll reach out within 24 hours to confirm your free strategy call. Get ready to transform.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#1A1A1A] mb-1">Book Your Free Call</h3>
                    <p className="text-xs text-[#1A1A1A]/50 font-semibold">Fill in your details and we&apos;ll get back to you within 24 hours.</p>
                  </div>

                  <div className="h-[1px] bg-black/10" />

                  {error && (
                    <div className="text-xs font-bold text-red-600 bg-red-50 border border-red-200/50 p-4.5 rounded-2xl">
                      {error}
                    </div>
                  )}

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/50">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        disabled={loading}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-2xl border border-black/16 bg-[#F9F7F3] px-4 py-3.5 text-sm font-semibold text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#3F5E4A]/50 focus:ring-2 focus:ring-[#3F5E4A]/10 transition-all disabled:opacity-60"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/50">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        disabled={loading}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-2xl border border-black/16 bg-[#F9F7F3] px-4 py-3.5 text-sm font-semibold text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#3F5E4A]/50 focus:ring-2 focus:ring-[#3F5E4A]/10 transition-all disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/50">WhatsApp / Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={form.phone}
                      disabled={loading}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-2xl border border-black/16 bg-[#F9F7F3] px-4 py-3.5 text-sm font-semibold text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#3F5E4A]/50 focus:ring-2 focus:ring-[#3F5E4A]/10 transition-all disabled:opacity-60"
                    />
                  </div>

                  {/* Goal */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/50">Primary Goal</label>
                    <div className="relative w-full">
                      <select
                        required
                        value={form.goal}
                        disabled={loading}
                        onChange={(e) => setForm({ ...form, goal: e.target.value })}
                        className="w-full rounded-2xl border border-black/16 bg-[#F9F7F3] pl-4 pr-10 py-3.5 text-sm font-semibold text-[#1A1A1A] focus:outline-none focus:border-[#3F5E4A]/50 focus:ring-2 focus:ring-[#3F5E4A]/10 transition-all appearance-none disabled:opacity-60"
                      >
                        <option value="" disabled>Select your main goal...</option>
                        <option value="fat-loss">Fat Loss</option>
                        <option value="muscle-gain">Muscle Gain</option>
                        <option value="body-recomp">Body Recomposition</option>
                        <option value="nutrition">Nutrition & Diet Coaching</option>
                        <option value="lifestyle">General Fitness & Lifestyle</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#1A1A1A]/40">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/50">Anything else?</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us a bit about your current situation..."
                      value={form.message}
                      disabled={loading}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-2xl border border-black/16 bg-[#F9F7F3] px-4 py-3.5 text-sm font-semibold text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#3F5E4A]/50 focus:ring-2 focus:ring-[#3F5E4A]/10 transition-all resize-none disabled:opacity-60"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex items-center justify-center gap-2.5 rounded-2xl bg-[#3F5E4A] py-4 text-xs font-bold uppercase tracking-widest text-[#F9F7F3] shadow-[0_12px_30px_rgba(63,94,74,0.25)] hover:bg-[#2E4536] hover:-translate-y-0.5 active:scale-98 transition-all duration-300 overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />
                    {loading ? "Sending Lead..." : "Book My Free Strategy Call"}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-center text-[10px] text-[#1A1A1A]/35 font-semibold">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
