"use client";

import { lazy, Suspense } from "react";

// Lazy load below-the-fold components for faster initial load
const Navbar = lazy(() => import("./components/Navbar"));
const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const WhatsappLive = lazy(() => import("./components/WhatsappLIve"));

// Loading fallback for all lazy components
const SectionFallback = () => (
  <div className="w-full min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Header />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Work />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsappLive />
      </Suspense>
    </>
  );
}