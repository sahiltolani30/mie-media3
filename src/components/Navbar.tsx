"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Results", href: "#results" },
    { name: "Who we serve", href: "#icp" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? "pt-4" : "pt-8"
        }`}
      >
        {/* The Fluid Island */}
        <div className="glass-card flex items-center justify-between px-6 py-3 w-[90%] max-w-5xl rounded-full">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tighter text-white">
            Miu<span className="text-gradient-primary">Media</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="#book"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-all active:scale-[0.98] hover:bg-[#F2F2F2]"
            >
              <span>Book a call</span>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105">
                <svg
                  width="12"
                  height="12"
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
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 md:hidden"
            aria-label="Toggle Menu"
          >
            <div className="flex w-4 flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-full bg-white transition-all origin-center"
              ></motion.span>
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[1.5px] w-full bg-white transition-all"
              ></motion.span>
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-full bg-white transition-all origin-center"
              ></motion.span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/80 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-semibold tracking-tighter text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{
                  delay: navLinks.length * 0.1,
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                }}
                href="#book"
                onClick={() => setIsOpen(false)}
                className="mt-8 rounded-full bg-white px-8 py-4 text-lg font-medium text-black"
              >
                Book a call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
