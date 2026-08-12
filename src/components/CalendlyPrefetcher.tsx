"use client";

import { useEffect } from "react";
import { CALENDLY_EMBED_URL } from "@/config/booking";

/**
 * CalendlyPrefetcher
 *
 * Attaches mouseenter listeners to every element with href="/book" on the page.
 * The first time a user hovers ANY such button, a hidden off-screen iframe is
 * injected that silently begins loading the Calendly widget.
 *
 * By the time the user clicks and navigates to /book, Calendly's JS bundle and
 * availability API calls are already warm in browser cache, making the calendar
 * appear nearly instantly instead of after a 2-3s delay.
 */
export default function CalendlyPrefetcher() {
  useEffect(() => {
    let prefetched = false;

    function injectHiddenFrame() {
      if (prefetched) return;
      prefetched = true;

      const iframe = document.createElement("iframe");
      iframe.src = CALENDLY_EMBED_URL;
      iframe.setAttribute("aria-hidden", "true");
      iframe.setAttribute("tabindex", "-1");
      iframe.style.cssText =
        "position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;left:-9999px;top:-9999px;border:none;";
      document.body.appendChild(iframe);
    }

    function attachToBookLinks() {
      const bookLinks = document.querySelectorAll<HTMLElement>('[href="/book"]');
      bookLinks.forEach((el) => {
        el.addEventListener("mouseenter", injectHiddenFrame, { once: true });
      });
    }

    // Attach immediately
    attachToBookLinks();

    // Re-attach after 1s to catch dynamically rendered elements (mobile menu, etc.)
    const timer = setTimeout(attachToBookLinks, 1000);

    // Auto-inject after 2s regardless of hover (covers direct /book navigation)
    const autoTimer = setTimeout(injectHiddenFrame, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoTimer);
    };
  }, []);

  // Renders nothing - pure behaviour
  return null;
}
