"use client";

import { motion } from "framer-motion";

interface ImpactCounterProps {
  yearsLabel: string;
  womenLabel: string;
  girlsLabel: string;
  communitiesLabel: string;
}

export default function ImpactCounter({
  yearsLabel,
  womenLabel,
  girlsLabel,
  communitiesLabel,
}: ImpactCounterProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  const metrics = [
    { value: "30+", label: yearsLabel },
    { value: "[XX],000+", label: womenLabel },
    { value: "[XX],000+", label: girlsLabel },
    { value: "[XX]+", label: communitiesLabel },
  ];

  return (
    <section className="bg-[#7B2431] text-white py-12 border-y-4 border-[#D7A43B]">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col space-y-2">
              <span className="text-4xl md:text-5xl font-bold text-[#D7A43B]">{metric.value}</span>
              <span className="text-sm md:text-base font-medium">{metric.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
