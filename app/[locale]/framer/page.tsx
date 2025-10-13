import BackgroundCircles from "@/components/gsap/bg-circle";
import HeroSection from "@/components/gsap/section/hero";

export default function Home() {
  return (
    <>
      <BackgroundCircles />
      
      <main className="relative min-h-[300vh] bg-black text-white z-10">
        {/* Hero Section */}
        <HeroSection/>

        {/* Seção de Projetos */}
        <section className="relative min-h-screen px-8 py-20 z-10">
          <h2 className="text-5xl font-bold mb-12">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-video bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Projeto {item}</h3>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span>● Design</span>
                    <span>△ Development</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção Sobre */}
        <section className="relative min-h-screen flex items-center justify-center px-8 z-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-bold mb-8">Sobre Mim</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Desenvolvedor criativo focado em criar experiências digitais únicas
              que combinam design elegante com código limpo.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
