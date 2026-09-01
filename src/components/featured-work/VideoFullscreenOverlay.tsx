"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { VideoSlot } from "@/config/videos";

export interface VideoFullscreenOverlayProps {
  photo: VideoSlot | null;
  onClose: () => void;
}

export function VideoFullscreenOverlay({ photo, onClose }: VideoFullscreenOverlayProps) {
  const [mounted, setMounted] = useState(false);
  const fullscreenVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!photo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFullscreen();
    };
    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, [photo, closeFullscreen]);

  useEffect(() => {
    if (photo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [photo]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeFullscreen}
        >
          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-[100dvh] sm:h-auto sm:max-w-sm md:max-w-md lg:max-w-lg sm:aspect-[9/16] bg-black sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl sm:border border-white/10 sm:mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {photo.video ? (
              <video
                ref={fullscreenVideoRef}
                controls
                autoPlay
                playsInline
                poster={photo.image}
                className="w-full h-full object-contain bg-black"
              >
                {photo.webm && <source src={photo.webm} type="video/webm" />}
                <source src={photo.video} type="video/mp4" />
              </video>
            ) : photo.image ? (
              <img
                src={photo.image}
                alt="Fullscreen view"
                className="w-full h-full object-cover"
              />
            ) : null}
          </motion.div>

          <button
            className="fixed top-5 right-5 text-white bg-black/80 hover:bg-black rounded-full p-3 transition-colors z-[10000] pointer-events-auto shadow-lg border border-white/20"
            onClick={(e) => {
              e.stopPropagation();
              closeFullscreen();
            }}
            aria-label="Close video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
