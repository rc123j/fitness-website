"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Dumbbell,
  HeartPulse,
  Flame,
  Sprout,
  Activity,
  Award,
} from "lucide-react";

interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  accentColor: string;
  topics: string[];
  image: string;
}

export default function Certifications() {
  const certifications: CertificationItem[] = [
    {
      title: "Special Population Workshop",
      issuer: "Intellectual Fitness & Sports Academy (IFSA)",
      description:
        "Advanced training protocols tailored for clients with special health needs, chronic conditions, structural imbalances, age-related needs, or pre/postnatal safety considerations.",
      icon: Users,
      iconColor: "text-[#3F5E4A]",
      accentColor: "from-[#3F5E4A] to-[#608B71]",
      topics: ["Chronic Conditions", "Geriatric Exercise", "Pre & Postnatal", "Injury Rehab"],
      image: "/certificate/cert-v2-3.jpeg",
    },
    {
      title: "Advanced Personal Trainer",
      issuer: "Intellectual Fitness & Sports Academy (IFSA)",
      description:
        "Mastery of biomechanical principles, advanced program design, athletic profiling, and customized periodization to maximize muscular strength and hypertrophic responses.",
      icon: Dumbbell,
      iconColor: "text-[#E58A65]",
      accentColor: "from-[#E58A65] to-[#F1A98A]",
      topics: ["Biomechanical Science", "Custom Programming", "Strength Periodization", "Form Assessment"],
      image: "/certificate/cert-v2-1.jpeg",
    },
    {
      title: "Personal Fitness Trainer Workshop",
      issuer: "Intellectual Fitness & Sports Academy (IFSA)",
      description:
        "Elite workshop focused on structural assessment, exercise biomechanics, movement screening, and practical exercise execution protocols.",
      icon: Award,
      iconColor: "text-[#3F5E4A]",
      accentColor: "from-[#3F5E4A] to-[#608B71]",
      topics: ["Anatomy & Physiology", "Bio-energetics", "Movement Screening", "Practical Form"],
      image: "/certificate/cert-v2-2.jpeg",
    },
    {
      title: "CPR & AED Certification",
      issuer: "Ashoka Medicover Hospitals, Nashik",
      description:
        "Certified safety-first responder, trained in basic life support, emergency cardiac care, and AED protocols to ensure an absolutely secure training environment.",
      icon: HeartPulse,
      iconColor: "text-[#E53E3E]",
      accentColor: "from-[#E53E3E] to-[#F56565]",
      topics: ["First Aid Protocols", "Emergency Support", "AED Operations", "Client Safety Care"],
      image: "/certificate/cert-v2-4.jpeg",
    },
    {
      title: "Weight Management Specialist",
      issuer: "ProPower Fitness Academy",
      description:
        "Scientific coaching methodologies for sustainable body recomposition, metabolic speed acceleration, thyroid/endocrine support, and permanent behavioral habits.",
      icon: Flame,
      iconColor: "text-[#E58A65]",
      accentColor: "from-[#E58A65] to-[#F1A98A]",
      topics: ["Metabolic Balancing", "Body Recomposition", "Habit Conditioning", "Energy Expenditure"],
      image: "/certificate/nutrition_weight_management.jpeg",
    },
    {
      title: "Dietetics and Nutrition",
      issuer: "ProPower Fitness Academy",
      description:
        "Advanced meal plan curation, clinical food biochemistry, insulin management, and disease-prevention dietary strategies customized to individual gut health and biological markers.",
      icon: Sprout,
      iconColor: "text-[#3F5E4A]",
      accentColor: "from-[#3F5E4A] to-[#608B71]",
      topics: ["Meal Customization", "Nutrient Partitioning", "Gut Microbiome", "Insulin Sensitivity"],
      image: "/certificate/nutrition_dietetics.jpeg",
    },
    {
      title: "Sports Nutrition & Supplementation",
      issuer: "ProPower Fitness Academy",
      description:
        "Maximizing athletic speed, endurance, power, and muscle recovery through science-backed nutrient timing, custom ergogenic aids, and high-performance supplementation.",
      icon: Activity,
      iconColor: "text-[#E58A65]",
      accentColor: "from-[#E58A65] to-[#F1A98A]",
      topics: ["Performance Fueling", "Ergogenic Aids", "Nutrient Timing", "Recovery Protocol"],
      image: "/certificate/nutrition_advance_supplementation.jpeg",
    },
  ];

  const CertCard = ({ cert }: { cert: CertificationItem }) => (
    <div
      className="group relative flex flex-col justify-between rounded-[28px] bg-white/[0.02] border border-white/5 p-5 backdrop-blur-md overflow-hidden hover:bg-white/[0.045] hover:border-white/10 hover:-translate-y-2 transition-all duration-500 shadow-[0_14px_36px_rgba(0,0,0,0.25)] w-[290px] sm:w-[350px] flex-shrink-0"
    >
      {/* Certificate Image Frame */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-white/5 bg-black/40">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          sizes="350px"
          className="object-cover opacity-60 group-hover:opacity-95 transition-all duration-500 scale-[1.02] group-hover:scale-[1.06]"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent z-10" />
      </div>

      {/* Issuer + Title */}
      <div className="mb-3">
        <span className="text-[9px] font-black tracking-widest text-[#E58A65]/70 uppercase block mb-1">
          {cert.issuer}
        </span>
        <h3 className="font-serif text-[20px] leading-snug text-white font-medium group-hover:text-[#E58A65] transition-colors duration-300">
          {cert.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[11.5px] text-white/45 font-semibold leading-relaxed mb-5 group-hover:text-white/65 transition-colors duration-300 flex-1 whitespace-normal">
        {cert.description}
      </p>

      {/* Topics */}
      <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/5">
        {cert.topics.map((topic) => (
          <span
            key={topic}
            className="text-[9px] font-bold text-white/40 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-full group-hover:border-white/10 group-hover:text-white/55 transition-colors duration-300"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
      />
    </div>
  );

  return (
    <section
      id="certifications"
      className="relative py-28 bg-[#121212] overflow-hidden border-t border-white/5 z-10"
    >
      {/* CSS marquee stylesheet injected inline */}
      <style>{`
        @keyframes scrollRtl {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: scrollRtl 45s linear infinite;
        }
        .animate-marquee-wrapper:hover .animate-marquee-rtl {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient glows */}
      <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#E58A65]/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#3F5E4A]/8 blur-[120px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#E58A65] mb-3 bg-[#E58A65]/5 border border-[#E58A65]/10 px-5 py-2.5 rounded-full"
          >
            Elite Scientific Standards
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-[46px] text-white font-medium leading-tight mb-5"
          >
            Professional{" "}
            <span className="text-[#E58A65] italic font-serif">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-white/50 leading-relaxed font-semibold max-w-xl mx-auto"
          >
            A solid foundation built on clinical science, anatomical precision, and safety. Every
            program is backed by accredited, globally-recognized expertise.
          </motion.p>
        </div>
      </div>

      {/* Infinite Auto-sliding Carousel Frame */}
      <div className="animate-marquee-wrapper relative w-full overflow-hidden py-6">
        {/* Elegant fade-out gradient overlays at borders */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-40 bg-gradient-to-r from-[#121212] via-[#121212]/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-40 bg-gradient-to-l from-[#121212] via-[#121212]/70 to-transparent z-20 pointer-events-none" />
        
        {/* Double list track for perfect loop */}
        <div className="animate-marquee-rtl flex gap-6">
          {/* First loop */}
          {certifications.map((cert, idx) => (
            <CertCard key={`first-${idx}`} cert={cert} />
          ))}
          {/* Second duplicate loop to create infinite illusion */}
          {certifications.map((cert, idx) => (
            <CertCard key={`second-${idx}`} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
