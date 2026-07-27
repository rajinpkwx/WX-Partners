import FigmaScaler from "@/components/FigmaScaler";
import HomeContent from "@/components/HomeContent";
import HomeMobileContent from "@/components/HomeMobileContent";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <FigmaScaler designWidth={1440} designHeight={6875}>
          <HomeContent />
        </FigmaScaler>
      </div>
      <div className="md:hidden">
        <HomeMobileContent />
      </div>
    </>
  );
}
