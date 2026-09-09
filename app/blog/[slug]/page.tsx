import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/blog" className="text-sm font-semibold text-violet-600 hover:text-violet-700">
        ← Back to blog
      </Link>

      <article className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
          {post.date}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900">{post.title}</h1>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-5 text-base leading-8 text-zinc-700">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
