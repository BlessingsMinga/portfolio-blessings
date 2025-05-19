/** @type {import('tailwindcss').config} */

import { Ovo, Poppins, Space_Grotesk } from 'next/font/google';

export default{
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./componets/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],// or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover:  '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        space_Grotesk: ["Space_Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        ovo: ["Ovo", "sans-serif"],
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
