import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, FileText } from "lucide-react";
import heroImg from "@/assets/hero.png";
import { CVModal } from "./CVModal";

export function Hero() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  const jump = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section
        id="inicio"
        className="relative isolate min-h-svh w-full overflow-hidden"
      >
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-20"
        aria-hidden="true"
      >
        <img
          src={heroImg}
          alt=""
          className="h-[105%] w-full lg:object-fill object-cover"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-24 pb-16">
        <motion.div style={{ opacity }} className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.87_0.11_210)] animate-pulse" />
            Olá, eu sou
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(15,23,42,0.2)]"
          >
            Thom Gomes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-white/90"
          >
            Desenvolvedor Full Stack criando experiências digitais modernas e
            intuitivas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => setIsCVOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_8px_20px_-8px_oklch(0.71_0.17_24/0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_oklch(0.71_0.17_24/0.5)] cursor-pointer"
            >
              <FileText className="h-4 w-4" />
              Ver CV
            </button>
            <button
              onClick={() => jump("projetos")}
              className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-[oklch(0.87_0.11_210)] hover:bg-white/20 hover:text-[oklch(0.87_0.11_210)]"
            >
              Ver Projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() => jump("experiencia")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-2 text-xs text-white/80 hover:text-white"
          aria-label="Rolar para baixo"
        >
          <span className="tracking-widest uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/40 bg-white/10 backdrop-blur"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.button>
      </div>
      </section>

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </>
  );
}
