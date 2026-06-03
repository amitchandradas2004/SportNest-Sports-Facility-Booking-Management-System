import FacilityDetails from "@/components/FacilityDetailsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const FacilityDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token, "token");

  const res = await fetch(`https://sport-nest-server-alpha.vercel.app/facility/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const facility = await res.json();

  return (
    <div className="mt-10">
      <FacilityDetails facility={facility} />
    </div>
  );
};

export default FacilityDetailsPage;
