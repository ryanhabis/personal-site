import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link href="/portfolio" className="text-sm font-semibold text-violet-600 hover:text-violet-700">
        ← Back to portfolio
      </Link>

      <article className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
          Case study
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900">{project.title}</h1>
        <p className="mt-4 text-lg text-zinc-600">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          {project.links.demo ? (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700">
              Live demo
            </a>
          ) : null}
          {project.links.github ? (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
              Source code
            </a>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-zinc-50 p-5">
            <h2 className="text-lg font-semibold text-zinc-900">What I built</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{project.description}</p>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-5">
            <h2 className="text-lg font-semibold text-zinc-900">Impact</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              {project.metrics.map((metric) => (
                <li key={metric}>• {metric}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}
