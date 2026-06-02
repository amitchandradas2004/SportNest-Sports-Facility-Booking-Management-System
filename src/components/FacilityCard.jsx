"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import { MapPin, Users, Clock3, CalendarCheck } from "lucide-react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const FacilityCard = ({ facility }) => {
 
  const {
    _id,
    name,
    image,
    facility_type,
    location,
    price_per_hour,
    capacity,
    available_slots,
    description,
    booking_count,
  } = facility;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-3xl border dark:bg-black shadow-lg"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover select-none"
          />
        </motion.div>

        {/* Type Badge */}
        <Chip color="primary" className="absolute left-4 top-4">
          {facility_type}
        </Chip>

        {/* Price */}
        <div className="absolute right-4 top-4 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
          ${price_per_hour}/hr
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div>
          <h2 className="line-clamp-1 text-2xl font-bold">{name}</h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>

        <p className="line-clamp-2 text-sm text-gray-600">{description}</p>

        {/* Button */}
        <Link href={`/allFacilities/${_id}`}>
          <Button className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 items-center">
            Book Now <HiMiniArrowTopRightOnSquare />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
