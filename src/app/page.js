import Banner from "@/components/Banner/Banner";
import HowSportNestWorks from "@/components/HowSportNestWorks";
import LiveStats from "@/components/LiveStats";

export default function Home({ children }) {
  return (
    <div>
      <Banner />
      {children}
      <HowSportNestWorks />
      <LiveStats />
    </div>
  );
}
