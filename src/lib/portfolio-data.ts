const projectFynli = "/Fynli.png";
const projectGestao = "https://placehold.co/600x450/1e293b/ffffff?text=Gestao+de+Servicos";
const projectPadaria = "https://placehold.co/600x450/1e293b/ffffff?text=Controle+de+Padaria";

export const experiences = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Consultoria Autônoma em Software",
    period: "2023 — Atual",
    description:
      "Atuação de ponta a ponta na arquitetura, desenvolvimento e sustentação de sistemas web e soluções cloud-native para instituições e clientes finais: \n" + 
      "• Plataforma de Avaliação Institucional: Atendimento a 3.200+ alunos e 200+ docentes com relatórios anônimos e estabilidade sob picos de 300 acessos simultâneos. \n" +
      "• Automação Comercial & Estoque: Modelagem de Ficha Técnica (BOM) para baixa automatizada de insumos e controle de produção. \n" + 
      "• PWA & Engenharia Cross-Platform: Solução de mobilidade para técnicos em todo o Brasil (8 administradores) com sincronização offline-first e controle de idempotência. \n" +
      "• UI/UX & Interfaces Web: Prototipação interativa e design systems no Figma, desenvolvendo interfaces responsivas com foco em usabilidade, alta conversão e SEO." ,
    tech: ["Next.js", "TypeScript", "JavaScript", "React", "Python", "FastAPI", "Node.js", "PostgreSQL", "Docker", "Figma"],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "Leap - Startup",
    period: "2025 — 2026",
    description:
      "Atuação na arquitetura e liderança técnica de ecossistema e-commerce multilojas e plataformas de gestão:\n" +
      "• E-commerce: Sustentação de plataforma para 8 operações comerciais ativas, com estabilidade para picos de 150+ acessos simultâneos e 1.200+ visitas mensais.\n" +
      "• Engenharia Full Stack & UI/UX: Prototipação UI/UX no Figma, interfaces em Next.js e liderança do back-end em NestJS/Prisma com autenticação OTP. Responsável pelo desenvolvimento de 12+ landing pages, resolução de bugs em 10+ sistemas de clientes e containerização com Docker.",
    tech: ["Next.js", "TypeScript", "NestJS", "Prisma", "Docker", "Figma", "UX/UI"],
  },
  {
    role: "Professor de Programação Infantil",
    company: "Escola de Programação",
    period: "2025",
    description:
      "Ensino de algoritmos, lógica de programação e JavaScript através de metodologias práticas e ativas. Desenvolvimento de material didático original alinhado à ODS 12 (Consumo e Produção Responsáveis), estimulando o pensamento crítico e conectando conceitos fundamentais de engenharia de software a desafios reais de sustentabilidade.",
    tech: ["JavaScript", "Lógica de Programação", "Didática"],
  },
];

export const projects = [
  {
    name: "Fynli",
    description:
      "Fynli é um aplicativo web completo construído para resolver um problema real: a confusão de gerenciar gastos pessoais e familiares em uma única conta.\n\n" +
      "O projeto foi desenvolvido de ponta a ponta, com foco em segurança de dados, performance e uma experiência de usuário reativa. Utilizando React e Next.js no frontend, TypeScript para tipagem estática, Tailwind CSS e Shadcn para um design moderno e responsivo.\n\n" +
      "No backend, o Supabase foi escolhido para gerenciar autenticação e banco de dados SQL, garantindo escalabilidade e segurança. O Fynli oferece uma interface intuitiva para que os usuários possam acompanhar suas finanças de forma eficiente.\n\n" +
      "O Fynli é mais do que um simples gerenciador de despesas; é uma solução pensada para facilitar a vida financeira dos seus usuários.",
    image: projectFynli,
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Chart.js",
      "Supabase",
      "PostgreSQL",
      "MVP",
    ],
    live: "https://fynli.vercel.app/",
    github: "https://github.com/Thomgomes/fynli",
  },
  {
    name: "Sistema de Gestão de Ordens de Serviço ( Demo )",
    description:
      "Desenvolvimento de plataforma full stack para gerenciamento de operações de campo e ordens de serviço. Desenvolvimento de painel administrativo, PWA para técnicos de campo e portal de acompanhamento para clientes. Implementação de sincronização offline com controle de idempotência e tratamento de conflitos. Implementação de autenticação JWT, controle de acesso por perfis e arquitetura multi-tenant.",
    image: projectGestao,
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
    live: "",
    github: "#",
  },
  {
    name: "Sistema de Controle de Produção para Padaria",
    description:
      "Sistema para gerenciamento e acompanhamento de processos produtivos. Desenvolvimento do frontend em React e TypeScript e backend em FastAPI. Implementação de funcionalidades voltadas ao controle operacional e acompanhamento de produção.",
    image: projectPadaria,
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    live: "",
    github: "#",
  },
];

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
  Backend: ["Python", "FastAPI", "Node.js", "Express"],
  DataBase: ["PostgreSQL", "SQLAlchemy", "SQLite"],
  Tools: ["Git", "Docker", "Figma", "Cypress"],
};

export const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];
