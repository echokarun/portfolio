"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "LMKZ (Link My Kidz)",
    stack: "NestJS · React · React Native · TypeScript · AWS S3 · PostgreSQL",
    description:
      "Child management platform for Montessori schools featuring daily insights (attendance, meals, mood), ECD tracking, and AI-powered Child Sentiment Analysis. Built frontend for web + mobile.",
    links: null,
    featured: true,
  },
  {
    title: "Project Brain",
    stack: "React · Next.js · Claude API · Docker · GitHub Actions",
    description:
      "Internal AI platform that analyzes requirements, generates design prompts per screen, and runs delta verification against API endpoints using Claude API.",
    links: null,
  },
  {
    title: "Blurkart",
    stack: "Next.js 14 · TypeScript · PostgreSQL · Docker · Nginx",
    description:
      "E-commerce platform for goggles and contact lenses. Deployed on NepalCloud VPS with full DevOps setup and CI/CD pipeline.",
    links: { live: "https://blurkart.com", github: "https://github.com/echokarun" },
  },
  {
    title: "Horizon",
    stack: "Next.js · TypeScript · Appwrite · Plaid · Dwolla · ShadCN",
    description:
      "Financial SaaS platform connecting bank accounts, real-time transactions, money transfers, and personal finance management with Plaid integration.",
    links: { github: "https://github.com/echokarun/Bank-app" },
  },
  {
    title: "Ryde",
    stack: "React Native · Expo · Clerk · Google Maps API · Stripe",
    description:
      "Ride-booking app with Clerk auth, real-time Google Maps integration, Stripe payments, and NeonDB-backed API routes.",
    links: { github: "https://github.com/echokarun/Ryde" },
  },
  {
    title: "Aora",
    stack: "React Native · Expo · NativeWind · Animatable · Appwrite",
    description:
      "Mobile video-sharing platform for AI-generated videos with trending feed, upload, and fluid animations.",
    links: { github: "https://github.com/echokarun/Aora" },
  },
  {
    title: "JobFinder",
    stack: "React Native · Expo · Axios · RapidAPI",
    description:
      "Job listings mobile app fetching data from RapidAPI with focus on API integration and navigation patterns.",
    links: { github: "https://github.com/echokarun/Job-fnder" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:pl-32 xl:pl-44 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="03" title="Selected Projects" />

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: "rgba(108,92,231,0.4)" }}
              className={`group bg-card border border-border rounded-3xl p-6 transition-all ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-accent">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <h3
                    className={`font-semibold group-hover:text-accent transition-colors ${
                      project.featured ? "text-xl" : "text-lg"
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-3 shrink-0 ml-2">
                  {project.links?.github && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                        <title>GitHub icon</title>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                  )}
                  {project.links?.live && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                    >
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <title>External link icon</title>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.split(" · ").map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-zinc-600 px-2 py-0.5 rounded-md bg-zinc-900/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
