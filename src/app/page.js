import Banner from "@/components/Banner/Banner";
import HowSportNestWorks from "@/components/HowSportNestWorks";

export default function Home({ children }) {
  return (
    <div>
      <Banner />
      {children}
      <HowSportNestWorks />
    </div>
  );
}
