export default function FigmaScaler({
  children,
  designWidth = 1440,
  designHeight,
}: {
  children: React.ReactNode;
  designWidth?: number;
  designHeight: number;
}) {
  return (
    <div
      style={{
        containerType: "inline-size",
        width: "100%",
        overflow: "hidden",
        height: `calc(${designHeight} / ${designWidth} * 100cqw)`,
      }}
    >
      <div
        style={{
          width: designWidth,
          transform: `scale(calc(100cqw / ${designWidth}px))`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
