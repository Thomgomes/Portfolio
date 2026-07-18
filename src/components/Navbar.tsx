import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/portfolio-data";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const jump = (id: string) => {
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
          scrolled ? "glass-card" : "border border-transparent bg-transparent"
        }`}
      >
        <button
          onClick={() => jump("inicio")}
          className="flex items-center gap-2 text-sm font-bold tracking-tight"
          aria-label="Início"
        >
          <img src="/thomty.gif" alt="Thom Gomes" className="w-12" />
          <span
            className={`hidden sm:inline transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Thom Gomes
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => jump(l.id)}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active === l.id
                    ? scrolled
                      ? "text-accent"
                      : "text-white"
                    : scrolled
                      ? "text-foreground/75 hover:text-foreground"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full ${
                      scrolled ? "bg-accent" : "bg-white"
                    }`}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle scrolled={scrolled} />
          <button
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 transition-colors ${
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl glass-card p-2 animate-fade-in">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => jump(l.id)}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm ${
                active === l.id
                  ? "bg-accent/10 text-accent"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
