import Link from "next/link";
import { projects } from "@/lib/content";

const creativeProjectSlugs = [
  "droneireland-website",
  "bistro-brand-promotion",
  "commercial-drone-surveying",
  "media-and-marketing-drone-content",
];
const computingProjects = projects.filter(
  (project) => !creativeProjectSlugs.includes(project.slug),
);
const otherProjects = projects.filter((project) =>
  creativeProjectSlugs.includes(project.slug),
);

function ProjectArtwork({ slug }: { slug: string }) {
  if (slug === "cv-reviewer") {
    return (
      <div aria-hidden="true" className="project-artwork cv-artwork">
        <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_18px_32px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[9px] font-bold text-white">
                ✦
              </span>
              <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-violet-700 uppercase">
                CV Review
              </span>
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[8px] font-semibold tracking-[0.12em] text-emerald-700 uppercase">
              Ready
            </span>
          </div>

          <div className="bg-white p-4">
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="mb-2 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                <span>Top issue</span>
                <span className="text-violet-700">Score 82</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded bg-slate-200" />
                <div className="h-2 w-4/5 rounded bg-slate-200" />
                <div className="h-2 w-3/5 rounded bg-slate-200" />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr]">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="mb-3 h-2 w-16 rounded bg-slate-200" />
                <div className="space-y-2">
                  <div className="h-2 w-full rounded bg-slate-200" />
                  <div className="h-2 w-5/6 rounded bg-slate-200" />
                  <div className="h-2 w-4/5 rounded bg-slate-200" />
                </div>
              </div>

              <div className="rounded-xl border border-violet-200 bg-violet-50 p-3">
                <div className="mb-3 h-2 w-20 rounded bg-violet-200" />
                <div className="space-y-2">
                  <div className="h-2 w-full rounded bg-violet-100" />
                  <div className="h-2 w-5/6 rounded bg-violet-100" />
                  <div className="h-2 w-4/5 rounded bg-violet-100" />
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-2.5">
              <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Keywords
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Azure', 'Python', 'SQL', 'AWS', 'CI/CD'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[8px] font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "hospital-database") {
    return (
      <div aria-hidden="true" className="project-artwork database-artwork">
        <div className="flex items-center gap-3">
          <div className="space-y-2 rounded-lg border border-cyan-200/50 bg-slate-950/65 p-3">
            <div className="h-1.5 w-12 rounded bg-cyan-300" />
            <div className="h-1 w-16 rounded bg-slate-500" />
            <div className="h-1 w-10 rounded bg-slate-600" />
          </div>
          <div className="flex flex-col items-center gap-2 text-cyan-300">
            <span className="h-5 w-px bg-cyan-300/60" />
            <span className="text-lg leading-none">↔</span>
            <span className="h-5 w-px bg-cyan-300/60" />
          </div>
          <div className="space-y-2 rounded-lg border border-violet-200/50 bg-slate-950/65 p-3">
            <div className="h-1.5 w-12 rounded bg-violet-300" />
            <div className="h-1 w-16 rounded bg-slate-500" />
            <div className="h-1 w-10 rounded bg-slate-600" />
          </div>
          <div className="hidden space-y-2 rounded-lg border border-emerald-200/50 bg-slate-950/65 p-3 sm:block">
            <div className="h-1.5 w-12 rounded bg-emerald-300" />
            <div className="h-1 w-16 rounded bg-slate-500" />
            <div className="h-1 w-10 rounded bg-slate-600" />
          </div>
        </div>
      </div>
    );
  }

  if (slug === "3d-printer-to-azure") {
    return (
      <div aria-hidden="true" className="project-artwork telemetry-artwork">
        <div className="mx-auto flex max-w-xs items-end gap-2 rounded-xl border border-white/15 bg-slate-950/55 p-4">
          {[30, 54, 42, 70, 58, 86, 66, 96, 73, 88, 62, 78].map((height, index) => (
            <span
              key={index}
              className="w-full rounded-t-sm bg-gradient-to-t from-cyan-500/40 to-cyan-300"
              style={{ height: `${height}px`, opacity: 0.55 + index * 0.035 }}
            />
          ))}
        </div>
        <div className="mx-auto mt-3 flex max-w-xs justify-between font-mono text-[9px] uppercase tracking-widest text-cyan-100/75">
          <span>Device telemetry</span>
          <span>Live stream</span>
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="project-artwork creative-artwork">
      <span className="font-mono text-xs font-semibold tracking-[0.28em] text-white/75">
        CREATIVE / CLIENT WORK
      </span>
      <span className="mt-3 block text-5xl font-semibold tracking-tighter text-white/90">RH<span className="text-cyan-200">.</span></span>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-900/10">
      <ProjectArtwork slug={project.slug} />
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-cyan-800">
          {creativeProjectSlugs.includes(project.slug) ? "CREATIVE WORK" : "COMPUTING PROJECT"}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-950 transition group-hover:text-cyan-900">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-600 ring-1 ring-slate-200"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-100 pt-4">
          <Link
            href={`/portfolio/${project.slug}`}
            className="text-sm font-semibold text-cyan-800 hover:text-cyan-950"
          >
            Project details <span aria-hidden="true">→</span>
          </Link>
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-600 hover:text-slate-950"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-600 hover:text-slate-950"
            >
              External link <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <main>
      <header className="hero-grid relative overflow-hidden bg-slate-950 text-white">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 py-14 sm:flex-row sm:items-end sm:py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-semibold tracking-[0.2em] text-cyan-300">
              SELECTED WORK <span className="text-slate-500">/</span> PORTFOLIO
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Projects across software,
              <span className="text-cyan-300"> cloud, and data.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              A selection of things I’ve built and explored. Each project is a
              chance to solve a real problem and learn something new.
            </p>
          </div>
          <div aria-hidden="true" className="hidden select-none font-mono text-8xl font-bold tracking-tighter text-white/[0.07] sm:block lg:text-9xl">
            {"</>"}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
          Computing projects
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Software and systems I’ve worked on through coursework and personal projects.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {computingProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {otherProjects.length > 0 ? (
        <section className="mt-16 border-t border-slate-200 pt-12">
          <p className="font-mono text-sm font-semibold tracking-wide text-cyan-800">
            ALSO IN MY EXPERIENCE
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Creative and client work
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Work outside traditional software projects has also helped me
            practice communication, collaboration, and delivering for real
            people.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}
      </div>
    </main>
  );
}
