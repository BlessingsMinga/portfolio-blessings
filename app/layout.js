import "./globals.css";
import { Space_Grotesk, Roboto_Mono} from 'next/font/google'


const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'], // Or any desired weight
  subsets: ['latin'], 
  display:'swap',
  variable: '--font-spacegrotesk', // Or other subsets as needed
});

export const metadata = {
  title: "Welcome to my portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${robotoMono.variable} font-sans leading-8 
        overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
