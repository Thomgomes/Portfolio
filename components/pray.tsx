import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Pray() {
  return (
    <div className="scale-[0.7] lg:scale-[0.85]">
      <Card className="w-full max-w-2xl shadow-lg p-0 gap-0">
        <CardHeader className="flex flex-row items-center gap-2 bg-muted/50 px-4 py-4">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm text-muted-foreground">dialog/pray.ts</p>
        </CardHeader>

        <CardContent className="p-4 bg-background-alt">
          <pre className="overflow-x-auto text-sm">
            <code>
              <span className="text-primary-light">const</span>{" "}
              <span className="text-foreground">holyPrayer</span>{" "}
              <span className="text-primary-light">=</span>{" "}
              <span className="text-pray">`</span>
              <br />
              {"  "}
              <span className="text-pray">Código nosso que estás em C,</span>
              <br />
              {"  "}
              <span className="text-pray">Santificado seja vós, Console.</span>
              <br />
              {"  "}
              <span className="text-pray">Venha a nós o vosso array,</span>
              <br />
              {"  "}
              <span className="text-pray">E seja feita, sim, </span>
              <span className="text-primary/90">{"{"}</span>
              <span className="text-foreground">vossa chave</span>
              <span className="text-primary/90">{"}"}</span>
              <span className="text-pray">.</span>
              <br />
              {"  "}
              <span className="text-pray">Assim no </span>
              <span className="text-primary-light">if</span>
              <span className="text-pray">{"{"}</span>
              <span className="text-pray">{"}"}</span>
              <span className="text-pray"> como no </span>
              <span className="text-primary-light">else</span>
              <span className="text-pray">{"{"}</span>
              <span className="text-pray">{"}"}</span>
              <span className="text-pray">,</span>
              <br />
              {"  "}
              <span className="text-pray">O </span>
              <span className="text-primary-light">for</span>
              <span className="text-pray">
                (nosso; de cada dia; nos dai hoje++).
              </span>
              <br />
              {"  "}
              <span className="text-pray">Debugai as nossas sentenças,</span>
              <br />
              {"  "}
              <span className="text-pray">
                Assim como nós colocamos o ponto e vírgula esquecido;
              </span>
              <br />
              {"  "}
              <span className="text-pray">
                E não nos deixeis errar a indentação.
              </span>
              <br />
              {"  "}
              <span className="text-pray">
                Mas livrai-nos das funções recursivas,
              </span>
              <br />
              {"  "}
              <span className="text-foreground">A main</span>
              <span className="text-muted-foreground">()</span>
              <span className="text-pray">.</span>
              <br />
              <span className="text-pray">`</span>
              <span className="text-muted-foreground">;</span>
              <br />
              <br />
              <span className="text-primary-light">export default</span>{" "}
              <span className="text-foreground">holyPrayer</span>
              <span className="text-muted-foreground">;</span>
            </code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
