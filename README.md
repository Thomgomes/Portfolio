# 📂 Portfólio Pessoal — Thom Gomes

Este é um portfólio pessoal e profissional desenvolvido com tecnologias modernas de desenvolvimento web, focado em alta performance, estética premium, animações fluidas e excelente experiência do usuário (UX).

O projeto é responsivo, possui suporte a **modo claro e escuro** (com transições suaves) e centraliza todas as informações do desenvolvedor em um único arquivo de configuração rápida.

---

## ✨ Funcionalidades em Destaque

*   **Visualizador de Currículo Integrado (CV Modal)**: Um modal de sobreposição total (com 80% de opacidade e desfoque de fundo no backdrop) que renderiza o arquivo PDF do currículo de forma nativa e interativa na própria página. Permite zoom e download direto, com bloqueio de scroll da tela principal e suporte a atalho no teclado (`Esc`) para fechar.
*   **Ações Inteligentes de Projetos**: Os cartões de projeto adaptam seus botões de ação dinamicamente. Se possuírem link de deploy ativo, exibem "Ver Projeto" e o link do GitHub ao lado; se não possuírem deploy ativo (com o campo `live` em branco no arquivo de dados), transformam-se automaticamente em um único botão de destaque de "Ver Código" com o ícone do GitHub.
*   **Cópia Rápida de Contato**: Botões de cópia rápida interativos ao lado do e-mail e telefone no rodapé, fornecendo um feedback visual imediato (o ícone de prancheta muda para um checkmark por 2 segundos ao copiar).
*   **Design & Interatividade Premium**: Layouts fluidos usando **Framer Motion** para animações na rolagem (`scroll-triggered animations`), efeito de vidro (`glassmorphism`) e curvas topográficas dinâmicas de fundo.
*   **Habilidades Dinâmicas**: Uma grade interativa de habilidades categorizadas, renderizadas dinamicamente a partir dos dados do portfólio.

---

## 🛠️ Tecnologias Utilizadas

*   **React 19** & **TypeScript**
*   **Vite** (Build tool rápida)
*   **Tailwind CSS v4** (Estilização baseada em utilitários e variáveis de CSS nativas com suporte ao modo escuro)
*   **Framer Motion** (Animações de entrada e interatividade de gestos)
*   **Lucide React** (Pacote de ícones moderno e consistente)

---

## 📁 Estrutura do Projeto

```
Portfolio/
├── public/                  # Assets públicos (Favicon, GIFs, imagens de projetos, PDF do CV)
│   ├── Fynli.png            # Imagem do projeto Fynli
│   ├── CV_Thomás_Gomes.pdf  # Arquivo de currículo PDF principal
│   └── ...
├── src/
│   ├── assets/              # Assets estáticos empacotados pelo Vite
│   ├── components/          # Componentes React
│   │   ├── Abouts.tsx       # Seção "Sobre mim" com a história e grade de habilidades
│   │   ├── Contact.tsx      # Rodapé de contatos, redes sociais e botões de copiar
│   │   ├── CVModal.tsx      # Visualizador de PDF sobreposto à tela
│   │   ├── Experience.tsx   # Timeline de experiências profissionais
│   │   ├── Hero.tsx         # Banner principal com botão do CV modal
│   │   ├── Navbar.tsx       # Cabeçalho de navegação fixo com controle de tema
│   │   └── ...
│   ├── lib/
│   │   └── portfolio-data.ts # Arquivo central de dados (Experiências, Projetos, Skills, Links)
│   ├── App.tsx              # Componente principal unificador das seções
│   ├── main.tsx             # Arquivo de entrada da aplicação
│   └── styles.css           # Estilos globais e variáveis de tema (cores OKLCH)
├── vite.config.ts           # Configuração do Vite
└── tsconfig.json            # Configuração do TypeScript
```

---

## ⚙️ Como Executar Localmente

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 2. Instalação das dependências
Navegue até a pasta do projeto e execute:
```bash
npm install
```

### 3. Rodar servidor de desenvolvimento
Inicie a aplicação localmente com recarregamento rápido (Hot Reloading):
```bash
npm run dev
```
Abra a URL indicada no terminal (geralmente `http://localhost:5173`).

### 4. Build de produção
Para compilar e otimizar a aplicação para distribuição em produção:
```bash
npm run build
```

---

## ✍️ Como Customizar Seus Dados

Para atualizar o conteúdo do portfólio com suas próprias informações, você só precisa editar o arquivo [src/lib/portfolio-data.ts](file:///c:/Users/Thom/Desktop/Codigos/Portfolio/Portfolio/src/lib/portfolio-data.ts):

*   **Experiências**: Edite a lista `experiences` definindo cargo, empresa, período, descrição (com tópicos/bullet points separados por `\n`) e as tecnologias usadas no card.
*   **Projetos**: Altere o array `projects`. Adicione as imagens na pasta `public/` e referencie-as na variável de caminho. Insira os links `live` e `github` (deixe `live: ""` para projetos que apontarão apenas para o código-fonte).
*   **Habilidades**: Atualize o objeto `skills` para alterar as linguagens, bibliotecas e ferramentas listadas na seção de "Sobre".

---

Feito com dedicação por **Thom Gomes** 🚀
