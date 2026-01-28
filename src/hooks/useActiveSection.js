import { useEffect, useMemo, useState } from "react";

/**
 * Tracks which section is currently in view.
 * Architectural note: uses IntersectionObserver for accuracy + performance (no scroll listeners).
 */
export function useActiveSection(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds?.[0] ?? "home");

  const observerOptions = useMemo(
    () => ({
      root: null,
      // Pull the "active" window slightly upward so nav feels responsive.
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0.1,
      ...options
    }),
    [options]
  );

  useEffect(() => {
    if (!sectionIds?.length) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

      if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, observerOptions]);

  return activeId;
}


