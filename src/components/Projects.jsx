import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { projects, personal } from "../data/info";

export default function Projects() {
  return (
    <section id="projects" className="section relative bg-dark-800/30">
      <div className="container-x">
        <SectionHeader
          number="04."
          title="Featured Projects"
          subtitle="A selection of work spanning ERP, full-stack web and fintech."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 hover:translate-y-[-4px] transition-transform group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-accent/30 text-accent text-xl">
                  <FaFolder />
                </div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-accent"
                  aria-label="External link"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {p.description}
              </p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="text-xs font-mono text-accent/80"
                  >
                    #{t.toLowerCase().replace(/\s+/g, "-")}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-slate-200 hover:text-accent"
          >
            See more on GitHub <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}
