"use client";

import { motion } from "framer-motion";

interface Metric {
  value: string;
  label: string;
}

interface ImpactCounterProps {
  metrics: Metric[];
}

export default function ImpactCounter({ metrics }: ImpactCounterProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="bg-[#7B2431] text-white py-14 border-y-4 border-[#D7A43B]">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/15"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center gap-2 pt-8 first:pt-0 sm:pt-0 px-4"
            >
              <span className="text-5xl md:text-6xl font-bold text-[#D7A43B] tracking-tight">
                {metric.value}
              </span>
              <span className="text-sm md:text-base font-medium text-[#EEE5D7] max-w-[14rem]">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
