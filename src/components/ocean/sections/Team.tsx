import { useEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "../Reveal";
import { SectionShell } from "./Identity";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  description: string;
  stack: string[];
  status: string;
  progress: number;
  id?: string;
  highlight?: string;
};

type Member = {
  name: string;
  initials: string;
  college: string;
  role: string;
  accent: string;
  accentLabel: string;
  signalId: string;
  about: string;
  skills: string[];
  tagline?: string;
  intro?: string;
  achievementsLabel?: string;
  achievements?: { title: string; year?: string }[];
  interests: string[];
  projects: Project[];
  highlightsLabel: string;
  highlights: string[];
  hobbies: string[];
  socials: { icon: typeof Github; href: string; label: string; external?: boolean }[];
};

const team: Member[] = [
  {
  name: "Soumyajit Rout",
  initials: "SR",
  college: "BITS Pilani",
  role: "AI / ML Engineer · Frontend Developer",
  tagline:
    "B.E. Computer Science, BITS Pilani '28 · State Board Science Topper",
  accent: "#63d8e3",
  accentLabel: "Deep Aqua",
  signalId: "SR",

  about:
    "AI/ML Engineer with a strong frontend foundation, focused on building intelligent, scalable, and data-driven digital products. Currently exploring machine learning, neural networks, backend systems, and modern web architecture at BITS Pilani. Passionate about combining engineering, design, and AI to create impactful user experiences and production-grade applications.",

  intro:
    "I'm an AI/ML Engineer with a strong frontend foundation, building intelligent, data-driven web products. Currently deep-diving into machine learning, neural networks, and backend systems at BITS Pilani. Open to collaborations on AI products, research projects, and campus-tech initiatives.",

  skills: [
    "Python",
    "NumPy",
    "Pandas",
    "scikit-learn",
    "Matplotlib",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "SASS",
    "GSAP",
    "Java",
    "C",
    "MySQL",
    "Firebase",
    "Git",
    "Vercel",
    "Figma",
  ],

  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Cloud Computing",
    "System Design",
    "Full Stack Development",
    "Scalable Web Systems",
  ],

  achievementsLabel: "Certifications & Scholarships",

  achievements: [
    {
      title: "Bharti Airtel Foundation Scholarship",
      year: "2024 – Present",
    },
    {
      title: "National Means-cum-Merit Scholarship (NMMS)",
      year: "",
    },
    {
      title: "State Rank 1 in CHSE Odisha Class XII Science Examination",
      year: "2024",
    },
  ],

  projects: [
    {
      id: "01",
      title: "ICICI Bank Futures Analysis",
      description:
        "Performed futures pricing simulations, derivatives modelling, and margin call analysis using Python and financial datasets. Built analytical workflows for stock and futures market behaviour evaluation.",
      stack: ["Python", "yfinance", "Pandas"],
      highlight: "Futures pricing + margin call simulation",
      status: "Research",
      progress: 86,
    },

    {
      id: "02",
      title: "BOSM 2025 Sports Fest Website",
      description:
        "Developed and deployed the official BOSM Sports Fest platform using Next.js, TypeScript, GSAP, and SASS. Built scalable registration workflows supporting 1500+ users with responsive UI systems and smooth interactive animations.",
      stack: ["Next.js", "TypeScript", "GSAP", "SASS"],
      highlight: "1,500+ registrations · mobile-first",
      status: "Shipped",
      progress: 100,
    },

    {
      id: "03",
      title: "BITS Pilani SU Portal",
      description:
        "Revamped the BITS Pilani Student Union portal with Firebase authentication, REST API integration, accessibility improvements, and scalable frontend modules for campus services.",
      stack: ["Next.js", "Firebase", "REST APIs"],
      highlight: "Unified campus platform",
      status: "Active",
      progress: 92,
    },

    {
      id: "04",
      title: "Inspired-Karters Club Site",
      description:
        "Designed and developed a modern interactive club website with fluid animations, responsive layouts, and immersive scrolling experiences using GSAP and ScrollTrigger.",
      stack: ["Next.js", "GSAP", "ScrollTrigger"],
      highlight: "Fluid scroll animations",
      status: "Shipped",
      progress: 100,
    },

    {
      id: "05",
      title: "UPPAAL Traffic Modelling",
      description:
        "Designed and verified a deadlock-free traffic intersection system using automata modelling in UPPAAL while validating safety and liveness properties.",
      stack: ["UPPAAL", "Formal Methods", "Automata"],
      highlight: "Verified deadlock-free system",
      status: "Verified",
      progress: 94,
    },
  ],
    highlightsLabel: "Leadership",
    highlights: ["Student Union Technical Team", "President · Utkal Samaj", "Event Coordinator · Nirmaan"],
     hobbies: [
    "Building interfaces",
    "AI experimentation",
    "Community initiatives",
    "Problem solving",
  ],

  socials: [
    {
      icon: Mail,
      href: "mailto:f20240002@pilani.bits-pilani.ac.in",
      label: "Email",
      external: true,
    },

    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/soumyajit-rout-4a5aa1337",
      label: "LinkedIn",
      external: true,
    },

    {
      icon: Github,
      href: "https://github.com/soumyajit-18-shipi-it",
      label: "GitHub",
      external: true,
    },
  ],
},
  {
    name: "Abhinav Prajapati",
    initials: "AP",
    college: "BITS Pilani",
    role: "Software Engineering & Security Enthusiast",
    accent: "#8bd8dc",
    accentLabel: "Muted Aqua",
    signalId: "AP",
    about:
      "Dual degree student focused on software engineering, accessibility-driven systems, and practical product development. Interested in building reliable software systems while exploring cybersecurity and full-stack technologies.",
    skills: ["C", "Java", "Python", "HTML", "MySQL", "Git", "GitHub"],
    interests: ["Cybersecurity", "Full Stack Development", "DSA", "Software Systems"],
    projects: [
      {
        title: "Hotel Management System",
        description:
          "Developed a Python-MySQL based hotel management system for handling customer records, room management, and operational workflows through database connectivity.",
        stack: ["Python", "MySQL", "CRUD"],
        status: "Completed",
        progress: 98,
      },
      {
        title: "UAV / Drone Assembly Project",
        description:
          "Assembled and calibrated a UAV drone system for a school engineering project while learning practical hardware integration and control systems.",
        stack: ["Hardware", "Calibration", "Controls"],
        status: "Prototype",
        progress: 82,
      },
    ],
    highlightsLabel: "Certification",
    highlights: ["Cyber Security Essentials — Macquarie University"],
    hobbies: ["Exploring systems", "Security concepts", "Engineering projects"],
    socials: [
      { icon: Mail, href: "mailto:f20240865@pilani.bits-pilani.ac.in", label: "Email", external: true },
      { icon: Linkedin, href: "https://www.linkedin.com/in/abhinavp0310/", label: "LinkedIn", external: true },
      { icon: Github, href: "https://github.com/abhinavpraj", label: "GitHub", external: true },
    ],
  },
  {
    name: "Aayush Agrawal",
    initials: "AA",
    college: "BITS Pilani",
    role: "AI & Machine Learning Developer",
    accent: "#a4e0cf",
    accentLabel: "Ocean Teal",
    signalId: "AA",
    about:
      "Computer Science student focused on intelligent systems, machine learning, blockchain technologies, and AI-driven software development. Passionate about combining analytical thinking with practical engineering to build impactful systems.",
    skills: ["Python", "Java", "Solidity", "PyTorch", "NumPy", "DBMS", "DSA", "Linux"],
    interests: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "MLOps", "Blockchain", "Agentic AI Systems"],
    projects: [
      {
        title: "Blissful Bites × Team Unstoppable",
        description:
          "Co-led a cross-functional physical and digital ecosystem during APOGEE 2026 involving a responsive microsite, predictive pricing strategies, real-time inventory systems, and growth marketing operations generating INR 1.36 lakh revenue within four days.",
        stack: ["Microsite", "Pricing", "Inventory", "Growth Ops"],
        status: "Executed",
        progress: 100,
      },
      {
        title: "Binary Digits Neural Network",
        description:
          "Designed and trained a neural network pipeline using PyTorch with optimized ReLU activations, achieving 98% validation accuracy on binary digit classification datasets.",
        stack: ["PyTorch", "ReLU", "Classification"],
        status: "Trained",
        progress: 98,
      },
      {
        title: "Decentralized To-Do dApp",
        description:
          "Developed and deployed a Solidity-based decentralized application implementing secure immutable task management on the Ethereum blockchain ecosystem.",
        stack: ["Solidity", "Ethereum", "Web3"],
        status: "Deployed",
        progress: 95,
      },
    ],
    highlightsLabel: "Achievements",
    highlights: ["BITSAT 342/390", "JEE Mains 99.48 percentile", "MHT-CET 99.92 percentile", "IMO Gold Medalist", "NSO Gold Medalist"],
    hobbies: ["AI experimentation", "Problem solving", "Blockchain exploration"],
    socials: [
      { icon: Mail, href: "mailto:f20240543@pilani.bits-pilani.ac.in", label: "Email", external: true },
      { icon: Linkedin, href: "https://linkedin.com/in/aayush777agrawal", label: "LinkedIn", external: true },
      { icon: Github, href: "https://github.com/AayDexterous", label: "GitHub", external: true },
    ],
  },
];

