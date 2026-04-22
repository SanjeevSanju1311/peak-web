/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Services from "./components/Sections/Services";
import Benefits from "./components/Sections/Benefits";
import Testimonials from "./components/Sections/Testimonials";
import FAQ from "./components/Sections/FAQ";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 5-second loading period as requested
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-gold selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <main key="main-content" className="relative">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Benefits />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
            
            {/* Custom Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
               <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full animate-float" />
               <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-gold/5 blur-[100px] rounded-full animate-float [animation-delay:2s]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                     <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                       <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                     </pattern>
                   </defs>
                   <rect width="100%" height="100%" fill="url(#grid)" />
                 </svg>
               </div>
            </div>
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
