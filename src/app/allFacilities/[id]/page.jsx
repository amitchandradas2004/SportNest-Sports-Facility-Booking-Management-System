import FacilityDetails from "@/components/FacilityDetailsCard";

const FacilityDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/facility/${id}`);
  const facility = await res.json();
  // console.log(facility);

  return (
    <div className="mt-10">
      <FacilityDetails   facility={facility} />
    </div>
  );
};

export default FacilityDetailsPage;
