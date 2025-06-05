import { assets } from '../../assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    setShowResult(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "5f59528a-c45b-428b-b8c4-5ddf5d2489dd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Error submitting form. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection and try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
      // Hide the message after 5 seconds
      setTimeout(() => setShowResult(false), 5000);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-20 scroll-mt-20 bg-gray-50 relative overflow-hidden'>
      {/* Background Lottie Animation */}
      <div className='absolute inset-0 z-0 opacity-30'>
        <DotLottieReact
          src="https://lottie.host/91d35c19-f5f2-416e-bfa4-4a4c38c25d7e/YmLpZ1KNZA.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className='relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className='mb-16'
        >
          <h4 className='text-center mb-2 text-3xl'>Connect with me</h4>
          <motion.h2 
            className='text-center text-7xl font-bold text-blue-600'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let's Work Together
          </motion.h2>

          <motion.p 
            className='text-center max-w-2xl mx-auto mt-5 mb-12'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm always open to new opportunities, collaborations, and interesting projects. 
            If you have any questions, comments, or feedback, please use the form below.
          </motion.p>
        </motion.div>

        <motion.form 
          onSubmit={onSubmit} 
          className='max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg'
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <motion.div whileHover={{ scale: 1.02 }}>
              <input 
                type="text" 
                placeholder='Enter your name' 
                required 
                className='w-full p-3 outline-none border border-gray-300 rounded-md bg-gray-50 focus:border-blue-500 transition-colors'
                name='name'
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <input 
                type="email" 
                placeholder='Enter your email' 
                required 
                className='w-full p-3 outline-none border border-gray-300 rounded-md bg-gray-50 focus:border-blue-500 transition-colors'
                name='email'
              />
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <textarea 
              rows='6' 
              placeholder='Enter your message' 
              required
              className='w-full p-4 outline-none border border-gray-300 rounded-md bg-gray-50 mb-6 focus:border-blue-500 transition-colors'
              name='message'
            ></textarea>
          </motion.div>

          <div className='text-center'>
            <motion.button 
              type='submit' 
              className='py-3 px-8 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-full mx-auto hover:bg-blue-700 transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
              {!isSubmitting && <Image src={assets.right_arrow_white} alt='' className='w-4'/>}
            </motion.button>
          </div>
        </motion.form>

        {/* Animated Result Message */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              className='fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`px-6 py-4 rounded-full shadow-lg ${result.includes("Successfully") ? 'bg-green-500' : 'bg-red-500'} text-white flex items-center`}>
                <span>{result}</span>
                <motion.button 
                  onClick={() => setShowResult(false)}
                  className='ml-4'
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;