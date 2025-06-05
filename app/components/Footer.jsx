import React from 'react';
import { motion } from 'framer-motion';
import { RiMailLine, RiGithubFill, RiLinkedinFill, RiInstagramLine } from 'react-icons/ri';
import Image from 'next/image';
import { assets } from '../../assets/assets';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'Github', 
      url: 'https://github.com/BlessingsMinga', 
      icon: <RiGithubFill size={20} /> 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/blessings-minga-9b6516256/', 
      icon: <RiLinkedinFill size={20} /> 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/blessingzmnga/', 
      icon: <RiInstagramLine size={20} /> 
    }
  ];

  return (
    <footer className="bg-gray-50 pt-20 pb-10 px-[10%]">
      <div className="max-w-6xl mx-auto">
        {/* Logo and email */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <Image src={assets.BlessingsM_} alt='' className='w-36 mx-auto mb-2' />
          
          <motion.a 
            href="mailto:blessingsminga11@gmail.com"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <RiMailLine size={20} />
            <span>blessingsminga11@gmail.com</span>
          </motion.a>
        </motion.div>

        {/* Copyright and social links */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            Copyright © {new Date().getFullYear()} Blessings Minga. All rights reserved.
          </motion.p>

          <motion.ul 
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1"
                  whileHover={{ y: -2 }}
                  aria-label={link.name}
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;