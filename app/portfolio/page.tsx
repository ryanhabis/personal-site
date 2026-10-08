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

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg hover:shadow-slate-200/70">
      <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
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
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
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
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <header className="max-w-3xl">
        <p className="font-mono text-sm font-semibold tracking-wide text-cyan-800">
          SELECTED WORK
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Projects across software, cloud, and data.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          A selection of things I’ve built and explored. I’m early in my
          computing career, so this work reflects both the skills I’m developing
          and the areas I’m excited to learn more about.
        </p>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
          Computing projects
        </h2>
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
    </main>
  );
}
