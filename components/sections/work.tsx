"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  roles: string[];
  type?: "work" | "education";
}

export default function WorkTimeline() {
  const tnav = useTranslations("nav");
  const t = useTranslations("experience");

  const experiences = (t.raw("timeline") as Experience[]) || [];

  return (
    <section
      id={tnav("work")}
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background section-gradient"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">
            {t("title")}{" "}
            <span className="title-gradient">{t("titleHighlight")}</span>
          </h2>
          <div className="line h-1 w-24 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Linha central */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-ml-px bg-border" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Container do item */}
                <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
                  {/* Espaço vazio no lado oposto */}
                  <div
                    className={`hidden md:block ${
                      index % 2 === 1 ? "md:order-1" : "md:order-2"
                    }`}
                  />

                  {/* Card de conteúdo - COMEÇA À ESQUERDA */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 1
                        ? "md:order-2 md:pl-12"
                        : "md:order-1 md:pr-12"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      {/* Título e Empresa */}
                      <h3 className="text-xl sm:text-2xl font-bold mb-1 text-card-foreground">
                        {exp.title}
                      </h3>
                      <h4 className="text-base sm:text-lg text-muted-foreground mb-4 font-medium">
                        {exp.company}{" "}
                        <span className="md:hidden inline-block sm:text-lg font-medium text-muted-foreground">
                          - {exp.period}
                        </span>
                      </h4>

                      {/* Descrição */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((desc, idx) => (
                          <li
                            key={idx}
                            className="text-sm sm:text-base text-muted-foreground flex items-start leading-relaxed"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Roles */}
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-primary mb-2">
                          {t("roles")}
                        </p>
                        <ul className="space-y-1">
                          {exp.roles.map((role, idx) => (
                            <li
                              key={idx}
                              className="text-sm sm:text-base text-card-foreground flex items-center pb-1"
                            >
                              <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"/>
                              {role}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Círculo com ícone - SEMPRE NO CENTRO DA LINHA */}
                <div className="absolute left-4 md:left-1/2 top-0 w-12 h-12 -ml-6 rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-background z-10">
                  {exp.type === "education" ? (
                    <GraduationCap className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  )}
                </div>

                {/* Data ao lado do círculo (desktop) - ALTERNA ENTRE ESQUERDA E DIREITA */}
                <div
                  className={`hidden md:block absolute left-1/2 top-0 whitespace-nowrap ${
                    index % 2 === 0
                      ? "ml-10 mt-[0.65rem]"
                      : "-ml-10 mt-[0.65rem] -translate-x-full"
                  }`}
                >
                  <span className="inline-block text-sm font-medium text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
