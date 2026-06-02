import FacilityCard from "@/components/FacilityCard";
export const metadata = {
  title: "Sportnest || All Facilities",
  description: "SportNest All Facilities Page",
};
const AllFacilitiesPage = async () => {
  const res = await fetch(`http://localhost:5000/facility`);
  const facilitys = await res.json();

  return (
    <div className="py-20 container mx-auto px-3 md:px-0">
      <div className="text-center space-y-3 overflow-hidden">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold animate-fadeUp">
          All Facilities
        </h3>

        <p className="opacity-70 animate-fadeUp delay-150">
          {`Browse ${facilitys.length} sports venues available for booking.`}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {facilitys.map((facility) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default AllFacilitiesPage;
