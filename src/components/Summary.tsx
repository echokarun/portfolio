"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const stagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const quickFacts = [
  { label: "Location", value: "Kathmandu, Nepal" },
  { label: "Status", value: "Available", accent: true },
  { label: "Focus", value: "Frontend & DevOps" },
  { label: "Education", value: "BCA (4th Semester)" },
  {
    label: "GitHub",
    value: "@echokarun",
    link: "https://github.com/echokarun",
  },
];

export default function Summary() {
  return (
    <section id="about" className="px-6 md:px-12 lg:pl-36 xl:pl-48 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="01"
          title="About Me"
          subtitle="I believe in a user-centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users."
        />

        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-5 text-base md:text-lg leading-relaxed text-muted"
          >
            {[
              "Hi, I'm Karun. A Frontend Developer with hands-on experience building and deploying production-grade web and mobile applications. Proficient in React, TypeScript, Next.js, and React Native, with practical DevOps experience spanning Docker, Nginx, CI/CD pipelines, and self-hosted VPS infrastructure.",
              "I'm comfortable working across the full delivery lifecycle — from pixel-perfect UI development to cloud deployment — and actively expanding into full stack engineering. Currently learning Express.js and backend architecture.",
              "Known for writing clean, well-structured code with proper file/folder conventions, and for applying security awareness in production environments.",
            ].map((text, i) => (
              <motion.p key={text} custom={i} variants={stagger}>
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-6 h-fit"
          >
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">
              Quick Facts
            </h3>
            <div className="space-y-0">
              {quickFacts.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex justify-between items-center text-sm py-3 ${
                    i < quickFacts.length - 1 ? "border-b border-white/[0.04]" : ""
                  }`}
                >
                  <span className="text-muted">{item.label}</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className={item.accent ? "text-accent font-medium" : "text-foreground"}>
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
