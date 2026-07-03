"use client";

import { motion } from "framer-motion";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#FF8500]"
  >
    {children}
  </svg>
);

export default function ICP() {
  const industries = [
    {
      name: "Interior designers",
      icon: (
        <IconWrapper>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </IconWrapper>
      ),
    },
    {
      name: "Architects",
      icon: (
        <IconWrapper>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </IconWrapper>
      ),
    },
    {
      name: "Business consultants",
      icon: (
        <IconWrapper>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </IconWrapper>
      ),
    },
    {
      name: "Coaches & advisors",
      icon: (
        <IconWrapper>
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </IconWrapper>
      ),
    },
    {
      name: "Marketing agencies",
      icon: (
        <IconWrapper>
          <path d="m3 11 18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </IconWrapper>
      ),
    },
    {
      name: "Home improvement",
      icon: (
        <IconWrapper>
          <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
          <path d="M17.64 15 22 10.64" />
          <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
        </IconWrapper>
      ),
    },
    {
      name: "Premium local businesses",
      icon: (
        <IconWrapper>
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
          <path d="M2 7h20" />
          <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
        </IconWrapper>
      ),
    },
    {
      name: "Professional services",
      icon: (
        <IconWrapper>
          <path d="M6 3h12l4 6-10 13L2 9Z" />
          <path d="M11 3 8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </IconWrapper>
      ),
    },
  ];

  return (
    <section id="icp" className="w-full bg-black py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="lg:w-1/2 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-8">
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF8500]">
              WHO WE WORK WITH
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05] font-semibold text-white mb-6">
            Built for high-ticket <br className="hidden md:block" />
            service businesses
          </h2>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-lg">
            We work with expertise-led businesses where trust, credibility, and visual presentation directly impact client acquisition.
          </p>
        </motion.div>

        {/* Right Content - Pills */}
        <div className="lg:w-1/2 flex flex-wrap gap-3 md:gap-4 justify-start lg:justify-center items-center">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="group flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 hover:border-[#FF8500]/50 transition-all cursor-default shadow-sm"
            >
              {industry.icon}
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
