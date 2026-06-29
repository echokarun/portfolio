"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const roles = ["Frontend Engineer", "DevOps Engineer", "React Developer", "Mobile Developer"];

function Typewriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 30 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="text-accent">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-px h-[1em] bg-accent align-middle ml-1"
      />
    </span>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} aria-live="polite" aria-atomic="true">
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });
  const pctX = useTransform(springX, (v) => `${v * 100}%`);
  const pctY = useTransform(springY, (v) => `${v * 100}%`);
  const glowBg = useMotionTemplate`radial-gradient(700px circle at ${pctX} ${pctY}, var(--accent-glow), transparent 60%)`;

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY, isTouchDevice]);

  const stats = [
    { target: 7, suffix: "+", label: "Completed Projects", featured: true },
    { target: 1, suffix: "+", label: "Years of Experience", featured: false },
    { target: 14, suffix: " mos", label: "Professional Work", featured: false },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Mouse-follow glow */}
      {isTouchDevice ? (
        <div
          className="hero-glow absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px circle at 50% 40%, var(--accent-glow), transparent 60%)",
          }}
        />
      ) : (
        <motion.div
          className="hero-glow absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: glowBg }}
        />
      )}

      <div className="relative w-full px-6 md:px-12 lg:pl-36 xl:pl-48 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
            {/* Text content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-sm mb-8"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative flex size-2"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </motion.span>
                Open to opportunities
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
                  <span className="block text-muted text-lg sm:text-xl font-normal tracking-normal mb-2">
                    Hi, I'm
                  </span>
                  Karun
                  <br />
                  <span className="text-accent">Rayamajhi</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl font-light mb-8 h-10"
              >
                <Typewriter />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-muted max-w-xl text-base sm:text-lg leading-relaxed mb-10"
              >
                Building production-grade web & mobile applications with modern tools.
                From pixel-perfect UIs to cloud deployment — I ship end-to-end.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="flex flex-wrap items-center gap-5 mb-16"
              >
                <motion.a
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 30px rgba(124,58,237,0.45)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:rayamajhikarun@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-medium text-sm transition-all"
                >
                  Let's Talk
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <title>Email icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </motion.a>

                <motion.a
                  whileHover={{ x: 2, color: "var(--accent)" }}
                  whileTap={{ scale: 0.97 }}
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors"
                >
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <title>Download icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download Resume
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex flex-wrap gap-8 sm:gap-12"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className={`font-bold text-foreground tabular-nums ${
                        stat.featured
                          ? "text-4xl sm:text-5xl"
                          : "text-3xl sm:text-4xl"
                      }`}
                    >
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-muted mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Terminal code card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="shrink-0 lg:order-last w-full max-w-md lg:max-w-lg"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-3xl" />
                <div
                  className="relative border border-border rounded-xl overflow-hidden shadow-2xl shadow-accent/10"
                  style={{
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    background: "var(--terminal-bg)",
                    boxShadow:
                      "0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Terminal header */}
                  <div
                    className="flex items-center gap-2 px-4 py-3 border-b border-border/50"
                    style={{ background: "var(--terminal-header)" }}
                  >
                    <div className="flex gap-1.5">
                      <span className="size-3 rounded-full bg-red-500/80" />
                      <span className="size-3 rounded-full bg-yellow-500/80" />
                      <span className="size-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs text-muted ml-2 font-mono">karun@portfolio ~</span>
                  </div>
                  {/* Terminal body */}
                  <div className="p-5 font-mono text-sm leading-relaxed space-y-2">
                    <div className="flex gap-2">
                      <span className="text-green-400">❯</span>
                      <span className="text-muted">cat skills.json</span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="pl-6"
                    >
                      <span className="text-accent">{"{"}</span>
                    </motion.div>
                    {[
                      ['"frontend"', '"React · Next.js · TypeScript"'],
                      ['"mobile"', '"React Native · Expo"'],
                      ['"devops"', '"Docker · Nginx · CI/CD"'],
                      ['"backend"', '"PostgreSQL · NestJS"'],
                    ].map(([key, val], i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 + i * 0.15, duration: 0.4 }}
                        className="pl-6 flex gap-1 flex-wrap"
                      >
                        <span className="text-terminal-key">{key}</span>
                        <span className="text-muted">:</span>
                        <span className="text-terminal-value">{val}</span>
                        <span className="text-muted">,</span>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2, duration: 0.4 }}
                      className="pl-6"
                    >
                      <span className="text-accent">{"}"}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5, duration: 0.4 }}
                      className="flex gap-2 pt-1"
                    >
                      <span className="text-green-400">❯</span>
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block w-2.5 h-5 bg-accent"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg className="size-5 text-muted" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <title>Scroll down</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
