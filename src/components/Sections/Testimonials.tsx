import { motion } from "motion/react";
import SectionHeading from "../SectionHeading";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Alex Rivers",
    role: "CEO, TechFlow",
    text: "Peak Web Solutions delivered our landing page in under 48 hours. The quality was beyond anything we expected. Unbeatable speed and design.",
    avatar: "https://i.pravatar.cc/150?u=techflow"
  },
  {
    name: "Sarah Chen",
    role: "Founder, Bloom Bakery",
    text: "As a small business owner, I was worried about high costs. Peak Web gave us a stunning site at a fraction of the cost other agencies quoted.",
    avatar: "https://i.pravatar.cc/150?u=bloom"
  },
  {
    name: "Marcus Thorne",
    role: "Marketing Director, Zenith",
    text: "The parallax effects and scrolling animations are incredible. Our conversion rate increased by 40% since the new site went live.",
    avatar: "https://i.pravatar.cc/150?u=zenith"
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Success Stories" 
          title="What Our Clients Say"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[2.5rem] border border-white/5 relative group"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 w-12 h-12 gold-bg rounded-full flex items-center justify-center text-black shadow-xl">
                <Quote size={20} fill="currentColor" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-gold/30 overflow-hidden">
                  <img src={review.avatar} alt={review.name} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-gold text-xs font-medium uppercase tracking-widest">{review.role}</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed italic">
                "{review.text}"
              </p>

              <div className="mt-8 flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
