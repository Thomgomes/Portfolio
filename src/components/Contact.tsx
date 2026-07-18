import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Copy, Check } from "lucide-react";
import { TopoLines } from "./TopoLines";

export function Contact() {
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <footer
      id="contato"
      className="relative overflow-hidden border-t border-border bg-muted/40 pt-8 pb-10"
    >
      <TopoLines />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Vamos conversar
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Thom Gomes
            </h2>
            <p className="mt-2 text-muted-foreground">
              Desenvolvedor Full Stack
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <a
                  href="mailto:math.011@hotmail.com"
                  className="flex items-center gap-3 text-foreground transition hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  math.011@hotmail.com
                </a>
                <button
                  onClick={() => handleCopy("math.011@hotmail.com", "email")}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-background/40 hover:bg-background text-muted-foreground hover:text-accent transition-all duration-200"
                  aria-label="Copiar email"
                  title="Copiar e-mail"
                >
                  {copiedType === "email" ? (
                    <Check className="h-3.5 w-3.5 text-accent" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=5581983547260&text=Ol%C3%A1%2C+Thom%21+Encontrei+seu+portf%C3%B3lio+e+gostaria+de+conversar+sobre+um+projeto%2C+uma+oportunidade+ou+uma+poss%C3%ADvel+parceria.+Quando+puder%2C+me+responda.+Obrigado%21&type=phone_number&app_absent=0"
                  target="_blank"
                  className="flex items-center gap-3 text-foreground transition hover:text-accent"
                >
                  <Phone className="h-4 w-4" />
                  +55 (81) 98354-7260
                </a>
                <button
                  onClick={() => handleCopy("+55 (81) 98354-7260", "phone")}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-background/40 hover:bg-background text-muted-foreground hover:text-accent transition-all duration-200"
                  aria-label="Copiar telefone"
                  title="Copiar telefone"
                >
                  {copiedType === "phone" ? (
                    <Check className="h-3.5 w-3.5 text-accent" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-sm text-muted-foreground max-w-sm md:ml-auto">
              Aberto a novas oportunidades, colaborações e projetos freelance.
              Responderei o mais rápido possível.
            </p>
            <div className="mt-6 flex md:justify-end gap-3">
              <a
                href="https://github.com/Thomgomes"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/thom-gomes/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:math.011@hotmail.com"
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Thom Gomes. Feito com calma e código.
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Disponível para novos projetos
          </p>
        </div>
      </div>
    </footer>
  );
}
