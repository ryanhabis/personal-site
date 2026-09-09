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
            I’m Ryan Habis, and this site is designed as a portfolio piece for my drone company work. It brings together project highlights, YouTube content, and a structured overview of the kind of aerial services and media I can provide.
          </p>
          <p>
            The goal is to keep the work organized and easy to explore, so visitors can quickly understand the range of projects, drone capabilities, and visual content that support the business.
          </p>
          <p>
            I care about clean presentation, practical storytelling, and making technical work feel approachable, professional, and easy to navigate.
          </p>
        </div>
      </div>
    </main>
  );
}
