"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "VS International College",
    location: "New Baneshwor, Kathmandu",
    field: "Software Development",
    period: "2024 – 2028 (Expected)",
    status: "4th Semester",
    current: true,
  },
  {
    degree: "+2 Science (Higher Secondary)",
    school: "Everest College",
    location: "Thapathali, Kathmandu",
    field: "Higher Secondary Education",
    period: "Completed prior to 2024",
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-12 lg:pl-36 xl:pl-48 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="05" title="Education" />

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ x: 4, borderColor: "rgba(124,58,237,0.3)" }}
              className="glass rounded-2xl p-6 md:p-7 flex flex-wrap gap-4 items-start justify-between transition-all"
            >
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-accent font-medium text-sm mb-1">
                  {edu.school} · {edu.field}
                </p>
                <p className="text-muted text-sm">{edu.location}</p>
              </div>
              <span
                className={`shrink-0 px-4 py-1.5 text-xs font-mono font-medium rounded-full border ${
                  edu.current
                    ? "bg-accent/[0.08] text-accent border-accent/20"
                    : "bg-white/[0.04] text-muted border-white/[0.08]"
                }`}
              >
                {edu.current ? `${edu.period} · ${edu.status}` : edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
