"use client";

import { serviceData } from "../../assets/assets";
import React from "react";
import { Monitor, Smartphone, Palette, Brush, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const servicesWithIcons = [
    { ...serviceData[0], icon: <Monitor className="text-3xl text-blue-600" aria-hidden="true" /> },
    { ...serviceData[1], icon: <Smartphone className="text-3xl text-blue-600" aria-hidden="true" /> },
    { ...serviceData[2], icon: <Brush className="text-3xl text-blue-600" aria-hidden="true" /> },
    { ...serviceData[3], icon: <Palette className="text-3xl text-blue-600" aria-hidden="true" /> },
  ];

  return (
    <section id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h4 className="mb-2 text-3xl">What I offer</h4>
        <h2 className="text-7xl font-bold text-blue-600">My Services</h2>
        <p className="max-w-2xl mx-auto mt-5 mb-12 text-gray-600">
          Currently focused on building user experiences that drive growth.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid md:grid-cols-4 grid-cols-1 gap-6 my-10"
      >
        {servicesWithIcons?.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg my-4 font-semibold">{title}</h3>
            <p className="text-sm leading-5 mb-4 text-gray-600">{description}</p>
            {link && (
              <a
                href={link}
                className="inline-flex items-center gap-2 text-sm mt-5 text-blue-500 hover:text-blue-700 transition-colors"
                aria-label={`Learn more about ${title}`}
              >
                Know more
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;