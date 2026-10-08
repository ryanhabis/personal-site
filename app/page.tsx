import Link from "next/link";
import { projects } from "@/lib/content";

const featuredProjectSlugs = ["cv-reviewer", "3d-printer-to-azure", "hospital-database"];
const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined);

const focusAreas = [
  {
    number: "01",
    title: "Software & product",
    description: "Building useful applications, APIs, and tools around real problems.",
  },
  {
    number: "02",
    title: "Cloud & systems",
    description: "Connecting services, devices, and data with practical cloud workflows.",
  },
  {
    number: "03",
    title: "Data & AI",
    description: "Exploring how analytics and AI can make information more actionable.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-grid relative overflow-hidden bg-slate-950 text-white">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1.5 font-mono text-xs font-medium tracking-wide text-cyan-200">
              <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
              COMPUTING GRADUATE · DUNDALK, IRELAND
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              I build practical software
              <span className="text-cyan-300"> and enjoy figuring out how things work.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I’m Ryan, an early-career computing professional exploring software,
              cloud, and data. I like turning real-world problems into useful
              applications and systems—and I’m open to discovering where I can
              make the biggest contribution.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Explore my work
              </Link>
              <Link
                href="/cv"
                className="rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-400 hover:bg-white/5"
              >
                View my CV
              </Link>
              <a
                href="mailto:ryan.habis@gmail.com"
                className="px-2 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="code-window rounded-2xl border border-white/10 bg-slate-900/85 p-6 shadow-2xl shadow-cyan-950/40">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="size-2.5 rounded-full bg-rose-400" />
              <span className="size-2.5 rounded-full bg-amber-300" />
              <span className="size-2.5 rounded-full bg-emerald-300" />
              <span className="ml-3 font-mono text-xs text-slate-500">about-me.ts</span>
            </div>
            <pre className="overflow-x-auto py-5 font-mono text-sm leading-7">
              <code>
                <span className="text-violet-300">const</span>{" "}
                <span className="text-cyan-200">ryan</span> = {"{"}
                {"\n"}  curious: <span className="text-amber-200">true</span>,
                {"\n"}  building: [
                {"\n"}    <span className="text-emerald-200">&quot;web apps&quot;</span>,
                {"\n"}    <span className="text-emerald-200">&quot;cloud systems&quot;</span>,
                {"\n"}    <span className="text-emerald-200">&quot;data projects&quot;</span>,
                {"\n"}  ],
                {"\n"}  lookingFor: <span className="text-emerald-200">&quot;new challenges&quot;</span>,
                {"\n"}{"}"};
              </code>
            </pre>
            <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {["Python", "SQL", "JavaScript", "Azure", "AWS"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-semibold tracking-wide text-cyan-700">AREAS I’M EXPLORING</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Curious by nature, practical by design.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            I’m early in my career, so I’m staying open to different parts of
            computing. These themes connect the work I’ve enjoyed so far.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article key={area.number} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-mono text-sm text-cyan-700">{area.number}</p>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{area.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-mono text-sm font-semibold tracking-wide text-cyan-700">SELECTED PROJECTS</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Things I’ve built and learned from.
              </h2>
            </div>
            <Link href="/portfolio" className="text-sm font-semibold text-cyan-800 hover:text-cyan-950">
              View all projects <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={project.slug}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-950/10"
              >
                <p className="font-mono text-xs font-semibold tracking-wide text-cyan-800">
                  PROJECT 0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-white px-2.5 py-1 font-mono text-xs text-slate-600 ring-1 ring-slate-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="mt-6 text-sm font-semibold text-cyan-800 hover:text-cyan-950"
                >
                  Read project details <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-6 rounded-2xl bg-slate-900 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="font-mono text-sm text-cyan-300">OPEN TO OPPORTUNITIES</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Let’s talk about what I could bring to your team.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              I’m interested in entry-level opportunities across software,
              cloud, data, and related areas of computing.
            </p>
          </div>
          <a
            href="mailto:ryan.habis@gmail.com"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Contact me <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
