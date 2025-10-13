'use client';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js',
    'Tailwind CSS', 'Framer Motion', 'MongoDB', 'PostgreSQL'
  ];

  const highlights = [
    { 
      icon: Code2, 
      title: 'Clean Code', 
      description: 'Código limpo e manutenível' 
    },
    { 
      icon: Palette, 
      title: 'Design', 
      description: 'Interfaces elegantes' 
    },
    { 
      icon: Zap, 
      title: 'Performance', 
      description: 'Otimização máxima' 
    },
    { 
      icon: Users, 
      title: 'UX Focus', 
      description: 'Centrado no usuário' 
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8t dotted-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Sobre <span className="title-gradient">Mim</span>
          </h2>
          <div className="line h-1 w-24 rounded-full" />
        </motion.div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12 lg:mb-20">
          {/* Lado esquerdo - Sobre */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Sou um desenvolvedor full stack apaixonado por criar experiências 
              digitais que fazem a diferença. Com expertise em desenvolvimento 
              web e mobile, transformo ideias em produtos escaláveis e elegantes.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Minha abordagem combina design centrado no usuário com as mais 
              modernas tecnologias, garantindo soluções que não apenas funcionam 
              perfeitamente, mas também encantam.
            </p>
          </motion.div>

          {/* Lado direito - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground">
              Skills & Technologies
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

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 sm:p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group card-gradient-hover"
            >
              <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:text-pray transition-colors mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-card-foreground">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
