/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useTranslations } from "next-intl";
import { ThemeToggleButton } from "../theme-toggle-button";
import { Home, FolderOpen, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Nav() {
  const t = useTranslations("nav");
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { key: "home", icon: Home },
    { key: "projects", icon: FolderOpen },
    { key: "about", icon: User },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(t(link.key)));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].key);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="z-50 w-full fixed top-0 border-b border-border/40 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a
            href="https://github.com/Thomgomes"
            target="_blank"
            className="text-3xl font-bold"
          >
            <Image
              src="/gifs/thomty.gif"
              alt="Thom Logo"
              width={60}
              height={60}
            />
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4 lg:space-x-6 text-primary">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={`#${t(link.key)}`}
                    className={cn(
                      "text- font-semibold hover:underline underline-offset-4 transition-colors",
                     activeSection === link.key
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                    )}
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
              <li>
                <ThemeToggleButton />
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <ThemeToggleButton />
          </div>
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 backdrop-blur-sm bg-background/95 md:hidden">
        <ul className="flex items-center justify-around h-16 px-4">
          {navLinks.map((link) => (
            <li key={link.key} className="flex-1">
              <a
                href={`#${t(link.key)}`}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-all duration-200",
                  "hover:bg-muted",
                  activeSection === link.key
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                )}
              >
                <link.icon className="h-5 w-5 flex-shrink-0" />
                <span className="text-xs font-medium">{t(link.key)}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
