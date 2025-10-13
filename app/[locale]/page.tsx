import Footer from "@/components/layout/footer";
import Header from "@/components/layout/nav";
import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import WorkTimeline from "@/components/sections/work";


export default function Home() {
  return (
    <>
      
      <main className="relative bg-background text-foreground overflow-x-hidden">
        <Header/>
        <HeroSection/>
        <WorkTimeline/>
        <ProjectsSection/>
        <AboutSection/>
        <Footer/>
      </main>
    </>
  );
}
