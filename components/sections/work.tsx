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
    title: 'Eduplaytion',
    company: 'Norway',
    location: 'Norway',
    period: 'Feb 2022',
    description: 'Worked in the development of the Numetry Teacher Panel, Parent Panel, and other internal applications',
    roles: ['Frontend Developer'],
    type: 'work'
  },
  {
    title: 'GDS TEC',
    company: 'Brazil',
    location: 'Brazil',
    period: 'Sep 2021 - Jan 2022',
    description: 'Worked as the leader front-end and mobile developer in projects related to sports gambling and food shopping apps (similar to iFood and Uber Eats)',
    roles: ['Web and Mobile Development Leader'],
    type: 'work'
  },
  {
    title: 'Leap Studios',
    company: 'Brazil',
    location: 'Brazil',
    period: 'Jul 2021 - Jan 2022',
    description: 'I was one of the founders and also the creative director. My main role was to organize the tasks between the teams (developers, writers, marketing, and design) and also to be in front of the negotiations happening between the company and the clients.',
    roles: ['Creative Director'],
    type: 'work'
  },
  {
    title: 'Quacks Interatividade Digital',
    company: 'Brazil',
    location: 'Brazil',
    period: 'Mar 2020 - Nov 2020',
    description: 'I was the main front-end developer and also worked on the backend. My role was to develop static and dynamic landing pages, e-commerce apps, and mobile apps, and also did participation on educational games (Aula Pratik)',
    roles: ['FullStack Developer'],
    type: 'work'
  }
];

export default function WorkTimeline() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background section-gradient">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
