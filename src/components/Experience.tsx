import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { TopoLines } from "./TopoLines";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <TopoLines />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência profissional"
          description="Anos construindo produtos de ponta a ponta ao lado de times talentosos."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent"
          />

          <ol className="space-y-12">
            {experiences.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <li key={exp.role} className="relative">
                  <div
                    className={`md:grid md:grid-cols-2 md:gap-12 ${
                      left ? "" : "md:[&>*:first-child]:col-start-2"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6 }}
                      className={`relative ml-12 md:ml-0 ${
                        left ? "md:pr-8 md:text-right" : "md:pl-8"
                      }`}
                    >
                      <div className="glass-card rounded-2xl p-6 sm:p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {exp.period}
                        </p>
                        <h3 className="mt-2 text-xl sm:text-2xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                          {exp.company}
                        </p>
                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground whitespace-pre-line text-left">
                          {exp.description}
                        </p>
                        <div
                          className={`mt-5 flex flex-wrap gap-2 ${
                            left ? "md:justify-end" : ""
                          }`}
                        >
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground/80"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <span className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full border border-accent/40 bg-background text-accent shadow-[0_0_0_4px_var(--background)]">
                    <Briefcase className="h-3.5 w-3.5" />
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
