"use client";
import { useTranslations } from "next-intl";

import Header from "@/components/layout/header";
import { Line } from "@/components/line";
import ParticleBackground from "@/components/particle-background";
import {
  ArrowBigDownDash,
  Code,
  Database,
  Eye,
  Github,
  MonitorPlay,
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
import IntroAnimation from "@/components/intro-animation";

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

const servicesList = [
  { key: "service1", Icon: Code },
  { key: "service2", Icon: Eye },
  { key: "service3", Icon: Zap },
  { key: "service4", Icon: Database },
  { key: "service5", Icon: TrendingUp },
  { key: "service6", Icon: Wand2 },
  { key: "service7", Icon: ShieldCheck },
];

export default function HomePage() {
  const t = useTranslations("header");
  const th = useTranslations("home");
  const ta = useTranslations("about");
  const tp = useTranslations("projects");
  const ts = useTranslations("services");
  const tc = useTranslations("contact");
  const tf = useTranslations("footer");

  const aboutSectionRef = useRef<HTMLElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <IntroAnimation />
      <Header />
      <main>
        <section
          id={t("home")}
          className="relative w-full overflow-hidden bg-gradient-to-br from-background to-background-alt transition-colors duration-200"
        >
          <Line position="bottom" />

          <div className="container mx-auto px-4 h-screen flex flex-col md:flex-row items-center justify-center lg:justify-between">
            <div className="w-full">
              <div className="flex flex-col items-center">
                <h1 className="title-gradient mt-4 font-semibold text-3xl md:text-4xl lg:text-6xl r text-left sm:whitespace-nowrap">
                  {th("title")}
                </h1>
                <h3 className="mt-4 text-lg md:text-2xl font-semibold text-center text-foreground lg:text-xl">
                  {th("description")}
                </h3>
              </div>
              <div className="mt-10 flex justify-center gap-6">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 lg:py-6 font-semibold lg:text-lg"
                >
                  <a href="/thom-gomes-cv.pdf" download>
                    <ArrowBigDownDash className="" />
                    {th("cvbutton")}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="gap-2 lg:py-6 font-semibold lg:text-lg"
                >
                  <a href={`#${t("contact")}`}>{th("contactbutton")}</a>
                </Button>
              </div>
            </div>

            <div className="md:w-full">
              <Pray />
            </div>
          </div>
        </section>

        <section
          id={t("about")}
          ref={aboutSectionRef}
          className="relative py-20 lg:py-32"
        >
          <ParticleBackground parentRef={aboutSectionRef} />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative w-60 h-60 lg:w-72 lg:h-72">
                  <Image
                    src="/images/thom2.jpg"
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
        <section
          id={t("projects")}
          className="dotted-background py-20 lg:py-32"
        >
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
                  <div className="flex justify-between w-full">
                    <Button asChild variant="link" className="p-0 h-auto">
                      <a href="#">
                        {tp("github")} <Github />
                      </a>
                    </Button>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <a href="#">
                        {tp("monitor-play")} <MonitorPlay />
                      </a>
                    </Button>
                  </div>
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
                  <div className="flex justify-between w-full">
                    <Button asChild variant="link" className="p-0 h-auto">
                      <a href="#">
                        {tp("github")} <Github />
                      </a>
                    </Button>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <a href="#">
                        {tp("monitor-play")} <MonitorPlay />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section: Services (O que eu ofereço) */}
        <section
          id={t("services")}
          ref={servicesSectionRef}
          className="relative py-20 lg:py-32"
        >
          <ParticleBackground parentRef={servicesSectionRef} />
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              {ts("title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
              {servicesList.map(({ key, Icon }) => (
                <Card key={key}>
                  <CardHeader>
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>{ts(`${key}.title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {ts(`${key}.description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Contact */}
        <section id={t("contact")} className="dotted-background py-20 lg:py-32">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">{tc("title")}</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              {tc("subtitle")}
            </p>
            <Button asChild size="lg">
              <a href="mailto:contato@thomgomes.com">{tc("button")}</a>
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
