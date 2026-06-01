"use client";

import Link from "next/link";
import { IoFootballOutline } from "react-icons/io5";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Footer = () => {
  return (
    <footer className="border-t bg-white text-black dark:bg-slate-950">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              className="mb-4 flex items-center gap-2 text-indigo-500"
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-13 w-13 items-center justify-center rounded-xl border text-3xl"
              >
                <IoFootballOutline />
              </motion.div>

              <span className="text-3xl font-bold">SportNest</span>
            </Link>

            <p className="mt-4 text-sm leading-6 dark:text-white">
              Discover, book, and manage sports facilities with ease. SportNest
              helps athletes and sports enthusiasts find the perfect place to
              play.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 dark:text-white">
              {[
                ["Home", "/"],
                ["All Facilities", "/allFacilities"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
              ].map(([title, href]) => (
                <motion.div key={title} whileHover={{ x: 2 }}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-indigo-600"
                  >
                    {title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Account */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              My Account
            </h3>

            <div className="flex flex-col gap-2 dark:text-white">
              {[
                ["My Bookings", "/myBookings"],
                ["Add Facility", "/addFacility"],
                ["Manage Facilities", "/manageFacilities"],
              ].map(([title, href]) => (
                <motion.div key={title} whileHover={{ x: 2 }}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-indigo-600"
                  >
                    {title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              Contact
            </h3>

            <div className="space-y-2 text-sm dark:text-white">
              <p>Chattogram, Bangladesh</p>
              <p>support@sportnest.com</p>
              <p>+880 1234-567890</p>
            </div>

            <div className="mt-5 flex gap-5 text-2xl">
              {[FaFacebook, FaInstagram, FaLinkedin, FaGithub].map(
                (Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                      scale: 1.2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Link href="/">
                      <Icon />
                    </Link>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-slate-800"
        >
          © {new Date().getFullYear()} SportNest. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
