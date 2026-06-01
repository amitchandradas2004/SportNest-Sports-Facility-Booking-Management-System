"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IoFootballOutline } from "react-icons/io5";
import { Button } from "@heroui/react";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black text-white px-4 text-center pt-17">
      {/* Animated Football */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-2 text-indigo-600 dark:text-white"
      >
        <IoFootballOutline size={120} />
      </motion.div>

      {/* 404 */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-black dark:text-white md:text-7xl lg:text-9xl"
      >
        404
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-2xl font-bold text-black  dark:text-white md:text-3xl lg:text-4xl"
      >
        Oops! This Field Does not Exist
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 max-w-lg text-slate-600"
      >
        Looks like you have wandered off the pitch. The page you are looking for
        might have been moved, deleted, or never existed.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <Link href="/">
          <Button className={"bg-indigo-600 w-40 h-10"}> Back Home</Button>
        </Link>

        <Link href="/allFacilities">
          <Button
            className={
              "rounded-full border border-slate-300 bg-white  text-slate-700 transition hover:bg-slate-100 w-40 h-10"
            }
          >
            Explore Facilities
          </Button>
        </Link>
      </motion.div>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-12 h-1 rounded-full bg-indigo-600"
      />
    </div>
  );
};

export default NotFoundPage;
