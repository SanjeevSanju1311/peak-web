import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const backgroundColor = "rgba(5, 5, 5, 0.8)";
  const backdropBlur = "blur(12px)";

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Why Us", href: "#why-us", id: "why-us" },
    { name: "Reviews", href: "#reviews", id: "reviews" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling past hero (approx 80vh)
      const scrollPos = window.scrollY;
      const vh = window.innerHeight;
      setIsVisible(scrollPos > vh * 0.8);

      // Simple active section detection
      const sections = navLinks.map(link => document.getElementById(link.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ backgroundColor, backdropFilter: backdropBlur }}
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-white/5 transition-colors"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between font-display">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Peak Web Solutions Logo"
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                PEAK <span className="gold-gradient">WEB</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === link.id ? "text-gold" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] gold-bg"
                    />
                  )}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2 text-sm font-bold gold-bg text-black rounded-full hover:scale-105 active:scale-95 transition-transform"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="absolute top-full left-0 right-0 bg-[#050505] border-b border-white/10 p-6 md:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`text-lg font-medium transition-colors ${
                        activeSection === link.id ? "text-gold" : "text-white/70"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
