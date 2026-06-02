"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegCalendarTimes } from "react-icons/fa";
import { Button } from "@heroui/react";
import { MdLocationSearching } from "react-icons/md";

const NotFoundBookings = () => {
  return (
    <div className="py-5 px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 120,
          }}
          className="w-28 h-28 rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center"
        >
          <FaRegCalendarTimes className="text-5xl text-indigo-600" />
        </motion.div>

        <h2 className="mt-8 text-3xl md:text-4xl font-bold">
          No Bookings Found
        </h2>

        <p className="mt-3 text-default-500 max-w-md">
          You have not booked any facilities yet. Browse available sports venues
          and make your first booking.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link href={"/allFacilities"}>
            <Button className={"w-50 h-10 bg-indigo-600"}>
              <MdLocationSearching />
              Explore Facilities
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundBookings;
