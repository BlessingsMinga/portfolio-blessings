import Image from 'next/image'; 
import { assets } from '../../assets/assets';
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
            <p>
              
            </p>
          </div>
        </div>
    </div>
  )
}

export default About
