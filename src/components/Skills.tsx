"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Expo", "NativeWind", "TailwindCSS", "ShadCN"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "NativeWind", "Animatable", "TanStack Query", "Zustand", "Push Notifications"],
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
    <section id="skills" className="px-6 md:px-12 lg:pl-32 xl:pl-44 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="04" title="My Stack" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -2, borderColor: "rgba(108,92,231,0.3)" }}
              className="bg-card border border-border rounded-3xl p-6 transition-colors"
            >
              <h3 className="text-accent font-semibold text-xs uppercase tracking-widest mb-5">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(108,92,231,0.15)", color: "#a78bfa" }}
                    className="px-3 py-1.5 text-xs font-medium rounded-xl bg-surface text-foreground transition-colors cursor-default"
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
          className="mt-4 bg-card border border-border rounded-3xl p-6 flex items-center gap-4"
        >
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative flex size-2 shrink-0"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </motion.span>
          <div>
            <span className="text-accent font-semibold text-xs uppercase tracking-wider">Currently Learning</span>
            <p className="text-sm text-muted mt-1">Express.js · Backend Architecture · Full Stack Engineering</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
