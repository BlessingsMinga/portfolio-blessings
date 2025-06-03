import { serviceData } from '../../assets/assets';
import React from 'react';
import { RiComputerLine, RiCodeSSlashLine, RiSmartphoneLine, RiCloudLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const servicesWithIcons = [
    {
      ...serviceData[0],
      icon: <RiComputerLine className="text-3xl text-blue-600" />
    },
    {
      ...serviceData[1],
      icon: <RiCodeSSlashLine className="text-3xl text-blue-600" />
    },
    {
      ...serviceData[2],
      icon: <RiSmartphoneLine className="text-3xl text-blue-600" />
    },
    {
      ...serviceData[3],
      icon: <RiCloudLine className="text-3xl text-blue-600" />
    }
  ];

  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h4 className='mb-2 text-3xl'>
          What I offer
        </h4>
        <h2 className='text-7xl font-bold text-blue-600'>
          My Services
        </h2>
        <p className='max-w-2xl mx-auto mt-5 mb-12'>
          Currently focused on building user experiences that drive growth.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className='grid md:grid-cols-4 grid-cols-1 gap-6 my-10'
      >
        {servicesWithIcons?.map(({icon, title, description, link}, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              {icon}
            </div>
            <h3 className='text-lg my-4 font-semibold'>{title}</h3>
            <p className='text-sm leading-5 mb-4'>
              {description}
            </p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5 text-blue-500 hover:text-blue-700 transition-colors'>
              Know more <span>→</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services;