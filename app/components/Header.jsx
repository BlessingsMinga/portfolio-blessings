"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import SplitText from "./SplitText";

const Header = () => {
  // Animation variants for cleaner code
  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, delay },
  });

  return (
    <header className="w-full min-h-screen flex items-center justify-center px-4 py-12 relative">
      <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Greeting */}
        <motion.div
          className="flex items-center justify-center gap-2"
          {...fadeInUp(0.1)}
        >
          <h2 className="text-xl md:text-2xl font-medium">
            Hi! I'm Blessings Minga
          </h2>
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: [0, 15, -15, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-7 h-7 flex-shrink-0"
            aria-hidden="true"
          >
            <Image
              src={assets.hand_icon}
              alt=""
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <SplitText
          text="Full-Stack Creative & Data Specialist based in Lilongwe, Malawi."
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          tag="h1"
          delay={30}
          duration={0.8}
          splitType="chars"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.15}
          rootMargin="-50px"
          textAlign="center"
        />

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          {...fadeInUp(0.3)}
        >
          I'm a web developer and designer. I also work on graphics, UX/UI,
          branding, and data. I love using tech and creativity to solve problems
          and build cool things.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full"
          {...fadeInUp(0.4)}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-full bg-blue-600 text-white flex items-center justify-center gap-2 hover:bg-blue-700 focus-visible:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reach out
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1cL6ahU9ICUZMbsg3yeivWhXFeWgrviTX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-blue-600 flex items-center justify-center gap-2 hover:bg-blue-50 focus-visible:bg-blue-50 transition-colors duration-200 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My resume
            <Download className="w-4 h-4" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;