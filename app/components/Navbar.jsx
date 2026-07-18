"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "About me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "My Work", href: "#work" },
  { label: "Contact me", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [2, 0]);
  const navBackground = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["transparent", "rgba(255, 255, 222, 0.4)"]
  );

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* Hero Background Image with scroll-controlled opacity */}
      <motion.div
        className="fixed inset-0 -z-50 w-full h-full overflow-hidden"
        style={{ opacity }}
      >
        <Image
          src={assets.hero}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Blob decoration */}
      <div className="fixed top-7 right-0 w-11/12 -z-40 translate-y-[-70%]">
        <Image
          src={assets.Blob}
          alt=""
          className="w-full"
          priority
          sizes="100vw"
        />
      </div>

      {/* Main Navigation */}
      <motion.nav
        className="w-full fixed px-5 lg:px-8 py-4 flex items-center justify-between z-50"
        style={{
          background: navBackground,
          backdropFilter: "blur(10px)",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="#top" aria-label="Go to homepage">
          <Image
            src={assets.BlessingsM_}
            className="w-35 cursor-pointer mr-9"
            alt="Blessings Minga Logo"
            width={120}
            height={40}
            priority
          />
        </a>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-10 font-normal">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-blue-600 rounded-full ml-4 hover:bg-blue-50 transition-colors duration-200"
          >
            Contact
            <ArrowRight className="w-3.5" aria-hidden="true" />
          </a>

          <button
            className="block md:hidden ml-3 p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`fixed top-0 right-0 bottom-0 w-64 z-50 bg-blue-700 transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={closeMobileMenu}
            className="absolute right-6 top-6 p-2 rounded-md hover:bg-blue-600 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 text-white" aria-hidden="true" />
          </button>
          <ul className="flex flex-col gap-4 py-20 px-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  onClick={closeMobileMenu}
                  className="text-gray-50 text-lg hover:text-white hover:underline transition-all block py-2"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;