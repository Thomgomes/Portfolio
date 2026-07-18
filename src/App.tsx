import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { About } from "./components/Abouts";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/25">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
