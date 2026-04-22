import { motion } from "motion/react";
import SectionHeading from "../SectionHeading";
import { 
  Code2, 
  Smartphone, 
  Layout, 
  Zap, 
  ShieldCheck, 
  Search 
} from "lucide-react";

const services = [
  {
    title: "Bespoke Web Design",
    description: "Tailor-made interfaces that reflect your brand identity and captivate your audience from the first click.",
    icon: Layout,
    color: "from-blue-500/20 to-cyan-500/0"
  },
  {
    title: "E-Commerce Solutions",
    description: "Launch your online store with secure payments, inventory management, and a seamless checkout experience.",
    icon: Zap,
    color: "from-gold/20 to-gold/0"
  },
  {
    title: "Mobile Optimization",
    description: "Fully responsive designs that look and perform flawlessly on every device, from mobile to ultra-wide screens.",
    icon: Smartphone,
    color: "from-purple-500/20 to-pink-500/0"
  },
  {
    title: "Custom Development",
    description: "Advanced functionality built with the latest technologies for stability, security, and extreme speed.",
    icon: Code2,
    color: "from-emerald-500/20 to-teal-500/0"
  },
  {
    title: "SEO Mastery",
    description: "Optimized from the ground up to ensure your business ranks high and gets discovered by your ideal customers.",
    icon: Search,
    color: "from-orange-500/20 to-red-500/0"
  },
  {
    title: "Security & Hosting",
    description: "Enterprise-grade hosting and security patches to keep your data safe and your site online 24/7.",
    icon: ShieldCheck,
    color: "from-zinc-500/20 to-zinc-500/0"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Our Services" 
          title="Advanced Solutions, Base Prices"
          description="We blend high-end aesthetics with powerful engineering to deliver websites that don't just stand out—they dominate."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              className="group relative p-8 rounded-3xl glass hover:bg-white/[0.05] transition-all duration-500 border border-white/5 hover:border-gold/20"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} border border-white/10 flex items-center justify-center mb-6 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all duration-500`}>
                <service.icon size={28} />
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                {service.description}
              </p>

              <motion.div 
                className="mt-8 flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn More
                <div className="w-4 h-[1px] bg-gold" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[3.5rem] gold-bg flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-display font-bold text-black tracking-tight mb-2">
              Ready to scale your business?
            </h3>
            <p className="text-black/60 font-medium text-lg">
              Get your custom website delivered in just 2 days.
            </p>
          </div>
          <a 
            href="#contact"
            className="relative z-10 px-10 py-5 bg-black text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-transform"
          >
            Book a Design Call
          </a>
          
          {/* Decorative graphic */}
          <div className="absolute top-0 right-0 h-full w-1/3 bg-white/10 skew-x-12 translate-x-20" />
          <div className="absolute top-0 right-0 h-full w-1/4 bg-white/5 skew-x-12 translate-x-40" />
        </motion.div>
      </div>
    </section>
  );
}
