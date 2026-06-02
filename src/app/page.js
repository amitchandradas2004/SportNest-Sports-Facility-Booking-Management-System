import Banner from "@/components/Banner/Banner";
import Featured from "@/components/Featured/Featured";
import HowSportNestWorks from "@/components/HowSportNestWorks";
import LiveStats from "@/components/LiveStats";
import WhyChooseUs from "@/components/WhyChoose";

export default function Home({ children }) {
  return (
    <div>
      <Banner />
      {children}
      <Featured/>
      <HowSportNestWorks />
      <WhyChooseUs/>
      <LiveStats />
    </div>
  );
}
