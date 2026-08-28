"use client";

import Image from "next/image";
import { assets, infoList, toolsData } from "../../assets/assets";
import React from "react";
import { motion } from "framer-motion";
import { Code2, GraduationCap, FolderGit2 } from "lucide-react";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const getIcon = (title) => {
    switch (title) {
      case "Languages":
        return <Code2 className="w-9 h-9 mt-2 text-blue-600" aria-hidden="true" />;
      case "Education":
        return <GraduationCap className="w-9 h-9 mt-2 text-blue-600" aria-hidden="true" />;
      case "Projects":
        return <FolderGit2 className="w-9 h-9 mt-2 text-blue-600" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center">
          <h4 className="mb-2 text-3xl">Introduction</h4>
          <h2 className="font-bold text-7xl text-blue-600">About me</h2>
        </motion.div>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <motion.div
            className="w-64 sm:w-80 rounded-3xl max-w-none flex-shrink-0"
            variants={imageVariants}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 15px -5px rgba(0, 27, 187, 0.8), 0 2px 5px -3px rgba(131, 149, 255, 0.8)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={assets.box_profile}
              alt="Blessings Minga - Full Stack Developer"
              className="w-full border-[5px] rounded-3xl"
              width={320}
              height={320}
              loading="lazy"
            />
          </motion.div>

          <motion.div className="flex-1" variants={containerVariants}>
            <motion.p className="mb-10 max-w-2xl text-gray-700" variants={itemVariants}>
              I'm a creative and tech-driven professional currently studying
              Information and Communication Technology at Daeyang University, with a
              focus on Software Development. I work across front-end web development,
              graphic and brand design, UX/UI, and data analysis. My goal is to combine
              creativity and technology to build smart, user-friendly digital solutions
              that solve real problems and bring value to businesses and users alike.
            </motion.p>

            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl"
              variants={containerVariants}
            >
              {infoList.map(({ title, description }, index) => (
                <motion.li
                  key={index}
                  className="border-[0.5px] border-blue-800 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-shadow"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  {getIcon(title)}
                  <h3 className="my-4 font-semibold text-blue-900">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4 className="my-6 mt-9 text-gray-700" variants={itemVariants}>
              Tools I use
            </motion.h4>

            <motion.ul
              className="flex items-center gap-3 sm:gap-5 flex-wrap"
              variants={containerVariants}
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-blue-800 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={tool}
                    alt="Development tool"
                    className="w-5 sm:w-7"
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
