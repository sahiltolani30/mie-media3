"use client";

import { motion } from "framer-motion";

const letterVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
    },
  }),
};

function AnimatedWord({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden ${className || ""}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer id="book" className="relative w-full bg-black pt-32 overflow-hidden flex flex-col items-center">
      {/* Animated background glow */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[#FF8500]/5 blur-[150px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Call to Action Section */}
      <div className="relative z-10 mx-auto max-w-5xl text-center flex flex-col items-center w-full px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="w-full flex flex-col items-center"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white mb-8 leading-none overflow-hidden">
            <AnimatedWord text="Ready to " />
            <br className="md:hidden" />
            <AnimatedWord text="begin?" className="text-gradient-primary" />
          </h2>
          
          <motion.p
            className="text-lg md:text-xl text-white/50 mb-12 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The predictable client acquisition system for service businesses. We build the content, manage the ads, and scale your trust.
          </motion.p>

          <motion.a
            href="mailto:make.it.up12business@gmail.com"
            className="group relative inline-flex items-center justify-center gap-4 rounded-full bg-white px-10 py-5 text-xl font-medium text-black transition-all active:scale-[0.98] hover:bg-[#F2F2F2] shadow-[0_0_50px_-15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_70px_-15px_rgba(255,255,255,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Book your strategy call</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 10.5L10.5 1.5M10.5 1.5H3M10.5 1.5V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Complete Footer Section */}
      <div className="relative z-10 w-full border-t border-white/5 pt-16 pb-12 px-6 bg-[#020202]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand & Socials */}
          <motion.div
            className="md:col-span-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-black text-white mb-6 tracking-tighter">MIU MEDIA</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
              The predictable client acquisition system for service businesses. We build the content, manage the ads, and scale your trust.
            </p>
            <div className="flex items-center gap-3">
              {/* Instagram Icon */}
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </motion.a>
              {/* LinkedIn Icon */}
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
              {/* Twitter/X Icon */}
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 5 9.2 2 4c3.1 3.1 8.2 4 11 4-.4-4.5 4.8-7.3 8-5 1.4-.5 3-1.5 3-1.5z"></path>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            className="md:col-span-3 flex flex-col gap-6 md:pl-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">COMPANY</h4>
            <div className="flex flex-col gap-4">
              <a href="#results" className="text-sm text-white/50 hover:text-white transition-colors">Case Studies</a>
              <a href="#services" className="text-sm text-white/50 hover:text-white transition-colors">Services</a>
              <a href="#approach" className="text-sm text-white/50 hover:text-white transition-colors">Our Approach</a>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">LEGAL</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
