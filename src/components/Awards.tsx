"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Awards() {
  return (
    <section id="awards" className="px-6 md:px-12 lg:pl-32 xl:pl-44 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="06" title="Awards & Languages" />

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -2, borderColor: "rgba(108,92,231,0.3)" }}
            className="bg-card border border-border rounded-3xl p-6"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="flex items-center justify-center size-14 rounded-2xl bg-accent/10 shrink-0"
              >
                <svg className="size-7 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <title>Medal icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.602 6.023 6.023 0 01-2.77-.602m3.012 0a5.985 5.985 0 01-3.012 0" />
                </svg>
              </motion.div>
              <div>
                <h3 className="font-semibold">Company Hackathon — 1st Place</h3>
                <p className="text-accent text-sm font-medium mt-1">Chautari Digital</p>
                <p className="text-muted text-sm mt-2">
                  November 2025 · Led team collaboration to build and ship features under time pressure.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -2, borderColor: "rgba(108,92,231,0.3)" }}
            className="bg-card border border-border rounded-3xl p-6"
          >
            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-5">
              Languages
            </h3>
            <div className="space-y-4">
              {[
                { lang: "Nepali", level: "Native" },
                { lang: "Hindi", level: "Fluent" },
                { lang: "English", level: "Conversational" },
              ].map((item) => (
                <div key={item.lang} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.lang}</span>
                  <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
