"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { label: "Home", href: "#", id: "" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Awards", href: "#awards", id: "awards" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/echokarun",
    icon: (
      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/karun-rayamajhi-b0293932a/",
    icon: (
      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentActive = "";
      let minDist = Infinity;

      for (const s of sections) {
        if (!s.id) continue;
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top);
          if (dist < minDist && rect.top < window.innerHeight * 0.5) {
            minDist = dist;
            currentActive = s.id;
          }
        }
      }

      if (window.scrollY < 100) currentActive = "";
      setActiveSection(currentActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileClick = useCallback((href: string) => {
    setMobileOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Desktop: left sidebar */}
      <motion.nav
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-start"
      >
        <div
          className="glass rounded-2xl px-5 py-6 flex flex-col gap-1"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <div className="text-sm font-bold tracking-tight text-accent mb-5 font-mono">KR/</div>

          <div className="flex flex-col gap-0.5">
            {sections.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <a
                  key={s.id}
                  href={s.href}
                  className="group flex items-center gap-2.5 py-1.5 pr-2"
                >
                  <motion.span
                    animate={{
                      width: isActive ? 20 : 8,
                      backgroundColor: isActive ? "var(--accent)" : "rgba(255,255,255,0.2)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="h-px block shrink-0"
                  />
                  <span
                    className={`text-[10px] tracking-widest uppercase transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-accent"
                        : "text-muted group-hover:text-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="w-full h-px bg-border my-4" />

          <div className="flex flex-col gap-3 items-center">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors p-1 rounded-lg hover:bg-white/[0.05]"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile/Tablet: top navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
          scrolled || mobileOpen
            ? "glass border-b border-border"
            : ""
        }`}
        style={
          scrolled || mobileOpen
            ? { backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }
            : {}
        }
      >
        <div className="flex items-center justify-between px-5 py-3.5">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-sm font-bold tracking-tight font-mono text-accent"
          >
            KR/
          </a>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors p-1.5"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="text-muted hover:text-foreground transition-colors ml-0.5 p-1.5 rounded-lg hover:bg-white/[0.05]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-border overflow-hidden"
            >
              <div className="flex flex-col px-5 py-3 gap-0.5">
                {sections.map((s, i) => (
                  <motion.button
                    key={s.id}
                    onClick={() => handleMobileClick(s.href)}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className={`text-left text-sm py-2.5 w-full transition-colors ${
                      activeSection === s.id
                        ? "text-accent font-medium"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {s.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
