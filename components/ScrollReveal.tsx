"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className,
  triggerTop = 0,
}: {
  children: React.ReactNode;
  className?: string;
  /** absolute top offset (px, in design-canvas coordinates) of a sentinel used purely to detect
   * scroll position, since the wrapper itself uses display:contents and has no measurable box. */
  triggerTop?: number;
}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  

  useEffect(() => {
    if (inView) return;
    const el = sentinelRef.current;
    if (!el) return;

    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
        setInView(true);
      }
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [inView]);

  return (
    <div className={`${className ?? ""} ${inView ? "in-view" : ""}`}>
      <div ref={sentinelRef} className="pointer-events-none absolute" style={{ top: triggerTop, left: 0, width: "100%", height: 100 }} />
      {children}
    </div>
  );
}
