import SearchCard from "@/components/SearchCard";
export const metadata = {
  title: "Sportnest || All Facilities",
  description: "SportNest All Facilities Page",
};
const AllFacilitiesPage = async () => {
  const res = await fetch(
    `https://sport-nest-server-alpha.vercel.app/facility`,
    {
      cache: "no-store",
    },
  );

  const facilitys = await res.json();
   return (
    <div className="py-20 container mx-auto px-3 md:px-0">
      <div className="text-center space-y-3 overflow-hidden">
        <div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            All Facilities
          </h3>
          <p className="opacity-70">
            Browse {facilitys.length} sports venues available for booking.
          </p>
        </div>

        <SearchCard facilitys={facilitys} />
      </div>
    </div>
  );
};

export default AllFacilitiesPage;
