import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BookingCard from "@/components/BookingCard";
import NotFoundBookings from "@/components/NotFoundBookings";
import { Button } from "@heroui/react";
import { IoAddCircleOutline } from "react-icons/io5";
import Link from "next/link";
const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(`${process.env.SERVER_URL}/booking/${user?.email}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const bookings = await res.json();

  return (
    <div className="py-20 container mx-auto px-3 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5">
        <div className="space-y-3 animate-fadeUp py-3 text-center md:text-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My Bookings
          </h2>
          <p className="text-default-500">
            View and manage all your facility bookings
          </p>
        </div>
        <div className="w-40">
          <Link href={"/allFacilities"}>
            <Button className={"bg-indigo-600 w-40"}>
              <IoAddCircleOutline />
              Add
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-5">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))
        ) : (
          <NotFoundBookings />
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;
