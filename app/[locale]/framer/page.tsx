import BackgroundCircles from "@/components/gsap/bg-circle";
import AboutSection from "@/components/gsap/section/about";
import Footer from "@/components/gsap/section/footer";
import HeroSection from "@/components/gsap/section/hero";
import ProjectsSection from "@/components/gsap/section/projects";
import WorkTimeline from "@/components/gsap/section/work";

export default function Home() {
  return (
    <>
      <BackgroundCircles />
      
      <main className="relative bg-background text-foreground overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection/>

        <WorkTimeline/>
        {/* Seção de Projetos */}
        <ProjectsSection/>

        {/* Seção Sobre */}
        <AboutSection/>
        <Footer/>
      </main>
    </>
  );
}
