import Link from "next/link";
import { notFound } from "next/navigation";
import { getVideoById, videos } from "@/lib/content";

export function generateStaticParams() {
  return videos.map((video) => ({ id: video.id }));
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = getVideoById(id);

  if (!video) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link href="/youtube" className="text-sm font-semibold text-violet-600 hover:text-violet-700">
        ← Back to YouTube
      </Link>

      <article className="mt-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
        {video.embedUrl ? (
          <div className="p-4">
            <iframe
              className="aspect-video w-full rounded-2xl"
              src={video.embedUrl}
              title={video.title}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <img src={video.thumbnail} alt={video.title} className="h-72 w-full object-cover" />
        )}
        <div className="p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
            {video.publishedAt} · {video.duration}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900">{video.title}</h1>
          <p className="mt-4 whitespace-pre-line text-lg leading-8 text-zinc-600">
            {video.description}
          </p>
        </div>
      </article>
    </main>
  );
}
