"use client";

import { useEffect, useRef, useState } from "react";

export default function FigmaScaler({
  children,
  designWidth = 1440,
  designHeight,
}: {
  children: React.ReactNode;
  designWidth?: number;
  designHeight: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const width = wrapperRef.current?.clientWidth ?? window.innerWidth;
      setScale(width / designWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [designWidth]);

  return (
    <div ref={wrapperRef} style={{ width: "100%", height: designHeight * scale, overflow: "hidden" }}>
      <div style={{ width: designWidth, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </div>
  );
}
