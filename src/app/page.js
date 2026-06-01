import Banner from "@/components/Banner/Banner";
import HowSportNestWorks from "@/components/HowSportNestWorks";
import LiveStats from "@/components/LiveStats";
import WhyChooseUs from "@/components/WhyChoose";

export default function Home({ children }) {
  return (
    <div>
      <Banner />
      {children}
      <HowSportNestWorks />
      <WhyChooseUs/>
      <LiveStats />
    </div>
  );
}
