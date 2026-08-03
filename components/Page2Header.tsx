import FigmaScaler from "./FigmaScaler";

const imgVector1 = "/figma2/a52750c3e59ca20de7f40ead7004494444e2e924.svg";
const imgGroup5 = "/figma2/cfbe3b67ee10f80d8c13da54cdfb8bd62d0e010b.svg";
const imgGroup6 = "/figma2/c8bf21ce19770e767d0827c648f5235b11447ca9.svg";

const imgVector3 = "/figma4/0ff083a15d125c08f51adb7784b94950acf40339.svg";
const imgGroup3 = "/figma4/fec80c7c17e1982177052a736cb9fe896fe4b770.svg";
const imgGroup4 = "/figma4/2bc1ebb649e830e1731a0ee1568fa7c69ffe79c7.svg";

/**
 * The logo's inset percentages were exported by Figma against the full
 * 1440x7127 page frame, not the 87px banner alone. Reproducing that same
 * 1440x7127 box here (FigmaScaler crops the visible area to 87px) keeps
 * those percentages resolving to the same pixel result as the original design.
 */
function DesktopBanner() {
  return (
    <div className="relative h-[7127px] w-[1440px]">
      <div className="absolute bg-[#1f272c] h-[87px] left-0 top-0 w-[1440px]" data-name="Banner" />
      <a href="#" className="group -translate-x-1/2 absolute contents left-[calc(87.5%-11px)] top-[21px]">
        <div className="-translate-x-1/2 absolute border border-[#b6d997] border-solid h-[46px] left-[calc(87.5%-11px)] rounded-[4px] top-[21px] w-[240px] transition-opacity duration-150 group-hover:opacity-80" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-instrument font-medium leading-[normal] left-[calc(87.5%-11px)] text-[#b6d997] text-[15px] text-center top-[35px] uppercase whitespace-nowrap transition-opacity duration-150 group-hover:opacity-80" style={{ fontVariationSettings: '"wdth" 100' }}>
          Unlock the 90-day plan
        </p>
      </a>
      <div className="absolute contents inset-[0.42%_78.75%_99.2%_5.35%]">
        <div className="absolute contents inset-[0.42%_78.75%_99.2%_5.35%]">
          <div className="absolute inset-[0.42%_78.75%_99.2%_5.35%] overflow-clip" data-name="Layer_1">
            <div className="absolute inset-[0_81.51%_0_0]" data-name="Vector">
              <img loading="eager" alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
            </div>
            <div className="absolute contents inset-[16.99%_0_16.94%_22.92%]" data-name="Group">
              <div className="absolute inset-[17.96%_59.06%_18.06%_22.92%]" data-name="Group">
                <img loading="eager" alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5} />
              </div>
              <div className="absolute inset-[16.99%_0_16.94%_42.74%]" data-name="Group">
                <img loading="eager" alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileBanner() {
  return (
    <div className="relative h-[87px] w-[440px]">
      <div className="absolute bg-[#1f272c] h-[87px] left-0 top-0 w-[440px]" data-name="Banner" />
      <div className="absolute contents left-[32px] top-[33px]">
        <div className="absolute contents left-[32px] top-[33px]">
          <div className="absolute left-[32px] top-[33px] w-[170px] h-[19.87px] overflow-clip" data-name="Layer_1">
            <div className="absolute inset-[0_81.51%_0_0]" data-name="Vector">
              <img loading="eager" alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
            </div>
            <div className="absolute contents inset-[16.99%_0_16.94%_22.92%]" data-name="Group">
              <div className="absolute inset-[17.96%_59.06%_18.06%_22.92%]" data-name="Group">
                <img loading="eager" alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
              </div>
              <div className="absolute inset-[16.99%_0_16.94%_42.74%]" data-name="Group">
                <img loading="eager" alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute border border-[#b6d997] border-solid h-[53px] left-[calc(72.22%+12.22px)] rounded-[4px] top-[17px] w-[158px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-instrument font-medium leading-[normal] left-[calc(72.22%+12.72px)] text-[#b6d997] text-[15px] text-center top-[26px] uppercase w-[145px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Unlock the
        <br aria-hidden />
        90-day plan
      </p>
    </div>
  );
}

export default function Page2Header() {
  // The design overlaps the banner on top of the hero's first 87px (the hero's
  // own background already covers that area). Since the header now takes real
  // flow space to stay sticky, pull the page content back up by that same
  // (scaled) 87px so the overlap - and the original look - is preserved.
  return (
    <div className="sticky top-0 left-0 w-full z-50">
      <div className="hidden md:block" style={{ marginBottom: "calc(-87px * (100vw / 1440px))" }}>
        <FigmaScaler designWidth={1440} designHeight={87}>
          <DesktopBanner />
        </FigmaScaler>
      </div>
      <div className="md:hidden" style={{ marginBottom: "calc(-87px * (100vw / 440px))" }}>
        <FigmaScaler designWidth={440} designHeight={87}>
          <MobileBanner />
        </FigmaScaler>
      </div>
    </div>
  );
}
