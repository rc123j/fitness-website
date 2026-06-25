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
  ChevronRight
} from "lucide-react";

interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  accentColor: string;
  topics: string[];
}

export default function Certifications() {
  const certifications: CertificationItem[] = [
    {
      title: "Special Population Workshop",
      issuer: "Elite Biomechanics Academy",
      description: "Advanced training protocols tailored for clients with special health needs, chronic conditions, structural imbalances, age-related needs, or pre/postnatal safety considerations.",
      icon: Users,
      iconColor: "text-[#3F5E4A]",
      iconBg: "bg-[#3F5E4A]/10",
      accentColor: "from-[#3F5E4A] to-[#608B71]",
      topics: ["Chronic Conditions", "Geriatric Exercise", "Pre & Postnatal", "Injury Rehab"]
    },
    {
      title: "Advanced Personal Trainer",
      issuer: "National Certification Board",
      description: "Mastery of biomechanical principles, advanced program design, athletic profiling, and customized periodization to maximize muscular strength and hypertrophic responses.",
      icon: Dumbbell,
      iconColor: "text-[#E58A65]",
      iconBg: "bg-[#E58A65]/10",
      accentColor: "from-[#E58A65] to-[#F1A98A]",
      topics: ["Biomechanical Science", "Custom Programming", "Strength Periodization", "Form Assessment"]
    },
    {
      title: "CPR & AED Certification",
      issuer: "National Safety Council",
      description: "Certified safety-first responder, trained in basic life support, emergency cardiac care, and AED protocols to ensure an absolutely secure training environment.",
      icon: HeartPulse,
      iconColor: "text-[#E53E3E]",
      iconBg: "bg-[#E53E3E]/10",
      accentColor: "from-[#E53E3E] to-[#F56565]",
      topics: ["First Aid Protocols", "Emergency Support", "AED Operations", "Client Safety Care"]
    },
    {
      title: "Weight Management Specialist",
      issuer: "Metabolic Coaching Federation",
      description: "Scientific coaching methodologies for sustainable body recomposition, metabolic speed acceleration, thyroid/endocrine support, and permanent behavioral habits.",
      icon: Flame,
      iconColor: "text-[#E58A65]",
      iconBg: "bg-[#E58A65]/10",
      accentColor: "from-[#E58A65] to-[#F1A98A]",
      topics: ["Metabolic Balancing", "Body Recomposition", "Habit Conditioning", "Energy Expenditure"]
    },
    {
      title: "Dietetics and Nutrition",
      issuer: "Clinical Science Institute",
      description: "Advanced meal plan curation, clinical food biochemistry, insulin management, and disease-prevention dietary strategies customized to individual gut health and biological markers.",
      icon: Sprout,
      iconColor: "text-[#3F5E4A]",
      iconBg: "bg-[#3F5E4A]/10",
      accentColor: "from-[#3F5E4A] to-[#608B71]",
      topics: ["Meal Customization", "Nutrient Partitioning", "Gut Microbiome", "Insulin Sensitivity"]
    },
    {
      title: "Sports Nutrition & Supplementation",
      issuer: "International Society of Sports Nutrition",
      description: "Maximizing athletic speed, endurance, power, and muscle recovery through science-backed nutrient timing, custom ergogenic aids, and high-performance supplementation.",
      icon: Activity,
      iconColor: "text-[#E58A65]",
      iconBg: "bg-[#E58A65]/10",
      accentColor: "from-[#E58A65] to-[#F1A98A]",
      topics: ["Performance Fueling", "Ergogenic Aids", "Nutrient Timing", "Recovery Protocol"]
    }
  ];

  return (
    <section id="certifications" className="relative py-28 bg-[#121212] overflow-hidden border-t border-white/5 z-10">
      
      {/* Ambient background glows for Premium Look */}
      <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#E58A65]/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#3F5E4A]/8 blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-[#E58A65] mb-3 bg-[#E58A65]/5 border border-[#E58A65]/10 px-4.5 py-2.5 rounded-full"
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
            Professional <span className="text-[#E58A65] italic font-serif">Certifications</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-white/50 leading-relaxed font-semibold max-w-xl mx-auto"
          >
            A solid foundation built on clinical science, anatomical precision, and safety. Every program is backed by accredited, globally-recognized expertise.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between rounded-[32px] bg-white/[0.02] border border-white/5 p-6 backdrop-blur-md overflow-hidden hover:bg-white/[0.04] hover:border-white/12 hover:-translate-y-2 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.2)]"
            >
              <div>
                {/* Certificate Image Frame */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/5 bg-black/40">
                  <Image
                    src="/cert_placeholder.png"
                    alt={cert.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-500 scale-[1.02] group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                  {/* Icon Badge Overlay */}
                  <div className={`absolute top-4 left-4 h-10 w-10 rounded-xl ${cert.iconBg} ${cert.iconColor} flex items-center justify-center backdrop-blur-sm z-20 shadow-lg border border-white/5`}>
                    <cert.icon className="h-5 w-5 stroke-[2]" />
                  </div>

                  {/* Badge Text Overlay (Bottom Right) */}
                  <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg">
                    <Award className="h-3 w-3 text-[#E58A65]" />
                    <span className="text-[9px] font-black uppercase tracking-wider text-white">Verified</span>
                  </div>
                </div>

                {/* Certification Title & Issuer */}
                <div className="mb-4">
                  <span className="text-[9px] font-black tracking-widest text-[#E58A65]/70 uppercase block mb-1">
                    {cert.issuer}
                  </span>
                  <h3 className="font-serif text-[22px] leading-tight text-white font-medium group-hover:text-[#E58A65] transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[12px] text-white/50 font-semibold leading-relaxed mb-6 group-hover:text-white/60 transition-colors duration-300">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Specific Topics */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {cert.topics.map((topic) => (
                    <span 
                      key={topic} 
                      className="text-[9px] font-bold text-white/40 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-full group-hover:border-white/10 group-hover:text-white/60 transition-colors duration-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Expand / Details Arrow Link (Decorative) */}
                <div className="flex items-center justify-end mt-5 pt-1 text-[#E58A65] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-black uppercase tracking-wider mr-1">View Details</span>
                  <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom decorative color glow line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
