"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import ParticleBackground from "@/components/particle-background";

interface Project {
  id: number;
  title: string;
  category: string;
  year: number;
  imagem: string;
  technologies: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fynli",
    category: "Web Development",
    year: 2025,
    imagem: "https://placehold.co/100x100/0ea5e9/ffffff?text=Item",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Bagui dos graficos", "Supabase","SQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "tutu teste para 2",
    category: "??? Development",
    year: 2025,
    imagem: "https://placehold.co/100x100/0ea5e9/ffffff?text=Item",
    description:
      "Lorem Ipsum.",
    technologies: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6"
    >
      {/* Lado Esquerdo - Detalhes do Projeto */}
      <div className="glass-card glass-card-heavy glass-card-lift rounded-2xl p-6 flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
          {project.title}
        </h3>
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center overflow-hidden relative">
          <Image
            src={project.imagem}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex justify-between">
          <p className="text-primary font-medium">{project.category}</p>
          <p>{project.year}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 glass-card-heavy rounded-full text-sm font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Lado Direito - Descrição e Ações */}
      {/* Adiciona margem superior no mobile e linha divisória para separação visual */}
      <div className="flex flex-col gap-6 mt-6 pt-6 border-t border-border/50 lg:mt-0 lg:pt-0 lg:border-t-0">
        <div className="glass-card glass-card-heavy rounded-2xl p-6 flex-1">
          <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">
            DESCRIÇÃO
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glass-card-heavy rounded-xl p-4 flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 group"
          >
            <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-light transition-colors" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              LIVE
            </span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glass-card-heavy rounded-xl p-4 flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 group"
          >
            <Github className="w-5 h-5 text-primary group-hover:text-primary-light transition-colors" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              CODE
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <ParticleBackground
        parentRef={sectionRef}
        particleCount={80}
        particleSpeed={0.4}
        connectionDistance={100}
        useThemeColors={true}
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Featured <span className="title-gradient">Projects</span>
          </h2>
          <div className="line h-1 w-24 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
