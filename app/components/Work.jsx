import Image from 'next/image';
import { assets, infoList, toolsData } from '../../assets/assets';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Work = () => {
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
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20' ref={ref}>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={container}
            >
                <motion.div variants={item}>
                    <h4 className='text-center mb-2 text-lg'>My Portfolio</h4>
                    <h2 className='text-center font-bold text-7xl text-blue-600'>see what I can create</h2>
                </motion.div>

                <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

                    <motion.div
                        className='flex-1'
                        initial="hidden"
                        animate={controls}
                        variants={container}
                    >
                        <motion.p className='mb-10 max-w-2xl' variants={item}>
                            Welcome to my digital portfolio. Here you'll find my front-end web development, graphic and brand design, UX/UI,
                            and data analysis. work and project examples demonstrating my technical skills.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}


export default Work
