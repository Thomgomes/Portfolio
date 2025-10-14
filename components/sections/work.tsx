'use client';
import { motion } from 'framer-motion'; // ← FALTAVA ISSO!
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  roles: string[];
  type: 'work' | 'education';
}

const experiences: Experience[] = [
  {
    title: 'Lorem',
    company: 'Ipsum',
    location: 'Teste',
    period: 'Feb 2023',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    roles: ['Frontend Developer'],
    type: 'work'
  },
  {
    title: 'Teste',
    company: 'Empresa X',
    location: 'Brasil',
    period: 'Jan 2022 - Fev 2023',
    description: 'Desenvolvimento de interfaces responsivas e otimização de performance em aplicações web.',
    roles: ['Frontend Developer', 'UI/UX Designer'],
    type: 'work'
  },
];

export default function WorkTimeline() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background section-gradient">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Work <span className="title-gradient">Timeline</span>
          </h2>
          <div className="line h-1 w-24 rounded-full mx-auto" />
        </motion.div>
        
        <VerticalTimeline lineColor="var(--border)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'var(--card)',
                color: 'var(--card-foreground)',
                boxShadow: '0 3px 0 var(--border)',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                padding: '1.5rem'
              }}
              contentArrowStyle={{ 
                borderRight: '7px solid var(--card)' 
              }}
              date={exp.period}
              dateClassName="text-muted-foreground"
              iconStyle={{
                background: exp.type === 'work' ? 'var(--primary)' : 'var(--pray)',
                color: 'var(--primary-foreground)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 0 4px var(--background), inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
              }}
              icon={
                exp.type === 'work' ? (
                  <Briefcase className="w-5 h-5" />
                ) : (
                  <GraduationCap className="w-5 h-5" />
                )
              }
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-1 text-card-foreground">
                {exp.title} - {exp.company}
              </h3>
              <h4 className="text-base sm:text-lg text-secondary mb-4">
                {exp.period}
              </h4>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div>
                <p className="text-xs sm:text-sm font-semibold text-primary mb-2">
                  Roles
                </p>
                <ul className="space-y-1">
                  {exp.roles.map((role, idx) => (
                    <li key={idx} className="text-sm sm:text-base text-card-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
