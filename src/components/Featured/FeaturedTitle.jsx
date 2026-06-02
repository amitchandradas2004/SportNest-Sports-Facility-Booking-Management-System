"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
const FeaturedTitle = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pb-8">
      {/* Text Content */}
      <motion.div
        className="text-center md:text-start space-y-3"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          Featured Facilities
        </h2>
        <p>Top-rated venues available for your next game</p>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Link
          href="/allFacilities"
          className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2 my-3"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-indigo-600 w-40">
              View all
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaArrowRightLong />
              </motion.span>
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default FeaturedTitle;