export function Team() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".crew-intro",
        { opacity: 0, y: 18, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        },
      );

      gsap.fromTo(
        ".crew-card",
        { opacity: 0, y: 42, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.05,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionShell id="team" eyebrow="02 / The Crew" title="Three Signals Beneath the Surface">
      <div ref={sectionRef} className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[32px]">
          <div className="absolute left-1/2 top-0 h-56 w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,216,227,0.12),transparent_70%)] blur-3xl" />
          <div className="absolute -left-10 top-24 h-40 w-40 rounded-full bg-[#a4e0cf]/10 blur-3xl" />
          <div className="absolute -right-10 top-36 h-56 w-56 rounded-full bg-[#8bd8dc]/10 blur-3xl" />
          <motion.div
            aria-hidden
            className="absolute inset-0 opacity-20"
            animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
            transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="absolute left-0 top-12 h-px w-full bg-gradient-to-r from-transparent via-[#8bd8dc]/40 to-transparent" />
            <div className="absolute left-0 top-28 h-px w-full bg-gradient-to-r from-transparent via-[#a4e0cf]/22 to-transparent" />
            <div className="absolute left-0 top-44 h-px w-full bg-gradient-to-r from-transparent via-[#8bd8dc]/16 to-transparent" />
          </motion.div>
          <motion.div
            aria-hidden
            className="absolute bottom-8 left-8 h-14 w-14 rounded-full border border-[#8bd8dc]/10"
            animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-8 right-8 h-10 w-10 rounded-full border border-[#a4e0cf]/10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        <div className="crew-intro relative mb-8 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-3 font-display text-[10px] uppercase tracking-[0.42em] text-[#8bd8dc]/70">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a4e0cf] shadow-[0_0_12px_#a4e0cf]">
              <span className="absolute inset-0 rounded-full bg-[#a4e0cf]/40 animate-ping" />
            </span>
            Live Signal Archive
            <span className="rounded-full border border-[#8bd8dc]/15 bg-[#041822]/55 px-3 py-1 text-[9px] tracking-[0.28em] text-[#a9c8cc]/80">
              SIGNAL STABLE
            </span>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#8bd8dc]/12 bg-[#04151C]/55 px-6 py-5 backdrop-blur-xl sm:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,216,227,0.12),transparent_55%)]" />
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8bd8dc]/12"
              animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <p className="relative text-base font-medium leading-relaxed text-[#c3dadd]/88 sm:text-lg">
              Three engineers from BITS Pilani exploring scalable systems, intelligent software, AI-driven products,
              and modern digital experiences beneath the surface of technology.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-display text-[10px] uppercase tracking-[0.28em] text-[#a9c8cc]/72">
            <span className="rounded-full border border-[#8bd8dc]/15 bg-[#041822]/50 px-3 py-1">LIVE · highoncode/crew</span>
            <span className="rounded-full border border-[#8bd8dc]/15 bg-[#041822]/50 px-3 py-1">SYNC STATUS · ACTIVE</span>
            <span className="rounded-full border border-[#8bd8dc]/15 bg-[#041822]/50 px-3 py-1">UTC · Dynamic live clock</span>
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-[#8bd8dc]/10 bg-[#020B12]/60 px-4 py-3">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(99,216,227,0.12),transparent)] opacity-70" />
            <div className="relative flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.28em] text-[#c3dadd]/80">
              <span className="h-2 w-2 rounded-full bg-[#a4e0cf] shadow-[0_0_10px_#a4e0cf]" />
              <span className="font-mono text-[#a9c8cc]/70">Mission feed</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#8bd8dc]/15 bg-[#04151C]/80 px-2 py-1 text-[#8bd8dc]/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a4e0cf] animate-pulse" />
                Knowledge shared accelerates the system
              </span>
            </div>
          </div>
        </div>

        <div className="crew-grid grid gap-7 xl:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <MemberCard m={m} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function MemberCard({ m, index }: { m: Member; index: number }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [openProject, setOpenProject] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setPos({ x: px, y: py });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  // ID format DSR-001-AQ, etc.
  const dossierId = `DSR-${String(index + 1).padStart(3, "0")}-${m.signalId}`;
  const tickerItems = [
    `SIG ${m.signalId}`,
    `LAT 28.36N`,
    `LON 75.58E`,
    `DEPTH ${380 + index * 42}M`,
    `PRESSURE STABLE`,
    `CHANNEL OPEN`,
  ];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -8 }}
      style={{
        ["--card-accent" as string]: m.accent,
        transform: `perspective(1500px) rotateY(${pos.x * 6}deg) rotateX(${-pos.y * 6}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 240ms cubic-bezier(.2,.8,.2,1)",
      }}
      className="crew-card group relative h-full overflow-hidden rounded-[28px] border border-[#8bd8dc]/12 bg-gradient-to-br from-[#04151C]/82 via-[#031018]/85 to-[#01070b]/90 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-2xl"
    >
      {/* Animated conic edge */}
      <span className="edge-ring" aria-hidden />

      {/* Corner brackets */}
      <span className="corner-bracket corner-tl" />
      <span className="corner-bracket corner-tr" />
      <span className="corner-bracket corner-bl" />
      <span className="corner-bracket corner-br" />

      {/* Scanning sweep */}
      <span className="scan-line" aria-hidden />

      {/* Atmospheric layers */}
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div
          className="absolute -right-24 -top-28 h-72 w-72 rounded-full transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle, ${m.accent}38, transparent 65%)`,
            filter: "blur(48px)",
            opacity: 0.55,
            transform: `translate3d(${pos.x * -22}px, ${pos.y * -18}px, 0)`,
            transition: "transform 400ms ease-out",
          }}
        />
        <div
          className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, rgba(52,75,115,0.55), transparent 65%)`,
            filter: "blur(52px)",
            transform: `translate3d(${pos.x * 18}px, ${pos.y * 14}px, 0)`,
            transition: "transform 400ms ease-out",
          }}
        />
      </div>

      {/* Cursor reactive halo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(360px circle at ${50 + pos.x * 100}% ${42 + pos.y * 100}%, ${m.accent}1f, transparent 55%)`,
        }}
      />

      {/* Grid + noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(155,218,222,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(155,218,222,0.18) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse at 60% 30%, black 30%, transparent 80%)",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="card-particle"
          style={{
            left: `${15 + i * 17}%`,
            bottom: `-10px`,
            ["--dx" as string]: `${(i % 2 ? -1 : 1) * (10 + i * 6)}px`,
            animationDuration: `${9 + i * 1.4}s`,
            animationDelay: `${i * 1.1}s`,
          }}
        />
      ))}

      {/* Watermark initials */}
      <div
        className="pointer-events-none absolute -right-3 -bottom-6 select-none font-display text-[160px] font-black leading-none tracking-tighter text-white/[0.04]"
        style={{ transform: `translate3d(${pos.x * 12}px, ${pos.y * 12}px, 0)`, transition: "transform 400ms ease-out" }}
      >
        {m.initials}
      </div>

      {/* ===== DOSSIER HEADER STRIP ===== */}
      <div className="relative flex items-center justify-between gap-3 border-b border-[#8bd8dc]/10 bg-[#020a10]/60 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.28em] text-[#a9c8cc]/75">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: m.accent, boxShadow: `0 0 10px ${m.accent}` }} />
          <span>{dossierId}</span>
          <span className="text-[#5f7a80]">/</span>
          <span className="text-[#c3dadd]/65">CLASSIFIED</span>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="inline-flex items-center gap-1.5">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-[#a4e0cf]" />
              <span className="absolute inset-0 animate-ping rounded-full bg-[#a4e0cf]/60" />
            </span>
            ONLINE
          </span>
          <span className="text-[#5f7a80]">·</span>
          <span>CH {String(index + 1).padStart(2, "0")}</span>
        </div>
      </div>

      {/* ===== TWO-COLUMN ASYMMETRIC BODY ===== */}
      <div className="relative grid gap-5 px-5 py-5 sm:px-6 sm:py-6 lg:grid-cols-[160px_1fr]">
        {/* === HOLOGRAPHIC SIDEBAR === */}
        <aside className="relative">
          <div className="relative mx-auto h-[140px] w-[140px] lg:mx-0">
            <span className="sonar-ring" />
            <span className="sonar-ring" />
            <span className="sonar-ring" />
            <div
              className="telemetry-ring absolute inset-[-14px] rounded-full border border-dashed"
              style={{ borderColor: `${m.accent}44` }}
            />
            <div
              className="telemetry-ring-rev absolute inset-[-26px] rounded-full border"
              style={{ borderColor: `${m.accent}1f` }}
            />
            <Avatar initials={m.initials} accent={m.accent} />
          </div>

          {/* mini telemetry block */}
          <div className="mt-5 rounded-2xl border border-[#8bd8dc]/10 bg-[#020a10]/70 p-3">
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-[#7b969b]">
              <span>SIGNAL</span>
              <span style={{ color: m.accent }}>{m.signalId}</span>
            </div>
            <div className="mt-2 flex items-end gap-1 h-8">
              {[3, 6, 4, 8, 5, 7, 4, 6, 9, 5, 7, 3, 6, 8].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h * 10}%`,
                    background: `linear-gradient(180deg, ${m.accent}, transparent)`,
                    opacity: 0.55 + (i % 3) * 0.12,
                  }}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-[#7b969b]">
              <span>AMP</span>
              <span className="text-[#a9c8cc]">{72 + index * 5}%</span>
            </div>
          </div>

          {/* role badge */}
          <div className="mt-3 rounded-2xl border border-[#8bd8dc]/10 bg-[#020a10]/70 px-3 py-2.5">
            <div className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#7b969b]">ROLE CLASS</div>
            <div className="mt-1 font-display text-[11px] uppercase tracking-[0.22em]" style={{ color: m.accent }}>
              {m.accentLabel}
            </div>
          </div>
        </aside>

        {/* === MAIN PANEL === */}
        <div className="relative min-w-0">
          {/* Name + role */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.28em] text-[#7b969b]">
            <span>DOSSIER</span>
            <span className="h-px w-6 bg-[#8bd8dc]/20" />
            <span style={{ color: m.accent }}>{m.college}</span>
          </div>
          <h3 className="mt-2 font-display text-[1.85rem] leading-[1.05] tracking-tight text-white sm:text-[2rem]">
            {m.name}
          </h3>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.26em]" style={{ color: m.accent }}>
            {m.role}
          </p>
          {m.tagline && (
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#9aaeb1]/80">{m.tagline}</p>
          )}

          {/* About */}
          <p className="mt-4 text-[13.5px] leading-relaxed text-[#b8d4d9]/92">{m.about}</p>

          {/* divider */}
          <div className="my-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8bd8dc]/40 to-transparent" />
            <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-[#7b969b]">INTEL</span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8bd8dc]/40 to-transparent" />
          </div>

          <div className="grid gap-5">
            <Group label="Skill Cluster">
              <div className="flex flex-wrap gap-1.5">
                {m.skills.map((s) => (
                  <Pill key={s} label={s} accent={m.accent} />
                ))}
              </div>
            </Group>

            <Group label="Core Interests">
              <div className="flex flex-wrap gap-1.5">
                {m.interests.map((interest) => (
                  <Pill key={interest} label={interest} accent={m.accent} tone="subtle" />
                ))}
              </div>
            </Group>

            <Group label="Classified Files">
              <div className="space-y-2">
                {m.projects.map((project, index) => {
                  const isOpen = openProject === index;
                  return (
                    <motion.div
                      key={project.title}
                      layout
                      data-open={isOpen}
                      className="dossier-project overflow-hidden"
                      style={{ ["--card-accent" as string]: m.accent }}
                    >
                      <motion.button
                        type="button"
                        onClick={() => setOpenProject(isOpen ? null : index)}
                        whileTap={{ scale: 0.99 }}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#7b969b]">
                              {project.id ?? `0${index + 1}`}
                            </span>
                            <span className="h-1 w-1 rounded-full" style={{ background: m.accent, boxShadow: `0 0 8px ${m.accent}` }} />
                            <span className="truncate text-[13px] font-medium text-white">{project.title}</span>
                          </div>
                          <div className="mt-1.5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.26em] text-[#7b969b]">
                            <span style={{ color: m.accent }}>{project.status}</span>
                            <span className="h-px w-5 bg-[#8bd8dc]/20" />
                            <span>{project.progress}%</span>
                            {project.highlight && (
                              <>
                                <span className="h-px w-5 bg-[#8bd8dc]/20" />
                                <span className="truncate text-[#9aaeb1]/80 normal-case tracking-[0.04em]">{project.highlight}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                          className="shrink-0 text-[#9EE9F2]"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </motion.button>

                      <AnimatePresence initial={false} mode="popLayout">
                        {isOpen && (
                          <motion.div
                            layout
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.36, ease: [0.2, 0.8, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="relative border-t border-[#8bd8dc]/10 px-4 py-4">
                              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,216,227,0.08),transparent_45%)]" />
                              <div className="relative space-y-4">
                                <p className="text-[13px] leading-relaxed text-[#b8d4d9]/90">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5">
                                  {project.stack.map((stackItem) => (
                                    <span
                                      key={stackItem}
                                      className="rounded-md border border-[#8bd8dc]/12 bg-[#020B12]/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-[#c3dadd]"
                                    >
                                      {stackItem}
                                    </span>
                                  ))}
                                </div>

                                <div>
                                  <div className="mb-1 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.26em] text-[#7b969b]">
                                    <span>TELEMETRY</span>
                                    <span style={{ color: m.accent }}>{project.progress}%</span>
                                  </div>
                                  <div className="relative h-1.5 overflow-hidden rounded-full bg-[#020a10]">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${project.progress}%` }}
                                      transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                                      className="h-full rounded-full"
                                      style={{
                                        background: `linear-gradient(90deg, ${m.accent}, #a4e0cf)`,
                                        boxShadow: `0 0 10px ${m.accent}`,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </Group>

            {m.achievements && m.achievements.length > 0 && (
              <Group label={m.achievementsLabel ?? "Achievements"}>
                <ul className="grid gap-1.5">
                  {m.achievements.map((a) => (
                    <li
                      key={a.title}
                      className="flex items-start gap-2 rounded-xl border border-[#8bd8dc]/10 bg-[#041C24]/40 px-3 py-2 transition hover:border-[color:var(--card-accent)]/40 hover:bg-[#061A22]/70"
                    >
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: m.accent }} />
                      <div className="min-w-0">
                        <div className="text-[12.5px] leading-snug text-[#cde2e5]">{a.title}</div>
                        {a.year && (
                          <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.26em] text-[#7b969b]">{a.year}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </Group>
            )}

            {m.highlights.length > 0 && (
              <Group label={m.highlightsLabel}>
                <ul className="grid gap-1.5">
                  {m.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-xl border border-[#8bd8dc]/10 bg-[#041C24]/40 px-3 py-2 transition hover:border-[color:var(--card-accent)]/40 hover:bg-[#061A22]/70"
                    >
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: m.accent }} />
                      <span className="text-[12.5px] leading-snug text-[#cde2e5]">{item}</span>
                    </li>
                  ))}
                </ul>
              </Group>
            )}

            <Group label="Hobbies">
              <div className="flex flex-wrap gap-1.5">
                {m.hobbies.map((hobby) => (
                  <Pill key={hobby} label={hobby} accent={m.accent} tone="subtle" />
                ))}
              </div>
            </Group>
          </div>
        </div>
      </div>

      {/* ===== TELEMETRY TICKER ===== */}
      <div className="relative overflow-hidden border-t border-[#8bd8dc]/10 bg-[#020a10]/70 py-2">
        <div className="ticker-track font-mono text-[9px] uppercase tracking-[0.32em] text-[#7b969b]">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full" style={{ background: m.accent }} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ===== SOCIAL DECK ===== */}
      <div className="relative flex items-center justify-between gap-4 border-t border-[#8bd8dc]/12 bg-gradient-to-b from-transparent to-[#02080d]/80 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-[#7b969b]">
          <span>OPEN CHANNELS</span>
          <span className="h-px w-8 bg-gradient-to-r from-[#8bd8dc]/50 to-transparent" />
        </div>
        <div className="flex items-center gap-2.5">
          {m.socials.map(({ icon: Icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="social-bubble"
              style={{ ["--card-accent" as string]: m.accent }}
            >
              <Icon className="relative z-10 h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.28em] text-[#8bd8dc]/65">
        <span className="h-px w-8 bg-gradient-to-r from-[#8bd8dc]/70 to-transparent" />
        {label}
      </div>
      {children}
    </div>
  );
}

function Pill({ label, accent, tone = "default" }: { label: string; accent: string; tone?: "default" | "subtle" }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_18px_var(--a)] ${
        tone === "subtle"
          ? "border-[#8bd8dc]/12 bg-[#041C24]/35 text-[#c3dadd]/90 hover:text-white"
          : "border-[color:var(--a)]/35 bg-[#041C24]/50 text-white hover:border-[color:var(--a)]"
      }`}
      style={{ ["--a" as string]: accent, backgroundColor: tone === "subtle" ? undefined : `${accent}1F` }}
    >
      {label}
    </span>
  );
}

function Avatar({ initials, accent }: { initials: string; accent: string }) {
  return (
    <div className="relative h-20 w-20 shrink-0">
      <div
        className="absolute inset-0 animate-spin-slow rounded-full"
        style={{ background: `conic-gradient(from 0deg, transparent, ${accent}, transparent 60%)`, filter: "blur(2px)" }}
      />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <div
        className="absolute inset-[2px] grid place-items-center rounded-full border border-white/5 bg-[#041C24]"
        style={{ boxShadow: `inset 0 0 24px ${accent}30, 0 0 24px ${accent}18` }}
      >
        <span className="font-display text-xl font-bold text-white" style={{ textShadow: `0 0 14px ${accent}` }}>
          {initials}
        </span>
      </div>
    </div>
  );
}