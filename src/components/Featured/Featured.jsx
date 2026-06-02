import FacilityCard from "../FacilityCard";
import FeaturedTitle from "./FeaturedTitle";

const Featured = async () => {
  const res = await fetch(`http://localhost:5000/featured`);
  const facilitys = await res.json();

  return (
    <div className=" dark:bg-[#020618]">
      <div className="container mx-auto py-10 px-3 md:px-0">
        <FeaturedTitle />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilitys.map((facility) => (
            <FacilityCard key={facility._id} facility={facility} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
