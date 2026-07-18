import React, { useEffect } from "react";
import { X, Download } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 dark:bg-background/80 backdrop-blur-lg p-6 sm:p-10 animate-fade-in"
    >
      {/* Container do Iframe do PDF (com relative para posicionar o fechar no limite da largura) */}
      <div className="relative w-full max-w-4xl h-[78vh] mt-12 flex flex-col items-center gap-5">
        {/* Botão de Fechar no Canto Superior Direito do limite do currículo */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-[110] inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-110 shadow-lg shadow-accent/25 transition-all duration-200 cursor-pointer"
          aria-label="Fechar currículo"
          title="Fechar (Esc)"
        >
          <X className="h-5 w-5" />
        </button>

        <iframe
          src="/CV_Thomás_Gomes.pdf"
          className="w-full h-full rounded-2xl border border-border bg-card shadow-2xl"
          title="Currículo de Thomás Gomes"
        />

        {/* Botão para Baixar Currículo */}
        <a
          href="/CV_Thomás_Gomes.pdf"
          download="CV_Thomás_Gomes.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          <Download className="h-4 w-4" />
          Baixar Currículo (PDF)
        </a>
      </div>
    </div>
  );
}
