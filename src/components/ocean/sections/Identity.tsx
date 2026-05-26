import { Reveal } from "../Reveal";
import { Compass, Sparkles, Quote } from "lucide-react";

export function Identity() {
  return (
    <SectionShell id="identity" eyebrow="01 / Identity" title="A Hidden Research Squad">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="relative overflow-hidden rounded-3xl glass-strong neon-border p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full"
               style={{ background: "radial-gradient(circle, rgba(0,217,255,0.3), transparent 60%)" }} />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#5EF2FF]/80">
              <Compass className="h-3.5 w-3.5" /> Codename
            </span>
            <h3 className="mt-3 font-display text-5xl font-bold tracking-tight text-white text-glow sm:text-6xl">
              High<span className="gradient-text">On</span>Code
            </h3>
            <p className="mt-3 flex items-center gap-2 text-sm italic text-[#7FFFD4]">
              <Quote className="h-4 w-4 opacity-60" />
              "Compiled deep. Deployed deeper."
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Block title="Who we are">
                Three engineers from BITS Pilani exploring the trench between
                shipping product and inventing systems — frontend craft, secure
                infrastructure, and intelligent machines.
              </Block>
              <Block title="Why HighOnCode">
                Because the only altitude we chase is the one you reach after
                seventy-two hours of pair programming, somewhere between
                caffeine and a clean git history.
              </Block>
              <Block title="Mission">
                Build software that behaves like deep water — calm on the
                surface, immensely powerful underneath.
              </Block>
              <Block title="Fun fact">
                Our combined Spotify playlist has more lo-fi than the
                Marianas trench has unexplored species.
              </Block>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl glass neon-hover p-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#5EF2FF]/80">Squad readout</span>
            <ul className="mt-4 space-y-3 text-sm">
              <Stat label="Crew" value="03 engineers" />
              <Stat label="Origin" value="BITS Pilani" />
              <Stat label="Stack" value="Web · AI · Security" />
              <Stat label="Status" value="Onboarding mission" tone="live" />
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="relative overflow-hidden rounded-3xl glass neon-hover p-6">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#5EF2FF]/80">
              <Sparkles className="h-3.5 w-3.5" /> Operating Principles
            </span>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-xs">
              {["Ship fast", "Read code", "Question defaults", "Document well", "Help teammates", "Stay curious"].map((p) => (
                <li key={p} className="rounded-lg border border-[#5EF2FF]/15 bg-[#041C24]/40 px-3 py-2 text-[#B6EAF2]">
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-[#7FFFD4]">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-[#C7EEF4]/90">{children}</p>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "live" }) {
  return (
    <li className="flex items-center justify-between border-b border-[#5EF2FF]/10 pb-2 last:border-none">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#5EF2FF]/70">{label}</span>
      <span className={`font-display text-sm ${tone === "live" ? "text-[#7FFFD4]" : "text-white"}`}>
        {tone === "live" && <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#7FFFD4] shadow-[0_0_8px_#7FFFD4]" />}
        {value}
      </span>
    </li>
  );
}

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32">
      <Reveal>
        <p className="mb-3 text-[10px] uppercase tracking-[0.5em] text-[#5EF2FF]/70">{eyebrow}</p>
        <h2 className="mb-12 max-w-3xl font-display text-3xl font-bold tracking-tight text-white text-glow sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}