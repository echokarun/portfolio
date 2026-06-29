"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const highlights = [
  "Developed web and mobile frontends using React, Next.js, TypeScript, and React Native across multiple production projects, adhering to pixel-perfect Figma designs.",
  "Contributed to LMKZ (Link My Kidz), a multi-tenant child management platform — built frontend screens for daily insights, ECD tracking, and AI-powered child sentiment analysis with NestJS backend + AWS S3.",
  "Contributed to Project Brain, an internal AI platform powered by Claude API — implemented API workshop endpoints, delta verification UI surfacing missing/unused APIs, and AI-generated design prompts.",
  "Built and deployed Blurkart on NepalCloud VPS with Nginx reverse proxy, Docker containerization, PostgreSQL, and GitHub Actions CI/CD.",
  "Set up and maintained CI/CD deployment pipelines via GitHub Actions for multiple company projects.",
  "Mitigated React2Shell vulnerability (CVE-2025-55182) — identified risk, assessed exposure, and implemented safeguards across production applications.",
  "Managed Cloudflare DNS configuration and led domain recovery/escalation for production domains.",
];

const tags = [
  "React", "Next.js", "TypeScript", "React Native", "Docker", "Nginx",
  "PostgreSQL", "GitHub Actions", "Claude API", "NestJS", "AWS S3", "TanStack Query",
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:pl-36 xl:pl-48 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="02" title="Experience" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1">
                Software Engineer — Frontend & DevOps
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-accent font-medium">Chautari Digital</span>
                <span className="text-muted">·</span>
                <span className="text-muted">Satdobato, Lalitpur</span>
              </div>
            </div>
            <span className="shrink-0 px-4 py-1.5 text-xs font-mono font-medium rounded-full bg-accent/[0.08] text-accent border border-accent/20">
              Feb 2024 – Apr 2025
            </span>
          </div>

          <ul className="space-y-3">
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex gap-3 text-sm md:text-base text-muted leading-relaxed"
              >
                <span className="text-accent mt-1 shrink-0">▹</span>
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/[0.04]">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(124,58,237,0.15)", color: "#a78bfa" }}
                className="px-3 py-1 text-xs font-medium rounded-lg backdrop-blur-sm bg-white/[0.05] border border-white/[0.08] text-muted transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
