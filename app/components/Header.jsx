import { assets } from '../../assets/assets';
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full min-h-screen flex items-center justify-center px-4 py-12'>
      <div className='w-full max-w-3xl mx-auto text-center flex flex-col items-center gap-6'>
        {/* Profile Image
        <div className='w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200'>
          <Image 
            src={assets.Profile2} 
            alt='Blessings Minga' 
            width={64}
            height={64}
            className='object-cover w-full h-full'
          />
        </div> */}
        
        {/* Greeting */}
        <div className='flex items-center justify-center gap-2'>
          <h2 className='text-xl md:text-2xl font-medium font-Poppins'>
            Hi! I'm Blessings Minga
          </h2>
          <Image 
            src={assets.hand_icon} 
            alt='Waving hand' 
            width={24}
            height={24}
            className='w-6 h-6'
          />
        </div>
        
        {/* Main Heading */}
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold font-space_Grotesk leading-tight'>
          Front-end web developer based in <span className='text-blue-600'>Lilongwe, Malawi</span>.
        </h1>
        
        {/* Description */}
        <p className='text-lg text-gray-600 max-w-2xl mx-auto font-Poppins'>
          I am a frontend developer from Lilongwe, Malawi with 10 years of 
          experience in multiple companies like Microsoft, Tesla and Apple.
        </p>
        
        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full'>
          <a 
            href="#contact" 
            className='px-8 py-3 rounded-full bg-black text-white flex items-center justify-center gap-2 
            hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto'
          >
            Contact me 
            <Image 
              src={assets.right_arrow} 
              alt='' 
              width={50}
              height={16}
              className='w-6 h-4'
            />
          </a>

          <a 
            href="/sample.pdf" 
            download 
            className='px-8 py-3 rounded-full border border-gray-300 flex items-center justify-center gap-2 
            hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto'
          >
            My resume 
            <Image 
              src={assets.download_icon} 
              alt='' 
              width={16}
              height={16}
              className='w-4 h-4'
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header