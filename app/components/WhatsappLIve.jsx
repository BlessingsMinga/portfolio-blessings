"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const WhatsappLive = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "+265992092766";
  const message =
    "🚀 Thanks for stopping by! Ready to discuss your project, collaborate, or just say hello?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    // Debounced scroll handler using requestAnimationFrame
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={whatsappLink}
        target="_blank"
        rel="noreferrer noopener"
        className="relative block"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsating rings */}
        <motion.span
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.4, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 -z-50 h-16 w-16 rounded-full bg-blue-600 opacity-20"
          aria-hidden="true"
        />
        <motion.span
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute left-0 top-0 -z-50 h-16 w-16 rounded-full bg-blue-500 opacity-50"
          aria-hidden="true"
        />

        {/* WhatsApp icon */}
        <motion.div
          whileHover={{ rotate: 15 }}
          className="relative h-16 w-16"
        >
          <Image
            src={assets.whatsapp}
            alt=""
            width={100}
            height={100}
            className="object-contain p-3"
            priority
          />
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

export default WhatsappLive;