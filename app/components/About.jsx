import Image from 'next/image'; 
import { assets, infoList } from '../../assets/assets';
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>

        <h4 className='text-center mb-2 text-lg'>Introduction</h4>
        <h2 className='text-center font-bold text-7xl'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.box_profile} alt='Blessings Minga Image' className='w-full rounded-3xl'/>
          </div>

          <div className='flex-1'>
            <p className='mb-10 max-w-2xl'>
            I’m a creative and tech-driven professional currently studying Information and Communication Technology at Daeyang University, with a focus on Software Development. I work across front-end web development, graphic and brand design, UX/UI,
            and data analysis. My goal is to combine creativity and technology to build smart, user-friendly digital solutions that solve real problems and bring value to businesses and users alike.
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-5
            max-w-2xl'>
              {infoList.map(({icon, iconDark, title, description},
                index) => (
                <li key={index} className='border-[0.5px] border-blue-800 rounded-xl p-6 cursor-pointer'>
                  <Image src={icon} alt={title} className='w-7 mt-3'/>
                  <h3 className='my-4 font-semibold text-blue-950'>{title}</h3>
                  <p className='text-gray-600 text-sm'>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default About
