'use client';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-background-alt">
      <div className="max-w-7xl mx-auto">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
          {/* Coluna 1 - Nome e descrição */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
              Seu Nome
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Desenvolvedor Full Stack criando experiências digitais incríveis.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-secondary hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="#" 
                className="text-secondary hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="#" 
                className="text-secondary hover:text-pray transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="#" 
                className="text-secondary hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links de navegação */}
          <nav className="md:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Experiência
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">
              Contato
            </h4>
            <p className="text-sm sm:text-base text-muted-foreground mb-2">
              seuemail@exemplo.com
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              +55 (11) 99999-9999
            </p>
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground text-sm sm:text-base rounded-full hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl">
              Enviar Mensagem
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © 2025 Seu Nome. Todos os direitos reservados.
          </p>
          
          {/* Botão voltar ao topo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
