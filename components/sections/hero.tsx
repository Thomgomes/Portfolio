'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
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
          <span>{t('name')}</span>
          <span>{t('year')}</span>
        </motion.div>

        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[15rem] font-bold leading-none tracking-tight text-foreground">
            {t('title')}
          </h1>
          
          <div className="absolute right-0 -bottom-4 sm:bottom-4 md:bottom-8 text-right">
            <div className="flex items-center gap-2 justify-end">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pray" />
              <p className="text-base sm:text-xl md:text-2xl font-semibold">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-12 sm:mt-16 md:mt-20 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {t('description')}
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-light transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
            {t('cta.projects')}
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-border hover:border-primary text-foreground hover:text-primary font-semibold rounded-full transition-all duration-300">
            {t('cta.contact')}
          </button>
        </motion.div>
      </div>

      <div className="absolute inset-0 gradient-overlay pointer-events-none -z-10" />
    </section>
  );
}
