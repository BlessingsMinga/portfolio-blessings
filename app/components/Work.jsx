import Image from 'next/image'
import { assets, workData } from '../../assets/assets'
import { motion } from 'framer-motion'
import React from 'react'

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const hoverEffect = {
  scale: 1.03,
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
}

const Work = () => {
  return (
    <section id='work' className='w-full px-[12%] py-20 scroll-mt-20'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className='mb-16'
      >
        <h4 className='text-center text-5xl mb-2'>
          My Portfolio
        </h4>
        <motion.h2 
          className='text-center text-7xl text-blue-600 font-bold'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          see what I can create
        </motion.h2>

        <motion.p 
          className='text-center max-w-2xl mx-auto mt-5 mb-12'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Links to be clickable soon <span className='text-blue-600 animate-pulse'>....</span>
        </motion.p>
      </motion.div>

      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {workData.map((project, index) => (
          <motion.div 
            key={index} 
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer overflow-hidden group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            variants={item}
            whileHover={hoverEffect}
          >
            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
            <motion.div 
              className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7 shadow-lg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.8 }}
            >
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm'>{project.description}</p>
                
              </div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href={project.Link} target="_blank" rel="noopener noreferrer">
                  <Image src={assets.send_icon} alt='Icon' className='w-5'/>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Work