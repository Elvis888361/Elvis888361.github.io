import { Canvas } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaJava,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaGithub,
  FaVuejs,
  FaLaravel,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiSelenium,
  SiCypress,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiKubernetes,
} from "react-icons/si";

const TECHS = [
  { Icon: FaReact,       color: "#61dafb" },
  { Icon: SiNextdotjs,   color: "#cfcfcf" },
  { Icon: FaVuejs,       color: "#42b883" },
  { Icon: SiJavascript,  color: "#f7df1e" },
  { Icon: SiTypescript,  color: "#3178c6" },
  { Icon: SiTailwindcss, color: "#38bdf8" },
  { Icon: FaNodeJs,      color: "#8cc84b" },
  { Icon: FaPython,      color: "#4b8bbe" },
  { Icon: SiDjango,      color: "#44b78b" },
  { Icon: FaLaravel,     color: "#ff2d20" },
  { Icon: FaPhp,         color: "#8993be" },
  { Icon: FaJava,        color: "#f89820" },
  { Icon: FaDocker,      color: "#2496ed" },
  { Icon: SiKubernetes,  color: "#326ce5" },
  { Icon: FaLinux,       color: "#fcc624" },
  { Icon: FaGitAlt,      color: "#f05032" },
  { Icon: FaGithub,      color: "#c9d1d9" },
  { Icon: SiMongodb,     color: "#47a248" },
  { Icon: SiMysql,       color: "#00758f" },
  { Icon: FaDatabase,    color: "#a78bfa" },
  { Icon: SiSelenium,    color: "#43b02a" },
  { Icon: SiCypress,     color: "#17b2c5" },
];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function FloatingIcon({ Icon, color, position, speed }) {
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.8}>
      <group position={position}>
        <Html
          transform
          center
          distanceFactor={8}
          zIndexRange={[0, 0]}
          style={{ pointerEvents: "none" }}
        >
          <Icon
            style={{
              color,
              opacity: 0.32,
              fontSize: "42px",
              filter: `drop-shadow(0 0 8px ${color}55)`,
            }}
          />
        </Html>
      </group>
    </Float>
  );
}

export default function ThreeBackground() {
  const items = useMemo(
    () =>
      TECHS.map((t) => {
        const angle = Math.random() * Math.PI * 2;
        // Outer ring — keep center clear for hero content
        const dist = rand(4.5, 8);
        return {
          ...t,
          position: [
            Math.cos(angle) * dist,
            Math.sin(angle) * dist * 0.55,
            rand(-5, -1.5),
          ],
          speed: rand(1, 2.2),
        };
      }),
    []
  );

  return (
    <div
      className="absolute inset-0"
      style={{ pointerEvents: "none", zIndex: 0 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          {items.map((it, i) => (
            <FloatingIcon key={i} {...it} />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
