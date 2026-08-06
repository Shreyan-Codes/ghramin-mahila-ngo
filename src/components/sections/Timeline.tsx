"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

export default function Timeline({ title, items }: TimelineProps) {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-[#242424] mb-4">{title}</h2>
          <div className="mithila-divider mx-auto bg-[#D7A43B] w-24 h-1"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#EEE5D7] md:-ml-0.5"></div>

          <div className="space-y-12">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              const colorClass = index % 3 === 0 ? "bg-[#7B2431]" : index % 3 === 1 ? "bg-[#D7A43B]" : "bg-[#C96145]";
              const textColorClass = index % 3 === 0 ? "text-[#7B2431]" : index % 3 === 1 ? "text-[#D7A43B]" : "text-[#C96145]";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start md:items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full ${colorClass} border-2 border-white md:-ml-2 mt-1.5 md:mt-0 z-10`}></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                    <div className="card p-6 bg-white shadow-sm border border-[#EEE5D7] rounded-lg relative hover:shadow-md transition-shadow">
                      <span className={`text-xl font-bold ${textColorClass} mb-2 block`}>{item.year}</span>
                      <h3 className="text-lg font-bold text-[#242424] mb-2">{item.title}</h3>
                      <p className="text-[#6C6A67]">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
