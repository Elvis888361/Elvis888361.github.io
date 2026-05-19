import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { education } from "../data/info";

export default function Education() {
  return (
    <section id="education" className="section relative">
      <div className="container-x">
        <SectionHeader
          number="05."
          title="Education & Certifications"
          subtitle="Continuous learning across business, technology and security."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e, idx) => (
            <motion.div
              key={e.school + idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-accent/30 text-accent shrink-0">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{e.degree}</h3>
                  <p className="text-primary-400 text-sm">{e.school}</p>
                  {e.period && (
                    <p className="font-mono text-xs text-accent mt-1">
                      {e.period}
                    </p>
                  )}
                  <p className="text-sm text-slate-400 mt-2">{e.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
