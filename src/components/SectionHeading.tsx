import { motion } from "motion/react";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({ subtitle, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center mx-auto" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`flex items-center gap-2 mb-4 font-display font-bold text-xs uppercase tracking-[0.3em] text-gold ${centered ? "justify-center" : ""}`}
      >
        <div className="w-8 h-[1px] bg-gold" />
        {subtitle}
        {centered && <div className="w-8 h-[1px] bg-gold" />}
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-6"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg text-white/50 max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
