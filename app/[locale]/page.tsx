import { useTranslations } from "next-intl";

import Header from "@/components/layout/header";
import { Line } from "@/components/line";
import Pray from "@/components/pray";
import ProjectShowcase from "@/components/project-showcase";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import TitleGradient from "@/components/title-gradient";

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
      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-800 to-gray-950">
        <Line position="bottom" />

        <div className="container mx-auto px-4 grid gap-20 py-24 lg:grid-cols-2 lg:gap-10 lg:py-44">
          {/* Lado Esquerdo */}
          <div className="absolute top-4 right-4">
            <ThemeToggleButton />
          </div>
          <div className="z-10 lg:pt-10">
            <TitleGradient
              value="h1"
              className="mt-4 text-4xl font-semibold tracking-tight text-transparent lg:text-6xl bg-clip-text"
            >
              {t('title')}
            </TitleGradient>
            <p className="mt-4 text-lg text-gray-300 lg:text-xl">
              {t('subtitle')}
            </p>
            <div className="mt-10 flex flex-col gap-4 lg:flex-row">
              <a
                href="#access"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-base font-medium text-surface-900 transition hover:bg-gray-200"
              >
                <ArrowIcon />
                {t('cvbutton')}
              </a>
            </div>
          </div>

          {/* Lado Direito */}
          <div className="relative flex flex-col">
            <ProjectShowcase route="paradigm.com/apparel" />

            <Pray />
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full dotted-background text-foreground flex flex-col items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Teste de Tema</h1>
          <p className="text-muted-foreground">
            Clique no botão abaixo para alternar entre o modo claro e escuro.
          </p>
          <p>O fundo e a cor do texto devem mudar.</p>
          <div className="mt-4">
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </main>
  );
}
