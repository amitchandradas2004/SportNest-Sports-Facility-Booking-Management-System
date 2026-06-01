"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Search a Venue",
    description:
      "Find nearby football, cricket, badminton, and other sport turfs easily using our smart search.",
  },
  {
    id: 2,
    title: "Book Your Slot",
    description:
      "Select your preferred date and time and confirm your booking instantly in just a few clicks.",
  },
  {
    id: 3,
    title: "Manage Booking",
    description:
      "Update, reschedule, or cancel your booking anytime from your personal dashboard.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HowSportNestWorks() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            How SportNest Works
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3">
            Book your favorite sports venues in just 3 simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:shadow-xl transition-shadow"
            >
              {/* Step Number */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold mb-4">
                {step.id}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
