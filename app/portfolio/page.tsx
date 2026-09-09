import Link from "next/link";
import { projects } from "@/lib/content";

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
          Portfolio
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">Selected work</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-zinc-900">{project.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Link href={`/portfolio/${project.slug}`} className="text-sm font-semibold text-violet-600 hover:text-violet-700">
                View case study
              </Link>
              {project.links.github ? (
                <a href={project.links.github} target="_blank" rel="noreferrer" className="text-sm font-semibold text-zinc-600 hover:text-zinc-800">
                  GitHub
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
