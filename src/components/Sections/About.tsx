import { motion } from "motion/react";
import SectionHeading from "../SectionHeading";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative group p-4 md:p-8"
        >
          <motion.div 
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="relative aspect-square rounded-[3rem] overflow-hidden bg-black flex flex-col items-center justify-center p-12 border border-white/5 shadow-2xl"
          >
            <div className="w-48 h-48 mb-8">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M20 160L80 60L120 120L150 70L200 160H20Z"
                  fill="#D4AF37"
                />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-white font-display font-bold text-5xl tracking-tighter mb-2">PEAK</p>
              <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-medium">Web Solutions</p>
            </div>
          </motion.div>
          
          <div className="absolute bottom-0 right-0 md:-bottom-2 md:-right-2 glass p-6 md:p-8 rounded-3xl border border-gold/20 shadow-2xl z-20">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-display font-bold text-white">48</span>
              <span className="text-lg md:text-xl font-display font-bold text-gold">Hrs</span>
            </div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Guaranteed Delivery</p>
          </div>

          <div className="absolute top-0 left-0 md:-top-2 md:-left-2 w-20 h-20 md:w-24 md:h-24 gold-bg rounded-full flex items-center justify-center -rotate-12 animate-float z-20 shadow-xl shadow-gold/20">
             <span className="font-display font-bold text-black text-center text-xs md:text-base leading-none">
               FAST<br/>TRACK
             </span>
          </div>
        </motion.div>

        <div>
          <SectionHeading 
            subtitle="Our Story" 
            title="Elevating Small Businesses Through Peak Design"
            description="Peak Web Solutions was born from a simple realization: small businesses deserve top-tier digital experiences without the enterprise price tag or 3-month wait times."
          />

          <div className="space-y-6">
            <p className="text-white/70 leading-relaxed">
              We specialize in creating lightning-fast, conversion-optimized websites that don't just look pretty—they work. Our focus is on precision, speed, and impact.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Modern Tech Stack",
                "Conversion Optimized",
                "2-Day Turnaround",
                "Fixed Pricing",
                "Mobile-First Design",
                "Lifetime Support"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <div className="w-5 h-5 rounded-full gold-bg flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-black" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                    <img 
                      src={`https://i.pravatar.cc/100?u=${i}`} 
                      alt="Reviewer" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-bold">Trusted by 200+ Businesses</p>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-gold text-xs">★</span>
                  ))}
                  <span className="text-[10px] text-white/40 uppercase ml-1">Across Asia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
