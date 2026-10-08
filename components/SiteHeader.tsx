import Link from "next/link";

const navItems = [
  { href: "/portfolio", label: "Work" },
  { href: "/cv", label: "CV" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
        <Link href="/" className="text-base font-semibold tracking-tight text-slate-950">
          Ryan Habis <span className="font-mono text-cyan-800">/ computing</span>
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-cyan-800"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:ryan.habis@gmail.com"
            className="text-sm font-semibold text-cyan-800 transition hover:text-cyan-950"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
