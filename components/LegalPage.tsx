import Link from "next/link";
import Logo from "./Logo";

export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#111317] text-white">
      <header className="border-b border-white/8 bg-[#111317]/95">
        <div className="section-shell flex h-20 items-center justify-between">
          <Link href="/" aria-label="Value Israel home">
            <Logo className="h-8 w-10" withWordmark />
          </Link>
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55 transition hover:text-white">
            Back to site
          </Link>
        </div>
      </header>

      <main className="section-shell py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">{eyebrow}</p>
          <h1 className="mt-5 text-5xl font-extralight tracking-[-0.05em] sm:text-7xl">{title}</h1>
          <p className="mt-5 text-sm text-white/42">Last updated: {updated}</p>

          <article className="legal-copy mt-14 rounded-[2rem] border border-white/8 bg-white/[0.025] p-7 sm:p-10 lg:p-12">
            {children}
          </article>
        </div>
      </main>
    </div>
  );
}
