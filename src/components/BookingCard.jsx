"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdLocationPin, MdOutlineCancel } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoIosTimer } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";
import { DeleteBooking } from "./DeleteBooking";
const BookingCard = ({ booking }) => {
  const formattedDate = new Date(booking?.booking_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );
  return (
    <div>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white dark:bg-zinc-900 rounded-3xl p-5 shadow-md border"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row gap-5 flex-1">
            <Image
              src={booking?.facility_image}
              alt={booking?.facility_name}
              width={200}
              height={150}
              className="w-full md:w-45 h-30 rounded-2xl object-cover"
            />

            <div className="flex-1">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                {booking?.facility_name}
              </h2>

              {/* Location & Date */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm lg:text-xl text-gray-500">
                <div className="flex items-center gap-2">
                  <MdLocationPin className="text-indigo-500" />
                  {booking?.facility_location}
                </div>

                <div className="flex items-center gap-2">
                  <SlCalender className="text-indigo-500" />
                  {formattedDate}
                </div>
              </div>

              {/* Time & Price */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-sm lg:text-xl text-gray-500">
                <div className="flex items-center gap-2">
                  <IoIosTimer className="text-indigo-500" />
                  {booking?.time_slot} ({booking?.hours}h)
                </div>

                <div className="flex items-center gap-2 font-bold text-lg lg:text-2xl text-foreground">
                  <IoPricetagsOutline className="text-indigo-500" />$
                  {booking?.total_price}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <DeleteBooking booking={booking} />
        </div>
      </motion.div>
    </div>
  );
};

export default BookingCard;
