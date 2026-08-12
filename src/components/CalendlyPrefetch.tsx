"use client";

import { useEffect, useState } from "react";
import { CALENDLY_EMBED_URL } from "@/config/booking";

export default function CalendlyPrefetch() {
  const [shouldPrefetch, setShouldPrefetch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Execute during idle time if possible to avoid blocking the main thread
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        (window as any).requestIdleCallback(() => setShouldPrefetch(true));
      } else {
        setShouldPrefetch(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldPrefetch) return null;

  return (
    <div
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        overflow: "hidden",
        opacity: 0.01,
        pointerEvents: "none",
        zIndex: -9999,
      }}
      aria-hidden="true"
    >
      {/* 
        By rendering the iframe invisibly here, the browser downloads all of Calendly's 
        heavy JS, CSS, and API requests into the cache. 
        When the user clicks "Book a Call", the /book page loads it instantly. 
      */}
      <iframe src={CALENDLY_EMBED_URL} tabIndex={-1} />
    </div>
  );
}
