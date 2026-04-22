import { motion } from "motion/react";
import SectionHeading from "../SectionHeading";
import { Mail, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <SectionHeading 
          subtitle="Get in Touch" 
          title="Let's Build Something Extraordinary"
          description="Ready to take your business to the next level? Connect with us directly through our official channels."
          centered
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center group hover:bg-gold/5 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl gold-bg flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <h4 className="text-white font-bold text-xl mb-2">Email Us</h4>
            <p className="text-white/40 mb-6">Direct line to our designers</p>
            <a href="mailto:peakweb.in@gmail.com" className="text-gold font-bold hover:underline">peakweb.in@gmail.com</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center group hover:bg-gold/5 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl gold-bg flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform">
              <Instagram size={28} />
            </div>
            <h4 className="text-white font-bold text-xl mb-2">Instagram</h4>
            <p className="text-white/40 mb-6">Follow our latest work</p>
            <a href="https://instagram.com/peakweb.in" target="_blank" rel="noopener noreferrer" className="text-gold font-bold hover:underline">@peakweb.in</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-1 bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0"
        >
          <div className="bg-[#050505] py-8">
            <p className="text-white/20 text-xs uppercase tracking-[0.5em] font-black">
              Taking New Projects for May 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
