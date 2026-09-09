export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
          About
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">
          I build thoughtful products and systems that scale.
        </h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-zinc-700">
          <p>
            I’m a software engineer with a computer science background, and I enjoy creating digital experiences that are practical, maintainable, and easy to expand.
          </p>
          <p>
            This site is intentionally designed as a modular platform. It starts with a strong foundation for portfolio work, blog content, and media, and it can grow with new sections over time as your interests and projects evolve.
          </p>
          <p>
            I care about clean architecture, strong UX, and systems that make it easy to keep publishing without fighting the tooling.
          </p>
        </div>
      </div>
    </main>
  );
}
