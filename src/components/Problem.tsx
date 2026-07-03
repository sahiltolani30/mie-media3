"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="relative w-full bg-black py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              The Problem
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Why most service businesses struggle to generate consistent leads online
          </h2>
          <p className="text-white/60 text-lg max-w-xl">
            Without a unified content and advertising system, even the best service providers stay stuck in the referral cycle.
          </p>
        </motion.div>

        {/* Bento Grid -- simple stagger, CSS-only hover */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          {/* Main Pain Point */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-8 glass-card p-10 flex flex-col justify-between relative overflow-hidden group cursor-default hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-[#FF8500]/10 blur-[100px] rounded-full pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF8500" strokeWidth="1.5">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium text-white mb-3">Inconsistent Content</h3>
              <p className="text-white/60 max-w-[40ch] leading-relaxed">
                Posting inconsistent content with no clear strategy or conversion goal.
              </p>
            </div>
          </motion.div>

          {/* Secondary Pain Point 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-4 glass-card p-8 flex flex-col justify-between group cursor-default hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FE7D13" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-2">Burning Ad Budget</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Running paid ads without strong creative -- burning budget on poor results.
              </p>
            </div>
          </motion.div>

          {/* Secondary Pain Point 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-4 glass-card p-8 flex flex-col justify-between group cursor-default hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FE7D13" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-2">Referral Reliance</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Over-relying on word-of-mouth referrals for business growth.
              </p>
            </div>
          </motion.div>

          {/* Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-8 glass-card p-10 flex flex-col justify-center items-center text-center cursor-default hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
              No Conversion System
            </h3>
            <p className="text-white/60 max-w-[40ch] leading-relaxed">
              No system for turning social media attention into qualified inquiries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
