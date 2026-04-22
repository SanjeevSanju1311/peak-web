import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full transform group-hover:scale-110 transition-transform"
                >
                  <path
                    d="M20 160L80 60L120 120L150 70L200 160H20Z"
                    fill="#D4AF37"
                  />
                </svg>
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter text-white">
                PEAK <span className="gold-gradient">WEB</span>
              </span>
            </a>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              We create stunning, high-performance websites for businesses that refuse to settle for average. Reach the peak of digital success in 48 hours.
            </p>
            <div className="flex gap-4">
              {[Instagram].map((Icon, i) => (
                <a key={i} href="https://instagram.com/peakweb.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {["Web Design", "E-Commerce", "SEO Optimization", "Web Apps", "Hosting"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/40 hover:text-gold transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Work", "Reviews", "FAQ"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-white/40 hover:text-gold transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-white/20 text-xs font-medium uppercase tracking-[0.2em]">
          <p>© 2026 Peak Web Solutions. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decorative mountain stroke at bottom */}
      <div className="absolute bottom-0 left-0 w-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full">
           <path 
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#D4AF37"
          />
        </svg>
      </div>
    </footer>
  );
}
