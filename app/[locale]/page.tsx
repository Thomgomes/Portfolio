import { useTranslations } from "next-intl";

import Header from "@/components/layout/header";
import { Line } from "@/components/line";
import Pray from "@/components/pray";
import ProjectShowcase from "@/components/project-showcase";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import TitleGradient from "@/components/title-gradient";
import ParticleBackground from "@/components/particle-background";
import { ArrowBigDownDash } from "lucide-react";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main>
      <Header />
      <section className="relative w-full min-h-8/12 overflow-hidden bg-gradient-to-br from-background to-background-alt">
        <Line position="bottom" />

        <section className="container mx-auto px-4 h-screen flex items-center justify-between">
          {/* Lado Esquerdo */}
          <div className="z-10 w-full">
            <h1
             
              className="title-gradient mt-4 font-semibold text-4xl lg:text-6xl"
            >
              {t('title')}
            </h1>
            <p className="mt-4 text-lg text-gray-300 lg:text-xl">
              {t('subtitle')}
            </p>
            <div className="mt-10 flex flex-col gap-4 lg:flex-row">
              <a
                href="#access"
                className="group flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 text-base font-medium text-surface-900 transition hover:bg-primary-light hover:text-primary-light-foreground"
              >
                <ArrowBigDownDash />
                {t('cvbutton')}
              </a>
            </div>
          </div>

          {/* Lado Direito */}
          <div className="w-full">
            <ProjectShowcase route="paradigm.com/apparel" />
          </div>
        </section>
      </section>
    </main>
      // <section className="relative min-h-screen w-full overflow-hidden text-foreground flex flex-col items-center justify-center p-8">
      //   <ParticleBackground/>
      //   <div className="text-center space-y-4">
      //     <h1 className="text-3xl font-bold">Teste de Tema</h1>
      //     <p className="text-muted-foreground">
      //       Clique no botão abaixo para alternar entre o modo claro e escuro. a
      //     </p>
      //     <p>O fundo e a cor do texto devem mudar.</p>
      //     <div className="mt-4">
      //       <ThemeToggleButton />
      //     </div>
      //   </div>
      // </section>
  );
}
