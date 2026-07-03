"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};

export default function Services() {
  const services = [
    {
      title: "Video production for service businesses",
      desc: "Short-form video content designed to educate, establish authority, and convert viewers into prospects.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M23 7l-7 5 7 5V7z" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      colSpan: "md:col-span-7",
    },
    {
      title: "Content strategy & scripting",
      desc: "Research-led content that targets the questions your ideal clients are already asking online.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      colSpan: "md:col-span-5",
    },
    {
      title: "Social media management",
      desc: "Consistent posting, community engagement, and growth-focused execution across key platforms.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12h8M12 8v8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      colSpan: "md:col-span-6",
    },
    {
      title: "Meta ads management",
      desc: "Performance campaigns built around proven creative and audience targeting -- optimised for lead quality, not vanity metrics.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="7.5 19.79 7.5 14.6 3 12" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="21 12 16.5 14.6 16.5 19.79" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="22.08" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      colSpan: "md:col-span-6",
    },
  ];

  return (
    <section id="services" className="relative w-full bg-black py-32 px-6 overflow-hidden">
      <motion.div
        className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-[#FF8500]/10 blur-[150px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            A complete digital marketing system -- video, content, and paid ads under one roof
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Most agencies do content or ads. We build the full pipeline: from video production to Meta campaigns optimised for qualified lead generation.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`${service.colSpan} glass-card p-2 rounded-[2rem] group cursor-default`}
            >
              {/* Double Bezel Inner Core */}
              <div className="w-full h-full bg-[#050505] rounded-[calc(2rem-0.5rem)] p-10 relative overflow-hidden transition-colors duration-500 group-hover:bg-[#0a0a0a]">
                {/* Animated spotlight on hover */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] pointer-events-none"
                  whileHover={{ scale: 2, opacity: 0.15 }}
                  transition={{ duration: 0.6 }}
                />
                
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 mb-8 text-[#FF8500] group-hover:scale-110 group-hover:border-[#FF8500]/30 transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-white/50 leading-relaxed max-w-xl group-hover:text-white/60 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
