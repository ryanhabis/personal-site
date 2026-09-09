import Link from "next/link";

const navItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/youtube", label: "YouTube" },
  { href: "/cv", label: "CV" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
          Alex Carter
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-violet-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
