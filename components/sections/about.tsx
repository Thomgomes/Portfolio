"use client";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");
  const tnav = useTranslations("nav");

  const aboutParagraphs = (t.raw("about") as string[]) || [];

  const skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Shadcn UI",
    "Framer Motion",
    "Node.js",
    "Supabase",
    "SQL",
    "PostgreSQL",
    "REST APIs",
    "Docker",
    "MongoDB",
    "Git",
    "GitHub",
    "Vercel",
    "Figma",
  ];

  const highlights = [
    {
      icon: Code2,
      key: "cleanCode",
    },
    {
      icon: Palette,
      key: "design",
    },
    {
      icon: Zap,
      key: "performance",
    },
    {
      icon: Users,
      key: "uxFocus",
    },
  ];

  return (
    <section
      id={tnav("about")}
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 dotted-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">
            {t("title")}{" "}
            <span className="title-gradient">{t("titleHighlight")}</span>
          </h2>
          <div className="line h-1 w-24 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground">
              {t("skillsTitle")}
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-card border border-border text-card-foreground rounded-full text-sm sm:text-base lg:text-lg hover:border-primary hover:text-primary transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 sm:p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group card-gradient-hover"
            >
              <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:text-primary transition-colors mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-card-foreground">
                {t(`highlights.${item.key}.title`)}
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                {t(`highlights.${item.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
