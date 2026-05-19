import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/info";

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="container-x">
        <SectionHeader
          number="03."
          title="Experience"
          subtitle="Where I've built, shipped and led."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-600 via-accent to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={item.company + idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  idx % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent glow z-10" />

                <div
                  className={`pl-12 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="font-mono text-xs text-accent">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {item.role}
                  </h3>
                  <p className="text-primary-400 font-medium">
                    {item.company}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 md:justify-end justify-start">
                    <FaMapMarkerAlt /> {item.location}
                  </p>
                </div>

                <div className="pl-12 md:pl-0 mt-4 md:mt-0">
                  <div className="glass rounded-2xl p-5">
                    <FaBriefcase className="text-accent mb-3" />
                    <ul className="space-y-2 text-sm text-slate-300">
                      {item.points.map((p, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent mt-1">▹</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
