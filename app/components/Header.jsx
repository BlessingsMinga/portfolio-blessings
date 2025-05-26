import { assets } from '../../assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Header = () => {
  // Scroll progress tracking
  const { scrollYProgress } = useScroll();
  
  // Create opacity transforms based on scroll position
  const greetingOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const descriptionOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <header className='w-full min-h-screen flex items-center justify-center px-4 py-12'>
      <div className='w-full max-w-3xl mx-auto text-center flex flex-col items-center gap-6'>
        {/* Greeting */}
        <motion.div 
          className='flex items-center justify-center gap-2'
          style={{ opacity: greetingOpacity }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Changed to false for scroll-up animation
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className='text-xl md:text-2xl font-medium font-Poppins'>
            Hi! I'm Blessings Minga
          </h2>
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: [0, 15, -15, 0] }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image 
              src={assets.hand_icon} 
              alt='Waving hand' 
              width={24}
              height={24}
              className='w-7 h-7'
            />
          </motion.div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          className='text-4xl sm:text-5xl lg:text-6xl font-bold font-space_Grotesk leading-tight'
          style={{ opacity: headingOpacity }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Full-Stack Creative & Data Specialist based in <span className='text-blue-600'>Lilongwe, Malawi.</span>
        </motion.h1>

        <div className="absolute left-0 top-1/1 -translate-y-1/2 w-[600px] h-[600px] opacity-30 -z-10 pointer-events-none">
        <DotLottieReact
          src="https://lottie.host/2c60e1ce-476a-4288-bc48-be6a19a4b764/0C40bodDqd.lottie"
          loop
          autoplay
          className="w-full h-full"
        />
      </div>


        
        {/* Description */}
        <motion.p 
          className='text-lg text-gray-600 max-w-2xl mx-auto'
          style={{ opacity: descriptionOpacity }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I'm a web developer and designer. I also work on graphics, UX/UI,
          branding, and data. I love using tech and creativity to solve problems and build cool things.
        </motion.p>
        
        {/* Action Buttons */}
        <motion.div 
          className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full'
          style={{ opacity: buttonsOpacity }}
        >
          {/* Contact me button - comes from left */}
          <motion.a 
            href="#contact" 
            className='px-8 py-3 rounded-full bg-blue-600 text-white flex items-center justify-center gap-2 
            hover:bg-blue-400 transition-colors duration-200 w-full sm:w-auto'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reach out
            <Image 
              src={assets.right_arrow} 
              alt='' 
              width={80}
              height={40}
              className='w-5 h-5'
            />
          </motion.a>

          {/* My resume button - comes from right */}
          <motion.a 
            href="/sample.pdf" 
            download 
            className='px-8 py-3 rounded-full border border-blue-600 flex items-center justify-center gap-2 
            hover:bg-blue-400 transition-colors duration-200 w-full sm:w-auto'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My resume 
            <Image 
              src={assets.download_icon} 
              alt='' 
              width={16}
              height={16}
              className='w-4 h-4'
            />
          </motion.a>
        </motion.div>
      </div>
    </header>
  )
}

export default Header;