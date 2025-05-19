import {  Ovo, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"], weight: ["400", "500", "600", "700",]
});

const ovo= Ovo({
  subsets: ["latin"], weight: ["400",]
});

const space_Grotesk = Space_Grotesk({
  subsets: ["latin"], weight: ["400",] 
});

export const metadata = {
  title: "Welcome to my portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${space_Grotesk.className} ${poppins.className} antialiased leading-8 
        overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
