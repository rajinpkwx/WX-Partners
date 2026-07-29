export default function InfoTooltip({
  iconSrc,
  activeIconSrc,
  arrowSrc,
  text,
  className,
}: {
  iconSrc: string;
  activeIconSrc: string;
  arrowSrc: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={`group absolute size-[13px] ${className ?? ""}`}>
      <div className="absolute inset-[-3.85%] cursor-help">
        <img
          loading="lazy"
          alt=""
          className="block max-w-none size-full transition-opacity duration-150 group-hover:opacity-0"
          src={iconSrc}
        />
        <img
          loading="lazy"
          alt=""
          className="absolute inset-0 block max-w-none size-full opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          src={activeIconSrc}
        />
      </div>
      <div className="pointer-events-none absolute left-[-2px] top-[25px] h-[12px] w-[16px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <img loading="lazy" alt="" className="block max-w-none size-full" src={arrowSrc} />
      </div>
      <div className="pointer-events-none absolute left-[-83px] top-[31px] h-[79px] w-[236px] rounded-[6px] bg-[#b6d997] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <p
          className="absolute left-[16px] top-[17px] w-[192px] font-instrument text-[18px] font-medium leading-normal text-[#232c31]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
