/** @type {import('tailwindcss').config} */
import { Roboto_Mono , Space_Grotesk } from 'next/font/google'

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
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ["var(--font-roboto-mono)"],
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
