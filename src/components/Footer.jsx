import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personal } from "../data/info";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-900 py-10">
      <div className="container-x px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-slate-400 text-center md:text-left">
          © {new Date().getFullYear()} {personal.name}. Crafted with React,
          Tailwind & lots of coffee in Nairobi.
        </div>
        <div className="flex gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 grid place-items-center rounded-full glass hover:text-accent text-slate-300"
          >
            <FaGithub />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 grid place-items-center rounded-full glass hover:text-accent text-slate-300"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="w-10 h-10 grid place-items-center rounded-full glass hover:text-accent text-slate-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
