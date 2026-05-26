import { Reveal } from "../Reveal";
import { SectionShell } from "./Identity";
import { Sunrise, Users, GitMerge, FileSearch, Presentation, ListTodo } from "lucide-react";

const nodes = [
  { icon: Sunrise, label: "Daily Sync", note: "10 min, no slides" },
  { icon: Users, label: "Pair Programming", note: "Live, no egos" },
  { icon: GitMerge, label: "GitHub Flow", note: "Branch → PR → review" },
  { icon: FileSearch, label: "Code Reviews", note: "Kind, but rigorous" },
  { icon: Presentation, label: "Weekly Demos", note: "Ship something visible" },
  { icon: ListTodo, label: "Task Board", note: "Tiny atomic tickets" },
];

export function Workflow() {
  return (
    <SectionShell id="workflow" eyebrow="05 / Mission Control" title="How the Crew Operates">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass-strong neon-border p-6 sm:p-10">
          {/* dashboard chrome */}
          <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-[#5EF2FF]/70">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#7FFFD4] shadow-[0_0_8px_#7FFFD4]" />
              Live · highoncode/ops
            </div>
            <div className="hidden sm:block">UTC · {new Date().toISOString().slice(0, 10)}</div>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* connecting svg */}
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" preserveAspectRatio="none">
              <defs>
                <linearGradient id="conn" x1="0" x2="1">
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#7FFFD4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M 10% 30% Q 50% 50% 90% 30%" stroke="url(#conn)" strokeWidth="1" fill="none" />
              <path d="M 10% 70% Q 50% 50% 90% 70%" stroke="url(#conn)" strokeWidth="1" fill="none" />
              <path d="M 50% 10% Q 50% 50% 50% 90%" stroke="url(#conn)" strokeWidth="1" fill="none" />
            </svg>

            {nodes.map((n, i) => (
              <div key={n.label} className="group relative rounded-2xl border border-[#5EF2FF]/15 bg-[#041C24]/40 p-5 transition hover:border-[#00D9FF]/50 hover:bg-[#062F3C]/40">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#5EF2FF]/20 bg-[#020B12]" style={{ boxShadow: "inset 0 0 16px rgba(0,217,255,0.2)" }}>
                    <n.icon className="h-4.5 w-4.5 text-[#7FFFD4]" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[10px] text-[#5EF2FF]/60">NODE_{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h4 className="mt-3 font-display text-sm font-semibold text-white">{n.label}</h4>
                <p className="mt-0.5 text-xs text-[#9EE9F2]/80">{n.note}</p>

                <div className="mt-4 flex items-center gap-2 text-[10px] text-[#5EF2FF]/70">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7FFFD4]/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7FFFD4]" />
                  </span>
                  ACTIVE
                </div>
              </div>
            ))}
          </div>

          {/* telemetry footer */}
          <div className="mt-8 grid grid-cols-2 gap-2 border-t border-[#5EF2FF]/15 pt-6 text-[10px] uppercase tracking-[0.3em] text-[#9EE9F2]/80 sm:grid-cols-4">
            <Tel label="Commits / wk" value="120+" />
            <Tel label="Coverage" value="82%" />
            <Tel label="PRs merged" value="38" />
            <Tel label="Uptime" value="99.9%" />
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

function Tel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#5EF2FF]/10 bg-[#020B12]/60 px-3 py-2">
      <div>{label}</div>
      <div className="mt-1 font-display text-base text-white normal-case tracking-normal text-glow-soft">{value}</div>
    </div>
  );
}