import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { personal, references } from "../data/info";

export default function Contact() {
  return (
    <section id="contact" className="section relative">
      <div className="container-x">
        <SectionHeader
          number="06."
          title="Get In Touch"
          subtitle="Have a project in mind, or want to collaborate? Reach out directly — I respond fast."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4"
        >
          <a
            href={`mailto:${personal.email}`}
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:text-accent"
          >
            <div className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-accent/30 text-accent">
              <FaEnvelope />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-400">Email</p>
              <p className="text-white font-medium truncate">
                {personal.email}
              </p>
            </div>
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s+/g, "")}`}
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:text-accent"
          >
            <div className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-accent/30 text-accent">
              <FaPhone />
            </div>
            <div>
              <p className="text-xs text-slate-400">Phone</p>
              <p className="text-white font-medium">{personal.phone}</p>
            </div>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:text-accent"
          >
            <div className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-accent/30 text-accent">
              <FaLinkedin />
            </div>
            <div>
              <p className="text-xs text-slate-400">LinkedIn</p>
              <p className="text-white font-medium">Connect with me</p>
            </div>
          </a>

          <div className="glass rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-primary-600/30 to-accent/30 text-accent">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-xs text-slate-400">Location</p>
              <p className="text-white font-medium">{personal.location}</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent text-white font-medium hover:scale-105 transition-transform glow inline-flex items-center gap-2"
          >
            <FaEnvelope /> Email Me
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full glass text-slate-200 font-medium hover:text-accent inline-flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        <div className="mt-16">
          <h3 className="text-white font-semibold text-lg mb-4 text-center">
            References
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {references.map((r) => (
              <div key={r.name} className="glass rounded-2xl p-5">
                <p className="text-white font-semibold">{r.name}</p>
                <p className="text-sm text-slate-400">{r.role}</p>
                <p className="text-sm text-accent font-mono mt-1">{r.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
