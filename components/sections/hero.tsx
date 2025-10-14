'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  const tnav = useTranslations('nav');
  
  return (
    <section id={tnav('home')} className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div 
        className="glow-orb w-[1800px] h-[700px] top-20 left-10"
        style={{ 
          background: 'radial-gradient(circle, rgba(164, 22, 26, 0.4) 0%, transparent 80%)',
          animationDelay: '0s'
        }}
      />
      <div 
        className="glow-orb w-[1400px] h-[300px] bottom-20 lg:right-80 md:right-40 right-20"
        style={{ 
          background: 'radial-gradient(circle, rgba(215, 32, 40, 0.3) 0%, transparent 70%)',
          animationDelay: '10s'
        }}
      />
      
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          className="flex justify-between items-start mb-8 sm:mb-12 text-xs sm:text-sm text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <header className="flex w-full items-center justify-between">
          <span className="text-sm font-medium tracking-wide md:text-base">
            {t('name')}
          </span>
          {/* A linha cresce para preencher o espaço disponível */}
          <div className="mx-4 h-px flex-grow bg-accent/30"></div>
          <span className="text-sm font-medium tracking-wide md:text-base">
            {new Date().getFullYear()}
          </span>
        </header>
        </motion.div>

        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          
          <h1 className="text-center text-[20svw] sm:text-9xl md:text-[11rem] lg:text-[14rem] xl:text-[15rem] font-bold leading-none tracking-tight text-foreground">
            {t('title')}
          </h1>
          
          <motion.div 
          className="absolute right-0 sm:right-[10%] -bottom-4 sm:bottom-0 md:bottom-4 text-right "
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-2 justify-end glass-card backdrop-blur-md px-2 py-0.5 rounded-xl">
              <Sparkles className="w-[3.5svw] h-[3.5svh] sm:w-5 sm:h-5 text-pray" />
              <p className="text-[3.8svw] sm:text-xl md:text-2xl font-semibold">
                {t('subtitle')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-12 flex justify-center flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-light transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
            {t('cta.cv')}
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          <a href={`#${tnav('footer')}`} className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-border hover:border-primary text-foreground hover:text-primary font-semibold rounded-full transition-all duration-300">
            {t('cta.contact')}
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 gradient-overlay pointer-events-none -z-10" />
    </section>
  );
}
