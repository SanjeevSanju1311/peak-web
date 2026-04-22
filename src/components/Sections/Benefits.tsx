import { motion } from "motion/react";
import SectionHeading from "../SectionHeading";
import { TrendingUp, Users, Clock, Globe, BarChart3 } from "lucide-react";

export default function Benefits() {
  return (
    <section id="why-us" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="The Impact" 
          title="Why Your Business Needs a Professional Home"
          description="In today's digital landscape, your website is your 24/7 storefront. If you're not online, you're missing out on 90% of your potential customers."
        />

        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Big Bento Item */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-2 glass rounded-[2.5rem] p-10 flex flex-col justify-end relative overflow-hidden group border border-white/5"
          >
            <div className="absolute inset-0 z-0 flex items-center justify-center p-12 opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700">
              <svg viewBox="0 0 200 200" className="w-full h-full text-gold" fill="currentColor">
                {/* Background Grid */}
                <path d="M20 180h160M40 20v160M80 20v160M120 20v160M160 20v160M20 140h160M20 100h160M20 60h160" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
                {/* Growth Bars */}
                <rect x="35" y="130" width="15" height="50" rx="2" opacity="0.4" />
                <rect x="65" y="100" width="15" height="80" rx="2" opacity="0.6" />
                <rect x="95" y="70" width="15" height="110" rx="2" opacity="0.8" />
                <rect x="125" y="40" width="15" height="140" rx="2" />
                <rect x="155" y="20" width="15" height="160" rx="2" opacity="0.5" />
                {/* Growth Arrow (Animated-like path) */}
                <path d="M20 160c40-10 60-40 100-80s40-40 60-60m0 0h-20m20 0v20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl gold-bg flex items-center justify-center mb-6 text-black">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">Infinite Growth Potential</h3>
              <p className="text-white/50 max-w-sm">
                A custom website scales with your business. Reach customers globally and automate your sales process without lifting a finger.
              </p>
            </div>
          </motion.div>

          {/* Medium Bento Items - Top Right */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass rounded-[2.5rem] p-10 flex flex-col justify-center border border-white/5 bg-gradient-to-br from-gold/5 to-transparent"
          >
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gold border border-white/10">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Build Instant Authority</h3>
                <p className="text-white/40 text-sm">
                  First impressions are everything. A polished, modern website signals to clients that you are a serious, trustworthy professional.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right Items - Now Filling the Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass rounded-[2.5rem] p-8 flex flex-col justify-center border border-white/5"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold border border-white/10 mb-4">
              <Clock size={20} />
            </div>
            <h4 className="text-lg font-display font-bold text-white mb-2">Save Time</h4>
            <p className="text-white/40 text-xs leading-relaxed">Automate lead capture and FAQ responses while you sleep.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass rounded-[2.5rem] p-8 flex flex-col justify-center border border-white/5"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold border border-white/10 mb-4">
              <Globe size={20} />
            </div>
            <h4 className="text-lg font-display font-bold text-white mb-2">Global Reach</h4>
            <p className="text-white/40 text-xs leading-relaxed">Break geographic barriers and find your niche in the global market.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass rounded-[2.5rem] p-8 flex flex-col justify-center border border-white/5 bg-gold/5"
          >
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-gold border border-white/10 mb-4">
              <BarChart3 size={20} />
            </div>
            <h4 className="text-lg font-display font-bold text-white mb-2">Data Analytics</h4>
            <p className="text-white/40 text-xs leading-relaxed">Track visitor behavior and optimize for peak performance.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
