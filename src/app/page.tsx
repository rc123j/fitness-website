"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Struggling from "../components/Struggling";
import Approach from "../components/Approach";
import Transformations from "../components/Transformations";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";
import Credentials from "../components/Credentials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LeafIcon from "../components/LeafIcon";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F9F7F3] text-[#1A1A1A] font-sans selection:bg-[#3F5E4A] selection:text-[#F9F7F3] overflow-x-hidden antialiased">
      
      {/* Ambient Radial Lighting for Premium Depth */}
      <div className="absolute top-[-150px] right-[-100px] w-[700px] h-[700px] rounded-full bg-radial from-[#3F5E4A]/8 via-[#3F5E4A]/2 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[-250px] w-[700px] h-[700px] rounded-full bg-radial from-[#E58A65]/8 via-transparent to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-200px] w-[600px] h-[600px] rounded-full bg-radial from-[#3F5E4A]/6 via-transparent to-transparent blur-3xl pointer-events-none z-0" />
      
      {/* Background Dotted Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.015)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(26,26,26,0.015)_1.5px,transparent_1.5px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Floating Decorative Leaf Accents */}
      <LeafIcon className="absolute top-[16%] left-[3%] w-14 h-14 rotate-45 opacity-20 hidden lg:block" />
      <LeafIcon className="absolute top-[45%] right-[2%] w-16 h-16 -rotate-90 opacity-25 hidden lg:block" />
      <LeafIcon className="absolute bottom-[35%] left-[2%] w-12 h-12 rotate-12 opacity-15 hidden lg:block" />
      <LeafIcon className="absolute bottom-[6%] right-[4%] w-14 h-14 rotate-45 opacity-20 hidden lg:block" />

      <Navbar />
      <main>
        <Hero />
        <Struggling />
        <Approach />
        <Transformations />
        <Programs />
        <Testimonials />
        <Credentials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
