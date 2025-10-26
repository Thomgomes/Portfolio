'use client';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tnav = useTranslations('nav');
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id={tnav('footer')} className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-background-alt">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between mb-8">
          <div>
            <div className="hidden md:block">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
                {t('name')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                {t('role')}
              </p>
            </div>
            <div className="flex gap-16 md:gap-4">
              <a 
                href="https://github.com/Thomgomes" 
                target='_blank'
                className="text-secondary hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/thom%C3%A1s-gomes-796b8152/"
                target='_blank'
                className="text-secondary hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">
              {t('contact.title')}
            </h4>
            <p className="text-sm sm:text-base text-muted-foreground mb-2">
              {t('contact.email')}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              {t('contact.phone')}
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} {t('copyright')}
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
            aria-label={t('backToTop')}
          >
            <span>{t('backToTop')}</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
