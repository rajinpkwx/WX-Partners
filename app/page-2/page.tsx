import FigmaScaler from "@/components/FigmaScaler";
import Page2Content from "@/components/Page2Content";
import Page2MobileContent from "@/components/Page2MobileContent";

export default function Page2() {
  return (
    <>
      <div className="hidden md:block">
        <FigmaScaler designWidth={1440} designHeight={7127}>
          <Page2Content />
        </FigmaScaler>
      </div>
      <div className="md:hidden">
        <FigmaScaler designWidth={440} designHeight={9064}>
          <Page2MobileContent />
        </FigmaScaler>
      </div>
    </>
  );
}
