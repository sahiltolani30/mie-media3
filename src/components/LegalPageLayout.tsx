"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface TOCItem {
  id: string;
  label: string;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  tocItems: TOCItem[];
  children: React.ReactNode;
  crossLink: {
    href: string;
    label: string;
  };
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white/60 hover:text-white hover:bg-white/15 transition-colors shadow-lg"
          aria-label="Back to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function LegalPageLayout({
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  tocItems,
  children,
  crossLink,
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [tocOpen, setTocOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleTocClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTocOpen(false);
    }
  }, []);

  useEffect(() => {
    const sections = tocItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observerRef.current?.observe(section));
    return () => observerRef.current?.disconnect();
  }, [tocItems]);

  return (
    <div className="min-h-screen bg-black text-[#F2F2F2] relative">
      {/* Background orb */}
      <motion.div
        className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#FF8500]/[0.04] rounded-full blur-[200px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <header className="relative z-10 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            Miu<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF9149] to-[#FE7D13]">Media</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Page Title Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-4 leading-[1.05]">
            {title}
          </h1>
          <p className="text-lg text-white/40 mb-6 max-w-2xl">{subtitle}</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-4 py-1.5 text-xs text-white/50">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Effective: {effectiveDate}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-4 py-1.5 text-xs text-white/50">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
              Last Updated: {lastUpdated}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Mobile TOC Toggle */}
      <div className="lg:hidden sticky top-0 z-30 bg-black/80 backdrop-blur-xl border-b border-white/[0.06] px-6 py-3">
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="flex w-full items-center justify-between rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white/60"
        >
          <span className="font-medium">Table of Contents</span>
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: tocOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </button>
        <AnimatePresence>
          {tocOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <nav className="flex flex-col gap-1 py-3">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTocClick(item.id)}
                    className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "text-white bg-white/[0.06] font-medium"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="flex gap-12 lg:gap-16">
          {/* Desktop Sidebar TOC */}
          <aside className="hidden lg:block w-64 shrink-0">
            <nav className="sticky top-24">
              <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
                  On this page
                </h3>
                <div className="flex flex-col gap-0.5">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleTocClick(item.id)}
                      className={`group text-left text-[13px] leading-snug px-3 py-2 rounded-lg transition-all duration-300 border-l-2 ${
                        activeSection === item.id
                          ? "border-l-[#FF8500] text-white bg-white/[0.04] font-medium"
                          : "border-l-transparent text-white/35 hover:text-white/70 hover:bg-white/[0.02]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0 max-w-3xl">
            <div className="legal-content">{children}</div>

            {/* Bottom Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 pt-12 border-t border-white/[0.06]"
            >
              {/* Cross-link */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 mb-8">
                <p className="text-sm text-white/40 mb-3">Related Legal Document</p>
                <Link
                  href={crossLink.href}
                  className="inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-[#FF8500] transition-colors group"
                >
                  {crossLink.label}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Contact */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8">
                <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
                <p className="text-sm text-white/40 mb-6">
                  If you have any questions about this document, reach out to us directly.
                </p>
                <a
                  href="mailto:make.it.up12business@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-[#F2F2F2] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Contact Us
                </a>
              </div>

              {/* Copyright */}
              <p className="mt-12 text-xs text-white/20 text-center">
                &copy; {new Date().getFullYear()} Miu Media. All rights reserved.
              </p>
            </motion.div>
          </main>
        </div>
      </div>

      <BackToTopButton />
    </div>
  );
}

/* ---- Reusable section wrapper for legal content ---- */
export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className="mb-16 scroll-mt-28"
    >
      <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
        <span className="block w-1 h-7 rounded-full bg-gradient-to-b from-[#FF8500] to-[#FE7D13]" />
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-white/55">
        {children}
      </div>
    </motion.section>
  );
}

/* ---- Sub-heading inside a section ---- */
export function LegalSubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-white/85 mb-3">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

/* ---- Callout box ---- */
export function LegalCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] border-l-2 border-l-[#FF8500] p-5 my-5 text-sm text-white/60">
      {children}
    </div>
  );
}

/* ---- Bullet list with orange markers ---- */
export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8500]/60" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
