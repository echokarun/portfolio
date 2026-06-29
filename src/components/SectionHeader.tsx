"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-accent text-xs font-mono tracking-widest">{number}</span>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h2>
        <div
          className="h-px flex-1 ml-4"
          style={{
            background: "linear-gradient(90deg, rgba(124,58,237,0.4), rgba(6,182,212,0.2), transparent)",
          }}
        />
      </div>
      {subtitle && (
        <p className="text-muted text-sm md:text-base max-w-xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
