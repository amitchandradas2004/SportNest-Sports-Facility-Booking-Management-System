"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 80,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

const stats = [
  { id: 1, value: 120, label: "Active Turfs", suffix: "+" },
  { id: 2, value: 5400, label: "Registered Players", suffix: "+" },
  { id: 3, value: 10500, label: "Successful Bookings", suffix: "+" },
  { id: 4, value: 4.8, label: "Average Rating", suffix: "/5" },
];

export default function LiveStats() {
  return (
    <section className="w-full py-20 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            SportNest in Numbers
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real-time insights from our growing sports community — bookings,
            players, and trusted venues all in one place.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900 backdrop-blur-md p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                <Counter value={item.value} />
                {item.suffix}
              </h3>

              <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
