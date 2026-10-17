import Image from "next/image";
import FrontentLayout from "./components/layouts/FrontentLayout";
import HeroSection from "./components/home/HeroSection";
import LatestCollection from "./components/home/LatestCollection";
import BestSellers from "./components/home/BestSellers";
import ShowWithUs from "./components/home/ShowWithUs";

export default function Home() {
  return (
    <div>
      <FrontentLayout>
        <HeroSection />
        <LatestCollection />
        <BestSellers />
        <ShowWithUs />
      </FrontentLayout>
    </div>
  );
}
