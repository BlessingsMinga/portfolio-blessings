import Image from 'next/image'; 
import { assets, infoList, toolsData } from '../../assets/assets';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Changed to false to allow repeated animations
    threshold: 0.1,
    rootMargin: '-100px 0px -100px 0px' // Triggers 100px before element enters
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20' ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={container}
      >
        <motion.div variants={item}>
          <h4 className='text-center mb-2 text-lg'>Introduction</h4>
          <h2 className='text-center font-bold text-7xl'>About me</h2>
        </motion.div>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <motion.div 
            className='w-64 sm:w-80 rounded-3xl max-w-none'
            initial="hidden"
            animate={controls}
            variants={imageAnimation}
          >
            <Image src={assets.box_profile} alt='Blessings Minga Image' className='w-full rounded-3xl'/>
          </motion.div>

          <motion.div 
            className='flex-1'
            initial="hidden"
            animate={controls}
            variants={container}
          >
            <motion.p className='mb-10 max-w-2xl' variants={item}>
              I'm a creative and tech-driven professional currently studying Information and Communication Technology at Daeyang University, with a focus on Software Development. I work across front-end web development, graphic and brand design, UX/UI,
              and data analysis. My goal is to combine creativity and technology to build smart, user-friendly digital solutions that solve real problems and bring value to businesses and users alike.
            </motion.p>

            <motion.ul 
              className='grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl'
              variants={container}
            >
              {infoList.map(({icon, iconDark, title, description}, index) => (
                <motion.li 
                  key={index} 
                  className='border-[0.5px] border-blue-800 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-shadow'
                  variants={item}
                  whileHover={{ y: -5 }}
                >
                  <Image src={icon} alt={title} className='w-7 mt-3'/>
                  <h3 className='my-4 font-semibold text-blue-950'>{title}</h3>
                  <p className='text-gray-600 text-sm'>{description}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4 className='my-6 text-gray-700' variants={item}>Tools I use</motion.h4>

            <motion.ul 
              className='flex items-center gap-3 sm:gap-5 flex-wrap'
              variants={container}
            >
              {toolsData.map((tool, index) => (
                <motion.li 
                  key={index} 
                  className='flex items-center justify-center w-12 smartw-14 aspect-square border border-blue-800 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image src={tool} alt='Tools' className='w-5 sm:w-7'/>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default About;