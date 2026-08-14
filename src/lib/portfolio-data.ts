const projectFynli = "/Fynli.png";
const projectGestao =
  "https://placehold.co/600x450/1e293b/ffffff?text=Gestao+de+Servicos";
const projectPadaria =
  "https://placehold.co/600x450/1e293b/ffffff?text=Controle+de+Padaria";

export const experiences = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Consultoria Autônoma em Software",
    period: "2023 — Atual",
    description:
      "Atuação de ponta a ponta na arquitetura, desenvolvimento e sustentação de sistemas web e soluções de software para instituições e clientes finais:\n" +
      "• Plataforma de Avaliação Institucional: Desenvolvimento de sistema de avaliação docente para universidade privada, utilizado por 3.200+ alunos e com 200+ professores avaliados, incluindo formulários dinâmicos, relatórios 100% anônimos e suporte a picos de 200 a 300 acessos simultâneos.\n" +
      "• PWA & Engenharia Cross-Platform: Desenvolvimento de solução de mobilidade para operações técnicas em campo de abrangência nacional, utilizada por técnicos em múltiplas regiões do Brasil e gerenciada por 8 administradores, com sincronização offline-first utilizando Service Workers e controle de idempotência.\n" +
      "• Automação Comercial & Gestão de Estoque: Desenvolvimento de sistema de gestão de estoque e produção utilizando modelagem de Ficha Técnica de Produtos (BOM — Bill of Materials) para automatização do abatimento proporcional de matéria-prima.\n" +
      "• UI/UX & Interfaces Web: Prototipação de interfaces no Figma e desenvolvimento de landing pages responsivas com foco em conversão, acessibilidade e SEO.",
    tech: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React",
      "Python",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Figma",
    ],
  },

  {
    role: "Desenvolvedor Full Stack",
    company: "Leap - Startup",
    period: "2025 — 2026",
    description:
      "Atuação no desenvolvimento e sustentação de um ecossistema de e-commerce multilojas utilizado por 8 operações comerciais ativas:\n" +
      "• E-commerce: Desenvolvimento e manutenção da plataforma, garantindo estabilidade para picos de 150+ acessos simultâneos e 1.200+ visitas mensais.\n" +
      "• Full Stack & UI/UX: Responsabilidade pelo desenvolvimento frontend em Next.js, backend em Node.js/NestJS com Prisma e prototipação de interfaces e experiências de usuário no Figma. Desenvolvimento de 12+ landing pages, resolução de bugs críticos em 10+ sistemas legados e projetos sob demanda, além da containerização dos ambientes com Docker.\n" +
      "• Colaboração Técnica: Participação em reuniões, discussões e decisões de projeto, contribuindo com sugestões relacionadas à arquitetura, funcionalidades, UI/UX e evolução das aplicações",
    tech: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "Prisma",
      "Docker",
      "Figma",
      "UI/UX",
    ],
  },

  {
    role: "Professor de Programação Infantil",
    company: "Escola de Programação",
    period: "2025",
    description:
      "Ensino de algoritmos, lógica de programação e JavaScript por meio de metodologias práticas e ativas. Desenvolvimento de material didático original alinhado à ODS 12 (Consumo e Produção Responsáveis), estimulando o pensamento crítico e conectando conceitos de programação a desafios reais de sustentabilidade.",
    tech: ["JavaScript", "Lógica de Programação", "Didática"],
  },
];

export const projects = [
  {
    name: "Fynli",
    description:
      "Plataforma SaaS desenvolvida para organização e acompanhamento de gastos pessoais e familiares, permitindo estruturar despesas por diferentes perfis e visualizar a distribuição dos gastos ao longo do tempo.\n\n" +
      "O projeto foi desenvolvido de ponta a ponta utilizando React, Next.js e TypeScript no frontend, com Tailwind CSS para construção da interface e Chart.js para visualização dos dados financeiros.\n\n" +
      "No backend, o Supabase foi utilizado em conjunto com PostgreSQL para autenticação e persistência dos dados, com Row Level Security (RLS) para controle de acesso e funções SQL customizadas (RPCs) para operações específicas do sistema.\n\n" +
      "O projeto também conta com dashboards gráficos e uma arquitetura voltada à segurança e organização dos dados financeiros dos usuários.",
    image: projectFynli,
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Chart.js",
      "Supabase",
      "PostgreSQL",
    ],
    live: "https://fynli.vercel.app/",
    github: "https://github.com/Thomgomes/fynli",
  },

  {
    name: "Sistema de Gestão de Ordens de Serviço — Demo",
    description:
      "Plataforma full stack para gerenciamento de operações de campo e ordens de serviço, combinando painel administrativo, PWA para técnicos e portal de acompanhamento para clientes.\n\n" +
      "Implementação de sincronização offline-first com controle de idempotência e tratamento de conflitos de dados, permitindo a continuidade das operações mesmo em ambientes sem conexão com a internet.\n\n" +
      "Desenvolvimento de arquitetura multi-tenant com autenticação JWT e controle granular de permissões utilizando RBAC.\n\n" +
      "Ambiente containerizado com Docker Compose para execução padronizada da API e do banco de dados PostgreSQL.",
    image: projectGestao,
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "Docker Compose",
    ],
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
