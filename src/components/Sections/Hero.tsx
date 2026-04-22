import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown, TrendingUp } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const marqueeKeywords = [
    "MODERN UI", "LIGHTNING FAST", "CONVERSION OPTIMIZED", 
    "SEO MASTERED", "MOBILE FIRST", "STUNNING DESIGN",
    "CUSTOM CODE", "48H DELIVERY", "PEAK PERFORMANCE"
  ];

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Parallax Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Floating Mountain Outlines */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <svg viewBox="0 0 1000 500" className="w-[150%] rotate-3 opacity-10">
          <path d="M0 500L200 100L400 400L600 200L800 450L1000 150V500H0Z" fill="white" />
        </svg>
      </motion.div>

      <div className="flex-1 w-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold tracking-widest uppercase mb-6">
              <div className="w-4 h-4">
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
              Peak Web Solutions
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter text-white mb-6">
              THE <span className="gold-gradient">ULTIMATE</span><br />
              DIGITAL EXPERIENCE
            </h1>
            
            <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
              We don't just build websites; we craft digital masterpieces that drive growth. 
              Get your premium custom platform in just 2 days.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 gold-bg text-black font-bold rounded-xl flex items-center gap-2 group transform transition-transform hover:scale-105 active:scale-95"
              >
                Book a Design Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 glass text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-colors"
              >
                Our Service
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 w-full aspect-video rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-gold/10">
               <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop"
                alt="Modern UI Workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* UI Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-xl border border-gold/20 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gold-bg flex items-center justify-center">
                  <TrendingUp size={16} className="text-black" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xs">Performance</span>
                  <span className="text-gold text-[10px] font-black tracking-tighter">100/100</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Infinity Scroll Marquee */}
      <div className="w-full bg-white/[0.02] border-y border-white/5 py-4 relative z-10">
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 px-6"
          >
            {marqueeKeywords.concat(marqueeKeywords).map((word, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-white/30 text-sm font-display font-bold tracking-[0.2em]">{word}</span>
                <div className="w-1.5 h-1.5 rounded-full gold-bg opacity-30" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2"
      >
        <ChevronDown size={20} className="text-white/20" />
      </motion.div>
    </section>
  );
}
