'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center px-8">
      <div className="max-w-7xl w-full">
        {/* Nome e Ano */}
        <motion.div
          className="flex justify-between items-start mb-12 text-sm text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>Larissa Ricarte</span>
          <span>2025</span>
        </motion.div>

        {/* Título Principal */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-bold leading-none tracking-tight">
            portfolio
          </h1>
          
          {/* Subtítulo sobreposto */}
          <div className="absolute right-0 bottom-8 text-right">
            <p className="text-xl md:text-2xl text-gray-400">UX/UI Design</p>
          </div>
        </motion.div>

        {/* Descrição */}
        <motion.p
          className="mt-8 text-lg text-gray-400 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Desenvolvedor Full Stack focado em criar experiências digitais 
          excepcionais através de design elegante e código limpo.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
            Ver Projetos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
