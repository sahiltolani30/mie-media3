"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryPhoto {
  id: string | number;
  image?: string;
  video?: string | null;
  webm?: string | null;
  cardVideo?: string | null;
  cardWebm?: string | null;
}

const defaultPhotos: GalleryPhoto[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" },
  { id: 4, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" },
  { id: 5, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
];

export interface InteractiveFolderGalleryProps {
  photos?: GalleryPhoto[];
  folderName?: string;
  dragHintText?: string;
  className?: string;
}

export function InteractiveFolderGallery({
  photos = defaultPhotos,
  folderName = "Photography.gallery",
  dragHintText = "Drag any video down to close",
  className
}: InteractiveFolderGalleryProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);
  const [fullscreenPhoto, setFullscreenPhoto] = useState<GalleryPhoto | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  // Store refs to each card's video element so we can play/pause them
  const videoRefs = useRef<Map<string | number, HTMLVideoElement>>(new Map());

  useEffect(() => {
    setMounted(true);
    // Wait just 100ms so the initial HTML parses (unblocking the Safari blue bar),
    // then trigger the TINY card videos to start downloading DURING the PreloaderScreen.
    // Total size is only ~5MB so this will not slow down the site.
    const timer = setTimeout(() => {
      setLoadedVideos(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fullscreenPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [fullscreenPhoto]);

  // Handle play/pause state for all card videos
  useEffect(() => {
    videoRefs.current.forEach((el) => {
      // Play videos constantly (even when folder is closed)
      // Only pause them if a fullscreen video is currently playing to save CPU
      if (fullscreenPhoto) {
        el.pause();
      } else {
        el.play().catch(() => {});
      }
    });
  }, [fullscreenPhoto, isFolderOpen]);

  const setVideoRef = useCallback((id: string | number) => (el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(id, el);
    }
  }, []);

  return (
    <div className={`w-full py-32 relative ${className || ""}`}>
      <div className="relative w-full min-h-[500px] flex flex-col items-center justify-center">

        <div className="relative w-[400px] h-[500px] flex justify-center pointer-events-none z-0">

          <motion.div
            className="absolute bottom-6 w-80 h-56 drop-shadow-2xl"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
          >
            <div className="absolute top-0 left-0 w-32 h-10 bg-linear-to-t from-[#1e1e1e] to-[#2a2a2a] rounded-t-xl border-t border-l border-r border-white/10" />
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-linear-to-b from-[#1e1e1e] to-[#0a0a0a] rounded-b-xl rounded-tr-xl border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-10 left-2 right-2 bottom-2 bg-black rounded-lg shadow-inner pointer-events-none" />
          </motion.div>

          <div className="absolute bottom-10 z-10 flex justify-center">
            {photos.map((photo, i) => {
            const offset = i - (photos.length - 1) / 2;

            const openGap = Math.min(130, photos.length > 1 ? 260 / (photos.length - 1) : 0);

              const stackY = hoverFolder ? offset * -10 - 40 : offset * -5;
              const stackX = hoverFolder ? offset * 30 : offset * 3;
              const stackRotate = hoverFolder ? offset * 8 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;

              const openY = -130;
              const openX = offset * openGap;
              const openRotate = 0;
              const openScale = 1.05;

              // Use card-specific videos if they exist, otherwise fallback to main video (for backwards compatibility)
              const videoSrc = photo.cardVideo || photo.video;
              const webmSrc = photo.cardWebm || photo.webm;

              return (
                <motion.div
                  key={photo.id}
                  drag={isFolderOpen ? true : false}
                  dragSnapToOrigin={true}
                  onDragEnd={(e, info) => {
                    if (info.offset.y > 100 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  onClick={() => {
                    if (isFolderOpen) {
                      setFullscreenPhoto(photo);
                    }
                  }}
                  className={`absolute bottom-0 w-56 h-72 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20 origin-bottom ${isFolderOpen ? "cursor-grab active:cursor-grabbing pointer-events-auto hover:ring-2 hover:ring-white/50 transition-shadow" : "pointer-events-none"}`}
                  animate={!isFolderOpen ? {
                    y: stackY,
                    x: stackX,
                    rotate: stackRotate,
                    scale: stackScale,
                    zIndex: i + 10
                  } : {
                    y: openY,
                    x: openX,
                    rotate: openRotate,
                    scale: openScale,
                    zIndex: 50
                  }}
                  whileHover={isFolderOpen ? { scale: openScale + 0.05, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: openScale + 0.1, rotate: 5, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  {videoSrc ? (
                    <video
                      ref={setVideoRef(photo.id)}
                      poster={photo.image}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload={loadedVideos ? "auto" : "none"}
                      className="w-full h-full object-cover pointer-events-none bg-zinc-900"
                    >
                      {webmSrc && <source src={webmSrc} type="video/webm" />}
                      <source src={videoSrc} type="video/mp4" />
                    </video>
                  ) : photo.image ? (
                    <img
                      src={photo.image}
                      alt="Gallery item"
                      loading="lazy"
                      className="w-full h-full object-cover pointer-events-none bg-zinc-900"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-900" />
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="absolute bottom-0 w-[340px] h-44 drop-shadow-[0_-20px_40px_rgba(0,0,0,0.8)] cursor-pointer z-20 pointer-events-auto"
            style={{ transformOrigin: "bottom" }}
            animate={{
              opacity: isFolderOpen ? 0 : 1,
              rotateX: hoverFolder ? -25 : 0,
              y: hoverFolder ? 10 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto"
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
          >
            <div className="w-full h-full bg-linear-to-b from-[#2a2a2a] to-[#111] rounded-2xl border border-white/20 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] relative overflow-hidden flex items-end justify-center pb-8">
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

              <div className="px-5 py-2.5 bg-black rounded-lg border border-black/80 shadow-inner flex items-center justify-center backdrop-blur-md">
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  {folderName}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 50 }}
          className="absolute bottom-10 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-black/50 dark:text-white/50 text-sm font-medium tracking-wide pointer-events-none"
        >
          {dragHintText}
        </motion.div>

      </div>

      {/* Fullscreen Overlay - Rendered in a Portal to escape CSS transforms and overflow: hidden */}
      {mounted && createPortal(
        <AnimatePresence>
          {fullscreenPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
              onClick={() => setFullscreenPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full h-[100dvh] sm:h-auto sm:max-w-sm md:max-w-md lg:max-w-lg sm:aspect-[9/16] bg-black sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl sm:border border-white/10 sm:mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full p-3 transition-colors z-50"
                  onClick={() => setFullscreenPhoto(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                {fullscreenPhoto.video ? (
                  <video
                    controls
                    autoPlay
                    playsInline
                    poster={fullscreenPhoto.image}
                    className="w-full h-full object-contain bg-black"
                  >
                    {/* Load HQ WebM if available, otherwise HQ MP4 */}
                    {fullscreenPhoto.webm && <source src={fullscreenPhoto.webm} type="video/webm" />}
                    <source src={fullscreenPhoto.video} type="video/mp4" />
                  </video>
                ) : fullscreenPhoto.image ? (
                  <img
                    src={fullscreenPhoto.image}
                    alt="Fullscreen view"
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
