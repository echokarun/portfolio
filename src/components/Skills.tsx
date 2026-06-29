"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Expo", "NativeWind", "TailwindCSS", "ShadCN"],
  },
  {
    category: "DevOps & Infra",
    items: ["Docker", "Nginx", "CI/CD", "GitHub Actions", "Linux VPS", "Cloudflare DNS", "Server Monitoring"],
  },
  {
    category: "Backend / DB",
    items: ["PostgreSQL", "PocketBase", "REST APIs", "NestJS", "Appwrite", "Plaid", "Dwolla"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "NativeWind", "Animatable", "TanStack Query", "Zustand", "Push Notifications"],
  },
  {
    category: "Auth & Payments",
    items: ["Clerk", "Stripe"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "VS Code", "Figma", "Biome", "Kanban", "Claude API", "Claude Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:pl-36 xl:pl-48 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="04" title="My Stack" />

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <h3
                className="text-accent font-semibold text-xs uppercase tracking-widest pb-3 mb-4"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(124,58,237,0.12)",
                      color: "#a78bfa",
                      borderColor: "rgba(124,58,237,0.25)",
                    }}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg backdrop-blur-sm bg-white/[0.05] border border-white/[0.07] text-foreground transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-10 glass rounded-2xl p-5 flex items-center gap-4"
        >
          <div className="relative flex size-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-accent-secondary" />
          </div>
          <div>
            <span className="text-accent-secondary font-semibold text-xs uppercase tracking-wider">Currently Learning</span>
            <p className="text-sm text-muted mt-0.5">Express.js · Backend Architecture · Full Stack Engineering</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
