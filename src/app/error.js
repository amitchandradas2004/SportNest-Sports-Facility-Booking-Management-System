"use client";

import { motion } from "framer-motion";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20 dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md rounded-2xl border border-red-200 bg-white dark:bg-slate-900 p-8 text-center shadow-xl select-none"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-6xl"
        >
          ⚠️
        </motion.div>

        <h2 className="mb-2 text-3xl font-bold text-red-600">
          Something went wrong!
        </h2>

        <p className="mb-6 text-gray-600">
          {error?.message || "An unexpected error occurred."}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => reset()}
          className="rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition"
        >
          Try Again
        </motion.button>
      </motion.div>
    </div>
  );
}
