'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Plataforma completa de e-commerce com pagamentos integrados',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Aplicativo bancário seguro com autenticação biométrica',
    tags: ['React Native', 'Firebase', 'TypeScript']
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    category: 'Web Development',
    description: 'Dashboard interativo com visualização de dados em tempo real',
    tags: ['Next.js', 'Tailwind', 'Chart.js']
  },
  {
    id: 4,
    title: 'Social Media App',
    category: 'Full Stack',
    description: 'Rede social com chat em tempo real e compartilhamento de mídia',
    tags: ['MERN Stack', 'Socket.io', 'AWS']
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-video bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary transition-all duration-300 card-gradient-hover"
    >
      <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-card-foreground">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-secondary mb-2">
            {project.category}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Botões de ação */}
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-colors shadow-lg">
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Ver Projeto</span>
            </button>
            <button className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">Código</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay hover effect com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pray/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background-alt dotted-background">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
