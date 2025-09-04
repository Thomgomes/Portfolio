import { useTranslations } from "next-intl";
import { ThemeToggleButton } from "../theme-toggle-button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("header");
  const navLinks = ["home", "about", "projects", "services", "contact"];

  return (
    <header className="z-10 w-full fixed top-0 border-b border-[#3333] backdrop-blur-sm bg-background/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="https://github.com/Thomgomes" target="_blank" className="text-3xl font-bold">
        <Image src="/gifs/thomty.gif" alt="" width={60} height={60}/>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4 lg:space-x-6 text-primary">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${t(link)}`}
                  className="text-sm font-semibold hover:underline underline-offset-4"
                >
                  {t(link)}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggleButton />
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 w-9"
                type="button"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <SheetTitle className="text-left text-2xl font-bold">
                  Logo
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4 mt-4">
                {/* Links de navegação para mobile */}
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href={`#${t(link)}`}
                      className="text-lg font-medium hover:underline"
                    >
                      {t(link)}
                    </a>
                  ))}
                </nav>
                <div className="absolute bottom-4">
                  <ThemeToggleButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
