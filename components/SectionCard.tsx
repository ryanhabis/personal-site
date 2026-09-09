import Link from "next/link";

type SectionCardProps = {
  title: string;
  href: string;
  description: string;
  eyebrow?: string;
  details?: string[];
};

export function SectionCard({
  title,
  href,
  description,
  eyebrow,
  details,
}: SectionCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        {eyebrow ? (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            {eyebrow}
          </span>
        ) : null}
        <span className="text-sm text-zinc-500 transition group-hover:text-violet-600">
          Explore →
        </span>
      </div>
      <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
      {details && details.length > 0 ? (
        <ul className="mt-4 space-y-2 text-sm text-zinc-500">
          {details.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : null}
    </Link>
  );
}
