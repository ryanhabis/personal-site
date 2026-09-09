import Link from "next/link";
import { blogPosts } from "@/lib/content";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
          Blog
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">Writing</h1>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
              {post.date}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">{post.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-sm font-semibold text-violet-600 hover:text-violet-700">
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
