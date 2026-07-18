const projectFynli = "/Fynli.png";
const projectGestao = "https://placehold.co/600x450/1e293b/ffffff?text=Gestao+de+Servicos";
const projectPadaria = "https://placehold.co/600x450/1e293b/ffffff?text=Controle+de+Padaria";

export const experiences = [
  {
    role: "Desenvolvedor Full Stack Freelancer",
    company: "Autônomo",
    period: "2023 — Atual",
    description:
      "Desenvolvimento de aplicações web, sistemas internos e plataformas SaaS para clientes de diferentes segmentos. Atuação desde o levantamento de requisitos até deploy e manutenção. Construção de APIs e serviços backend utilizando Python (FastAPI) e Node.js. Desenvolvimento de dashboards administrativos, sistemas de autenticação, integrações e gerenciamento de dados. Participação na modelagem de produtos, definição de funcionalidades, UX e prototipação utilizando Figma. Colaboração com equipes multidisciplinares utilizando metodologias ágeis e desenvolvimento de projetos de forma independente.",
    tech: ["Python", "FastAPI", "Node.js", "React", "TypeScript", "PostgreSQL", "Docker", "Figma"],
  },
  {
    role: "Professor de Programação Infantil",
    company: "Escola de Programação",
    period: "2025",
    description:
      "• Ministrei aulas de programação para crianças, ensinando fundamentos de lógica de programação e JavaScript através de metodologias lúdicas e projetos práticos hands-on.\n" +
      "• Criei e desenvolvi conteúdo didático original alinhado aos Objetivos de Desenvolvimento Sustentável (ODS 11), despertando o interesse genuíno das crianças por tecnologia.\n" +
      "• Promovi aprendizado acessível e engajador, adaptando conceitos complexos para uma linguagem apropriada ao público infantil.",
    tech: ["JavaScript", "Lógica de Programação", "Didática"],
  },
  {
    role: "Projetos Acadêmicos",
    company: "Uninassau",
    period: "2024 — 2025",
    description:
      "• Projetei e desenvolvi loja virtual completa para feira demonstrativa acadêmica, aplicando conhecimentos em e-commerce, UX/UI e arquitetura de sistemas.\n" +
      "• Liderei a arquitetura front-end, implementação de funcionalidades avançadas e apresentação técnica do projeto em eventos acadêmicos institucionais.\n" +
      "• Conduzi sessões de mentoria remota via Discord para estudantes com interesse ou dificuldade nos conteúdos de programação ministrados em sala de aula.",
    tech: ["React", "JavaScript", "UX/UI", "Mentoria"],
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
