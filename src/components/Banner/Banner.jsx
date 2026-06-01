"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoFootballOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/Banner.jpg')] bg-cover bg-center bg-no-repeat"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Floating Football */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-white/10 lg:block"
      >
        <IoFootballOutline size={250} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-5xl text-5xl font-bold md:text-6xl lg:text-7xl"
        >
          Find the Perfect Place to Play
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg"
        >
          Explore nearby sports facilities, book instantly, and manage your
          reservations with ease. Everything you need for your next game, all in
          one place.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="mt-8"
        >
          <Link href="/allFacilities">
            <Button className="bg-indigo-600 text-white shadow-lg transition-all hover:bg-indigo-700">
              Explore All Facilities
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <FaArrowRightLong />
              </motion.span>
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 flex flex-col items-center"
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/50 p-1">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
