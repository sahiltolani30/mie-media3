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
  hidden: { opacity: 0, y: 40, scale: 0.96 },
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

function BreathingIcon({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#FF8500]"
      whileHover={{
        scale: 1.15,
        borderColor: "rgba(255, 133, 0, 0.4)",
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Success() {
  const points = [
    {
      title: "Consistent stream of qualified inbound inquiries",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Content that positions you as the obvious choice in your market",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "A professional social presence that builds credibility at scale",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Paid ad campaigns generating leads at a predictable cost",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="results" className="relative w-full bg-black py-32 px-6 overflow-hidden">
      {/* Animated background orb */}
      <motion.div
        className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FE7D13]/5 blur-[200px] rounded-full pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
              WHAT SUCCESS LOOKS LIKE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            What clients achieve with a content-powered acquisition system
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {points.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                backgroundColor: "rgba(255,255,255,0.04)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="glass-card p-10 flex items-start gap-6 group cursor-default"
            >
              <BreathingIcon>{item.icon}</BreathingIcon>
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-white/90 leading-snug group-hover:text-white transition-colors duration-300">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
