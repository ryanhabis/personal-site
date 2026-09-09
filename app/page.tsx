import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";
import { blogPosts, projects, videos } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-12">
      <section className="rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 px-8 py-14 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-100">
          Drone company portfolio
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Real drone work, organized clearly and ready to be explored.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-violet-50">
          This site showcases my drone company work as a portfolio piece, with curated projects, video content, and a clean overview of the kind of aerial work I can deliver.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://www.youtube.com/channel/UCFODtxH31XxzkY4QY--KTSw"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
          >
            Watch YouTube channel
          </a>
          <Link
            href="/portfolio"
            className="rounded-full border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Explore portfolio
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
              Sections
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900">
              Modular content areas
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <SectionCard
            title="Portfolio"
            href="/portfolio"
            description="Showcase your best work, projects, and measurable outcomes."
            eyebrow="Work"
            details={["Case studies", "Metrics", "Links to demos and repos"]}
          />
          <SectionCard
            title="Blog"
            href="/blog"
            description="Publish ideas, notes, and technical write-ups as you learn and iterate."
            eyebrow="Writing"
            details={["Markdown-ready content", "Tag-based organization", "Long-form articles"]}
          />
          <SectionCard
            title="YouTube"
            href="/youtube"
            description="Showcase drone demos, aerial footage, and project work from your YouTube channel in a structured way."
            eyebrow="Media"
            details={["Curated videos", "Project highlights", "Easy channel access"]}
          />
          <SectionCard
            title="CV"
            href="/cv"
            description="Share your detailed career background, skills, achievements, and downloadable resume."
            eyebrow="Profile"
            details={["Skills", "Experience", "Downloadable CV"]}
          />
          <SectionCard
            title="About"
            href="/about"
            description="Introduce yourself, share your background, and explain the problem you solve."
            eyebrow="Profile"
            details={["Bio", "Resume links", "Values and expertise"]}
          />
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Featured drone projects</h2>
            <Link href="/portfolio" className="text-sm font-semibold text-violet-600 hover:text-violet-700">
              View all
            </Link>
          </div>
          <div className="space-y-5">
            {projects.map((project) => (
              <article key={project.slug} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900">{project.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{project.summary}</p>
                  </div>
                  <Link href={`/portfolio/${project.slug}`} className="text-sm font-semibold text-violet-600 hover:text-violet-700">
                    Read case study
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900">Latest writing</h3>
            <div className="mt-5 space-y-4">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-xl bg-zinc-50 p-4 transition hover:bg-zinc-100">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
                    {post.date}
                  </p>
                  <p className="mt-2 text-base font-semibold text-zinc-900">{post.title}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900">Latest drone content</h3>
            <div className="mt-5 space-y-4">
              {videos.map((video) => (
                <Link key={video.id} href={`/youtube/${video.id}`} className="block rounded-xl bg-zinc-50 p-4 transition hover:bg-zinc-100">
                  <p className="text-sm font-semibold text-zinc-900">{video.title}</p>
                  <p className="mt-1 text-xs text-zinc-500">{video.publishedAt}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
