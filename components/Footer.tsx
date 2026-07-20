import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/7 bg-[#0e1013] py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo className="h-8 w-10" withWordmark />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/38">
            Connecting leading global investors with differentiated opportunities across Israel&apos;s technology ecosystem.
          </p>
        </div>

        <div className="text-sm md:text-right">
          <p className="text-[10px] uppercase tracking-[0.28em] text-blue-400">Contact</p>
          <div className="mt-2 space-y-1 text-white/58">
            <p><a className="transition hover:text-white" href="mailto:rstern@valueisrael.com">rstern@valueisrael.com</a></p>
            <p><a className="transition hover:text-white" href="mailto:olowte@valueisrael.com">olowte@valueisrael.com</a></p>
          </div>
        </div>
      </div>

      <div className="section-shell mt-9 flex flex-col gap-4 border-t border-white/7 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Value Israel. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          <a className="transition hover:text-white" href="https://il.linkedin.com/in/ron-stern-b0064634" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>Private &amp; confidential by nature</span>
        </div>
      </div>
    </footer>
  );
}
