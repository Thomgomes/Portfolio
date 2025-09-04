'use client';
import { useTranslations } from "next-intl";

import Header from "@/components/layout/header";
import { Line } from "@/components/line";
import ProjectShowcase from "@/components/project-showcase";
import ParticleBackground from "@/components/particle-background";
import {
  ArrowBigDownDash,
  Code,
  Database,
  Eye,
  ShieldCheck,
  TrendingUp,
  Wand2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef } from "react";
import Pray from "@/components/pray";

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
  "Figma",
];

export default function HomePage() {
  const th = useTranslations("home");
  const ta = useTranslations("about");
  const tp = useTranslations("projects");
  const tc = useTranslations("contact");
  const tf = useTranslations("footer");

  const aboutSectionRef = useRef<HTMLElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <Header />
      <main>
        <section className="relative w-full min-h-8/12 overflow-hidden bg-gradient-to-br from-background to-background-alt transition-colors duration-200">
          <Line position="bottom" />

          <section className="container mx-auto px-4 h-screen flex items-center justify-between">
            {/* Lado Esquerdo */}
            <div className="z-10 w-full">
              <h1 className="title-gradient mt-4 font-semibold text-4xl lg:text-6xl">
                {th("title")}
              </h1>
              <p className="mt-4 text-lg text-foreground lg:text-xl">
                {th("subtitle")}
              </p>
              <div className="mt-10 flex flex-col gap-4 lg:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <a href="/thom-gomes-cv.pdf" download>
                    <ArrowBigDownDash />
                    {th("cvbutton")}
                  </a>
                </Button>
              </div>
            </div>

            {/* Lado Direito */}
            {/* <div className="w-full">
              <ProjectShowcase route="paradigm.com/apparel" />
            </div> */}
            <div className="w-full">
              <Pray />
            </div>
          </section>
        </section>

        <section id="about" ref={aboutSectionRef} className="relative py-20 lg:py-32">
          <ParticleBackground parentRef={aboutSectionRef}/>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative w-60 h-60 lg:w-72 lg:h-72">
                  <Image
                    src="/images/thom2.jpg" // Lembre-se de colocar sua foto em /public/profile.png
                    alt="Foto de Thom Gomes"
                    width={288}
                    height={288}
                    className="rounded-full object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full ring-4 ring-primary/30 ring-offset-4 ring-offset-background"></div>
                </div>
              </div>
              <div className="lg:col-span-2 text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4">{ta("title")}</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                  {ta("description")}
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {/* Refatorado com <Badge> */}
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="dotted-background py-20 lg:py-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-4">
              {tp("title")}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {tp("description")}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Refatorado com <Card> */}
              <Card className="overflow-hidden">
                <Image
                  src="https://placehold.co/600x400/dd5a25/FFFFFF?text=Projeto+A"
                  alt="Prévia do Projeto A"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <CardHeader>
                  <CardTitle>{tp("project1.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {tp("project1.description")}
                  </CardDescription>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <a href="#">Ver detalhes &rarr;</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Refatorado com <Card> */}
              <Card className="overflow-hidden">
                <Image
                  src="https://placehold.co/600x400/e8815b/FFFFFF?text=Projeto+B"
                  alt="Prévia do Projeto B"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <CardHeader>
                  <CardTitle>{tp("project2.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {tp("project2.description")}
                  </CardDescription>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <a href="#">Ver detalhes &rarr;</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section: Services (O que eu ofereço) */}
        <section id="services" ref={servicesSectionRef} className="relative py-20 lg:py-32">
          <ParticleBackground parentRef={servicesSectionRef}/>
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              O que eu ofereço
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {/* Refatorado com <Card> */}
              <Card>
                <CardHeader>
                  <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Desenvolvimento Web</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Criação de sites e aplicações web completas, do zero à
                    implantação.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Eye className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>UI/UX Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Interfaces focadas na experiência do usuário, criando
                    layouts intuitivos e atraentes.{" "}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Otimização & Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Análise e melhoria para garantir que seu site seja rápido e
                    eficiente.{" "}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Database className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Integração com APIs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Conexão com APIs RESTful/GraphQL e bancos de dados para
                    criar experiências ricas e dinâmicas.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>SEO Técnico</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Otimização de Core Web Vitals e HTML semântico para melhorar
                    o ranking do seu site no Google.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Wand2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Animações e Microinterações</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Criação de interfaces envolventes com animações fluidas que
                    melhoram a experiência do usuário.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Manutenção e Suporte</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Garanta que seu site continue seguro, atualizado e
                    performático com suporte contínuo e correção de bugs.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="dotted-background py-20 lg:py-32">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">{tc("title")}</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              {tc("subtitle")}
            </p>
            <Button asChild size="lg">
              <a href="mailto:contato@thomgomes.com">Entrar em Contato</a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Thom Gomes. {tf("text")}
          </p>
        </div>
      </footer>
    </>
  );
}
