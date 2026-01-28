import { useEffect } from "react";

/**
 * Adds `is-visible` to elements matching selector when they enter the viewport.
 * Lightweight replacement for heavier animation libs.
 */
export function useRevealOnScroll(selector = "[data-reveal]") {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}


