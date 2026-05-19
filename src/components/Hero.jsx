import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { personal } from "../data/info";

const ThreeBackground = lazy(() => import("./ThreeBackground"));

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % personal.roles.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      <div className="container-x relative z-10 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-accent text-sm mb-4">
            Hello, my name is
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            {personal.name.split(" ")[0]}{" "}
            <span className="gradient-text">
              {personal.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <div className="h-10 mt-4">
            <motion.h2
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl sm:text-2xl font-medium text-slate-300"
            >
              <span className="text-accent font-mono">{">"}</span>{" "}
              {personal.roles[roleIndex]}
            </motion.h2>
          </div>

          <p className="mt-6 text-slate-400 max-w-xl leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent text-white font-medium hover:scale-105 transition-transform glow"
            >
              View My Work
            </a>
            <a
              href={personal.portfolio}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full glass text-slate-200 font-medium flex items-center gap-2 hover:text-accent"
            >
              <FaDownload className="text-sm" /> Live Portfolio
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 grid place-items-center rounded-full glass text-slate-300 hover:text-accent"
            >
              <FaGithub />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 grid place-items-center rounded-full glass text-slate-300 hover:text-accent"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-600 via-accent to-purple-500 rounded-full blur-2xl opacity-40" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/40 glow">
              <img
                src="/elvis.png"
                alt={personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating role badges */}
            <div className="absolute -top-4 -left-4 px-3 py-1 rounded-full glass text-xs font-mono text-accent">
              Frontend
            </div>
            <div className="absolute top-1/4 -right-6 px-3 py-1 rounded-full glass text-xs font-mono text-accent">
              Backend
            </div>
            <div className="absolute bottom-10 -left-8 px-3 py-1 rounded-full glass text-xs font-mono text-accent">
              ERP
            </div>
            <div className="absolute -bottom-2 right-6 px-3 py-1 rounded-full glass text-xs font-mono text-accent">
              CI/CD
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-accent animate-bounce"
        aria-label="Scroll down"
      >
        <HiArrowDown size={28} />
      </a>
    </section>
  );
}
