import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaShieldAlt,
  FaTasks,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { skills } from "../data/info";

const iconMap = {
  "Full Stack Development": FaCode,
  "ERP & Frameworks": FaCogs,
  "CI/CD & DevOps": FaServer,
  Cybersecurity: FaShieldAlt,
  "Product & Program Management": FaTasks,
  "Data & Mobile": FaDatabase,
};

export default function Skills() {
  return (
    <section id="skills" className="section relative bg-dark-800/30">
      <div className="container-x">
        <SectionHeader
          number="02."
          title="Skills & Expertise"
          subtitle="A multidisciplinary toolkit across development, ERPs, DevOps, security and product."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => {
            const Icon = iconMap[category] || FaCode;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass rounded-2xl p-6 hover:translate-y-[-4px] transition-transform"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 grid place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-accent/30 text-accent">
                    <Icon />
                  </div>
                  <h3 className="text-white font-semibold">{category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-dark-700/60 text-slate-300 border border-white/5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
