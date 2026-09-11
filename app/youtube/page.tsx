import Link from "next/link";
import { videos } from "@/lib/content";

export default function YoutubePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            YouTube
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">Drone work and media</h1>
        </div>
        <a
          href="https://www.youtube.com/channel/UCFODtxH31XxzkY4QY--KTSw"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
        >
          View channel
        </a>
      </div>

      <div className="mb-8 rounded-2xl border border-violet-200 bg-violet-50 p-5 text-sm text-violet-700">
        This page is organized as a clean media archive for drone demos, site surveys, inspection footage, and project highlights from the channel.
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <article key={video.id} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <img src={video.thumbnail} alt={video.title} className="h-56 w-full object-cover" />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
                {video.publishedAt}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-zinc-900">{video.title}</h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-6 text-zinc-600">
                {video.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-500">{video.duration}</span>
                <Link href={`/youtube/${video.id}`} className="text-sm font-semibold text-violet-600 hover:text-violet-700">
                  Watch video →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
