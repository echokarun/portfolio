"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const languages = [
  { lang: "Nepali", level: "Native", pct: 100 },
  { lang: "Hindi", level: "Fluent", pct: 85 },
  { lang: "English", level: "Conversational", pct: 70 },
];

export default function Awards() {
  return (
    <section id="awards" className="px-6 md:px-12 lg:pl-36 xl:pl-48 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="06" title="Awards & Languages" />

        <div className="grid md:grid-cols-2 gap-4">
          {/* Award card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3, borderColor: "rgba(124,58,237,0.3)" }}
            className="glass rounded-2xl p-6 transition-all"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ rotate: 8 }}
                className="flex items-center justify-center size-10 rounded-xl bg-accent/[0.08] border border-accent/15 shrink-0"
              >
                <svg className="size-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <title>Medal icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.602 6.023 6.023 0 01-2.77-.602m3.012 0a5.985 5.985 0 01-3.012 0" />
                </svg>
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground">Company Hackathon — 1st Place</h3>
                <p className="text-accent text-sm font-medium mt-1">Chautari Digital</p>
                <p className="text-muted text-sm mt-2 leading-relaxed">
                  November 2025 · Led team collaboration to build and ship features under time pressure.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Languages card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3, borderColor: "rgba(124,58,237,0.3)" }}
            className="glass rounded-2xl p-6 transition-all"
          >
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">
              Languages
            </h3>
            <div className="space-y-5">
              {languages.map((item, i) => (
                <div key={item.lang}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium">{item.lang}</span>
                    <span className="text-xs text-accent font-mono">{item.level}</span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, var(--accent), var(--accent-secondary))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
