export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="font-mono text-sm font-semibold tracking-wide text-cyan-800">
          A LITTLE ABOUT ME
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
          A computing graduate, still curious about what comes next.
        </h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
          <p>
            I’m Ryan Habis, based in Dundalk, Ireland. I studied computing and
            cloud computing, and I’m continuing to build experience through
            projects across software development, cloud services, and data
            analytics.
          </p>
          <p>
            I haven’t settled on one narrow path in technology—and I see that as
            a chance to keep learning. I’m interested in teams where I can
            contribute, get feedback, and grow while working on useful
            applications and systems.
          </p>
          <p>
            Teaching and collaborative projects have also helped me learn to
            explain technical ideas clearly and work with people with different
            levels of experience. This portfolio shares some of the work behind
            that journey.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:ryan.habis@gmail.com"
            className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Email me
          </a>
          <a
            href="https://github.com/ryanhabis"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </main>
  );
}
