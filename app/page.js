'use client'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import services  from "./components/services";


export default function Home() {
  return (
    <>
   <Navbar />
   <br></br>
   <Header />
   <About />
   <services />
   </>
  );
}
