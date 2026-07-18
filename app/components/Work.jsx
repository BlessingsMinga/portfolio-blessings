"use client";

import Image from "next/image";
import { workData } from "../../assets/assets";
import { motion } from "framer-motion";
import React from "react";
import { ArrowUpRight } from "lucide-react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Work = () => {
  return (
    <section id="work" className="w-full px-[12%] py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h4 className="text-5xl mb-2">My Portfolio</h4>
        <h2 className="text-7xl text-blue-600 font-bold">
          See what I can create
        </h2>
        <p className="max-w-2xl mx-auto mt-5 mb-12 text-gray-600">
          For now, browse through my creative work
          <span className="text-blue-600 animate-pulse ml-1">...</span>
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer overflow-hidden group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            variants={item}
            whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } }}
            role="article"
            aria-label={`Project: ${project.title}`}
          >
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-300 group-hover:bottom-7 shadow-lg">
              <div>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>

              <a
                href={project.Link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label={`View ${project.title} project`}
              >
                <ArrowUpRight className="w-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;