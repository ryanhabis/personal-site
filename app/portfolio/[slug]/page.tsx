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

  const galleryItems = project.gallery?.length
    ? project.gallery
    : project.embedUrl
      ? [{ title: project.title, embedUrl: project.embedUrl }]
      : [];

  if (project.slug === "cv-reviewer") {
    return (
      <main className="mx-auto max-w-5xl px-6 py-12">
        <Link href="/portfolio" className="text-sm font-semibold text-violet-600 hover:text-violet-700">
          ← Back to portfolio
        </Link>

        <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Case study
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">CV Reviewer</h1>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            CV Reviewer is a full-stack AI application designed to turn a CV and target role into
            structured, recruiter-grade feedback. Instead of providing a vague “good/bad” response, it
            reads the candidate profile, highlights the strongest evidence, surfaces the key red flags,
            and gives practical rewrite guidance for education, skills, and experience positioning.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
              >
                Live demo
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Source code
              </a>
            ) : null}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">The problem this solves</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Students and early-career candidates often receive generic advice, but they need more than a
                vague summary. This project gives them an opinion that feels like a recruiter or hiring manager
                reviewing a CV in under a minute: which sections are hurting them, which strengths should be
                amplified, and what language they should use to sound more credible and focused.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Impact</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {project.metrics.map((metric) => (
                  <li key={metric}>• {metric}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">What the experience looks like</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                  1
                </div>
                <h3 className="text-lg font-semibold text-slate-900">CV input</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The user uploads a PDF or pastes text, which is processed and analysed for structure, clarity,
                  and role fit.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                  2
                </div>
                <h3 className="text-lg font-semibold text-slate-900">AI critique</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The review identifies the highest-impact weaknesses first, so the user immediately sees what
                  is hurting their candidacy most.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                  3
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Clear fix guidance</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  It then gives targeted rewrites and stronger keyword suggestions that the user can act on
                  immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">Relevant screenshots</h2>
            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                <div className="rounded-xl border border-slate-200 bg-[#071d33] p-3 text-left text-sky-100 shadow-inner">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[8px] font-bold text-white">
                        ✦
                      </span>
                      <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                        Career Toolkit
                      </span>
                    </div>
                    <span className="rounded-full border border-sky-300/30 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.12em] text-sky-100">
                      CV review
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 rounded-md bg-sky-500/15" />
                    <div className="h-10 rounded-md bg-gradient-to-r from-blue-500 to-sky-500" />
                    <div className="h-20 rounded-xl border border-dashed border-sky-300/35 bg-sky-500/5" />
                  </div>
                </div>
                <figcaption className="mt-3 text-sm font-medium text-slate-700">1. CV upload flow</figcaption>
              </figure>

              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                <div className="rounded-xl border border-slate-200 bg-[#071d33] p-3 text-left text-sky-100 shadow-inner">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Review Results</span>
                    <span className="rounded-full border border-emerald-300/40 bg-emerald-500/10 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-[0.14em] text-emerald-300">
                      Ready
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-md bg-sky-500/5 p-2">
                      <div className="mb-1 h-2 w-32 rounded bg-sky-100/80" />
                      <div className="h-2 w-full rounded bg-sky-100/35" />
                    </div>
                    <div className="rounded-md bg-sky-500/5 p-2">
                      <div className="mb-1 h-2 w-28 rounded bg-sky-100/80" />
                      <div className="h-2 w-full rounded bg-sky-100/35" />
                    </div>
                    <div className="rounded-md bg-sky-500/5 p-2">
                      <div className="mb-1 h-2 w-36 rounded bg-sky-100/80" />
                      <div className="h-2 w-full rounded bg-sky-100/35" />
                    </div>
                  </div>
                </div>
                <figcaption className="mt-3 text-sm font-medium text-slate-700">2. Review output</figcaption>
              </figure>

              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                <div className="rounded-xl border border-slate-200 bg-[#071d33] p-3 text-left text-sky-100 shadow-inner">
                  <div className="mb-3 h-2 w-28 rounded bg-sky-100/80" />
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded bg-sky-100/30" />
                    <div className="h-2 w-5/6 rounded bg-sky-100/30" />
                    <div className="h-2 w-4/5 rounded bg-sky-100/30" />
                    <div className="h-2 w-3/4 rounded bg-sky-100/30" />
                    <div className="h-2 w-full rounded bg-sky-100/30" />
                    <div className="h-2 w-5/6 rounded bg-sky-100/30" />
                  </div>
                </div>
                <figcaption className="mt-3 text-sm font-medium text-slate-700">3. Keyword and rewrite suggestions</figcaption>
              </figure>
            </div>
          </div>
        </article>
      </main>
    );
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

        {galleryItems.length ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {galleryItems.map((item) => (
              <div key={item.embedUrl} className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-2">
                <iframe
                  src={item.embedUrl}
                  title={item.title}
                  className="aspect-[9/16] w-full rounded-xl"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; webgpu"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        ) : null}
      </article>
    </main>
  );
}
