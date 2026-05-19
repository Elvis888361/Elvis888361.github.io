import { motion } from "framer-motion";
import { FaCode, FaCogs, FaShieldAlt, FaTasks } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { about } from "../data/info";

const pillars = [
  {
    icon: FaCode,
    title: "Full Stack Engineering",
    text: "React, Next.js, Node.js, Django, Laravel — front to back.",
  },
  {
    icon: FaCogs,
    title: "ERP & Automation",
    text: "Frappe/ERPNext and Odoo customization, integrations, DocTypes.",
  },
  {
    icon: FaTasks,
    title: "Product & Program Management",
    text: "Roadmaps, delivery, stakeholder alignment, cross-functional teams.",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity & CI/CD",
    text: "Secure coding, networking fundamentals, automated deployment pipelines.",
  },
];

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container-x">
        <SectionHeader
          number="01."
          title="About Me"
          subtitle="A snapshot of who I am and what I bring to the table."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-slate-300 leading-relaxed"
          >
            {about.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-5"
              >
                <p.icon className="text-accent text-2xl mb-3" />
                <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-slate-400">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
