import { assets } from '../../assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div>

    <div className='mt-20'>
        <Image src={assets.BlessingsM_} alt='' className='w-36 mx-auto' />

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            blessingsminga11@gmail.com
        </div>
    </div>

    <div className='text-center sm:flex items-center justify-between border border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>Copyright &#169; 2025 Blessings Minga. All rights reserved.</p>
        <ul>
            <li><a target='_blank' href="https://github.com/BlessingsMinga">Github</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/blessings-minga-9b6516256/">LinkedIn</a></li>
            <li><a target='_blank' href="https://instagram.com/blessingzmnga/">Instagram</a></li>

        </ul>
    </div>
      
    </div>
  )
}

export default Footer
