"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { assets } from '../../assets/assets';
import { motion, useAnimation, useInView } from 'framer-motion';

const WhatsappLive = () => {
    const whatsappNumber = "+265992092766";
    const message = '🚀 Thanks for stopping by! Ready to discuss your project, collaborate, or just say hello?';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    // Scroll animation
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                controls.start("visible");
            } else {
                controls.start("hidden");
            }
        };
        
        // Initial check
        handleScroll();
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    // Entrance animation when component comes into view
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
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
            >
                {/* Double pulsating rings */}
                <motion.span 
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 0.4, 0.7]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute left-0 top-0 -z-50 h-16 w-16 rounded-full bg-blue-600  opacity-20"
                />
                <motion.span 
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.2, 0.5]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="absolute left-0 top-0 -z-50 h-16 w-16 rounded-full bg-blue-500 opacity-50"
                />
                
                {/* WhatsApp icon */}
                <motion.div
                    whileHover={{ rotate: 15 }}
                    className="relative h-16 w-16"
                >
                    <Image 
                        src={assets.whatsapp} 
                        alt="Chat on WhatsApp" 
                        width={100}
                        height={100}
                        className="object-contain p-3"
                    />
                </motion.div>
            </motion.a>
        </motion.div>
    );
};

export default WhatsappLive;