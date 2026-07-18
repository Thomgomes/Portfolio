import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { TopoLines } from "./TopoLines";

export function Projects() {
  return (
    <section
      id="projetos"
      className="relative overflow-hidden py-24 sm:py-32 bg-muted/30"
    >
      <TopoLines />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projetos"
          title="Trabalhos em destaque"
          description="Uma seleção de projetos onde design, código e propósito se encontram."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group glass-card overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-highlight/20 px-2.5 py-1 text-[11px] font-medium text-secondary dark:text-highlight"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  {p.live ? (
                    <>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-secondary hover:text-secondary-foreground"
                      >
                        Ver Projeto
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub de ${p.name}`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:border-accent hover:text-accent"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </>
                  ) : (
                    p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-secondary hover:text-secondary-foreground"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Ver Código
                      </a>
                    )
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/Thomgomes"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-7 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="h-4 w-4" />
            Ver mais no GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
