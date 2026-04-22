import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "../SectionHeading";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can you deliver a website in 2 days?",
    answer: "We use a refined, agile production process and a battle-tested core engine that allows us to focus 100% on design and content without reinventing the wheel every time."
  },
  {
    question: "Are the websites mobile-friendly?",
    answer: "Absolutely. Every site we build is 'Mobile-First,' meaning it looks and performs perfectly on phones, tablets, and desktops alike."
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: "Yes, we offer premium hosting packages with SSL certificates, daily backups, and security monitoring so you never have to worry about your site being down."
  },
  {
    question: "Can I update the content myself later?",
    answer: "We offer both static sites for maximum speed and CMS-integrated sites (like Sanity or Contentful) if you need frequent updates. We'll guide you on the best choice for your needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          subtitle="Support" 
          title="Frequently Asked Questions"
          centered
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-xl font-display font-bold text-white">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gold transition-transform duration-500 ${openIndex === index ? "rotate-180" : ""}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-white/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
