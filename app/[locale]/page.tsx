// import { useTranslations } from "next-intl";

import { ThemeToggleButton } from "@/components/theme-toggle-button";

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
  // const t = useTranslations('');

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-800 to-gray-950">
        {/* Linha decorativa no topo e no fundo (opcional) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 left-1/2 z-0 h-24 w-[120%] -translate-x-1/2 rotate-2 opacity-40"
          style={{
            background:
              "linear-gradient(90deg, #121217 0%, #0075ad 50%, #121217 100%)",
          }}
        />

        <div className="container mx-auto px-4 grid gap-20 py-24 lg:grid-cols-2 lg:gap-10 lg:py-44">
          {/* Lado Esquerdo: Conteúdo de Texto */}
          <div className="absolute top-4 right-4">
            <ThemeToggleButton />
          </div>
          <div className="z-10 lg:pt-10">
            <h1
              className="text-4xl font-semibold tracking-tight text-transparent lg:text-6xl bg-clip-text"
              style={{
                backgroundImage:
                  "radial-gradient(138.06% 1036.51% at 95.25% -2.54%, #70d1ff 14.06%, #ade4ff 51.02%, #dbf3ff 79.09%)",
              }}
            >
              Going international with Next.jeee
            </h1>
            <p className="mt-4 text-lg text-gray-300 lg:text-xl">
              Learn how to build delightful, multilingual experiences with the
              official{" "}
              <code className="whitespace-nowrap rounded border border-gray-700 bg-gray-800 px-1 py-[2px] font-mono text-[0.9em]">
                next-intl
              </code>{" "}
              course.
            </p>
            <div className="mt-10 flex flex-col gap-4 lg:flex-row">
              <a
                href="#access"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-base font-medium text-surface-900 transition hover:bg-gray-200"
              >
                <ArrowIcon />
                Get access now
              </a>
            </div>
          </div>

          {/* Lado Direito: Elementos Visuais Flutuantes */}
          <div className="relative z-0">
            {/* 1. A Janela do Navegador */}
            <div className="max-w-[35rem] overflow-hidden rounded-md border border-gray-200 bg-white shadow-2xl shadow-blue-400/50">
              <div className="flex h-8 items-center justify-center border-b border-gray-200 bg-gray-50 p-1">
                <div className="h-3 w-40 truncate rounded-md bg-gray-200 px-4 text-center text-xs text-gray-500">
                  paradigm.com/apparel
                </div>
              </div>
              {/* Você pode substituir por um <img /> ou outro conteúdo */}
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400">Seu conteúdo ou imagem aqui</p>
              </div>
            </div>

            {/* 2. O Bloco de Código Flutuante */}
            <div className="absolute -bottom-40 left-0 origin-bottom-left scale-[0.65] rounded-md bg-gray-900 shadow-2xl shadow-black/80 lg:-bottom-24 lg:-left-24">
              <p className="bg-gray-700 px-4 py-3 text-sm text-gray-200 rounded-md">
                dialog/pray.ts
              </p>
              <pre className="overflow-x-auto p-4 text-sm text-white">
                <code>
                  {`const holyPrayer = \`
    Código nosso que estás em C,
    Santificado seja vós, Console.
    Venha a nós o vosso array,
    E seja feita, sim, {vossa chave}.
    Assim no if{} como no else{},
    O for(nosso; de cada dia; nos dai hoje++).
    Debugai as nossas sentenças,
    Assim como nós colocamos o ponto e vírgula esquecido;
    E não nos deixeis errar a indentação.
    Mas livrai-nos das funções recursivas,
    A main(). 
  \`;

export default holyPrayer;
`}
                </code>
              </pre>
            </div>
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
    </>
  );
}
