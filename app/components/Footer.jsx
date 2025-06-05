import { assets } from '../../assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div>

    <div className='mt-20'>
        <Image src={assets.BlessingsM_} alt='' className='w-36 mx-auto' />
    </div>
      
    </div>
  )
}

export default Footer
