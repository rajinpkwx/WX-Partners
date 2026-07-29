"use client";

import { useLayoutEffect, useRef, useState } from "react";

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
  const [scale, setScale] = useState<number | null>(null);

  useLayoutEffect(() => {
    const update = () => {
      const width = wrapperRef.current?.clientWidth ?? window.innerWidth;
      setScale(width / designWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [designWidth]);

  const effectiveScale = scale ?? 1;

  return (
    <div
      ref={wrapperRef}
      suppressHydrationWarning
      style={{
        width: "100%",
        height: scale === null ? "auto" : designHeight * scale,
        overflow: "hidden",
      }}
    >
      <div
        suppressHydrationWarning
        style={{
          width: designWidth,
          transform: `scale(${effectiveScale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
