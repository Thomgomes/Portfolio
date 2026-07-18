import { motion } from "framer-motion";
import { skills } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { TopoLines } from "./TopoLines";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 sm:py-32">
      <TopoLines />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Um pouco da minha história"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Olá, me chamo{" "}
              <span className="font-semibold text-foreground">
                Thomás D'Angelo de Almeida Gomes
              </span>
              , mas pode me chamar de{" "}
              <span className="font-semibold text-foreground"> Thom</span>. Sou
              desenvolvedor Full Stack. Sou uma pessoa curiosa,
              dedicada e sempre em busca de aprender algo novo.
            </p>
            <p>
              Desde cedo sempre tive interesse em jogos. Jogar era meu passatempo
              favorito com meu irmão mais velho, porém, além de só jogar, eu
              tinha muita curiosidade em como os jogos funcionavam e se a gente
              podia criar jogos algum dia. Com esse interesse, comecei a mexer
              com RPG Maker, o que me fez ter uma base de como as peças se
              encaixam.
            </p>
            <p>
              Então, a partir daí, sempre que me perguntavam o que eu queria ser
              quando crescesse, eu respondia "quero trabalhar com tecnologia".
            </p>
            <p>
              Durante a quarentena, eu iniciei um curso técnico em análise e
              desenvolvimento de sistemas, no qual tive contato com diversas
              linguagens de programação e tecnologias. Foi nesse período que
              decidi me aprofundar no desenvolvimento front-end. Sempre que tinha
              um projeto acadêmico, eu ficava responsável pelo design e
              programação.
            </p>
            <p>
              Durante meu curso técnico, comecei a pegar pequenos projetos
              na área, o que para mim foi ótimo. Enquanto eu estudava, eu
              conseguia trabalhar e ver como diversas outras coisas funcionavam
              dentro de um projeto.
            </p>
            <p>
              No início de 2024, comecei minha graduação em ADS na Uninassau,
              E agora estou cursando 2 pós-graduações na área.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="glass-card rounded-2xl p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-xl border border-border bg-background/60 px-3.5 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_6px_20px_-8px_oklch(0.71_0.17_24/0.4)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
