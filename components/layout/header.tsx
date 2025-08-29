import { useTranslations } from "next-intl";
import { ThemeToggleButton } from "../theme-toggle-button";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="container mx-auto flex justify-between items-center p-4 text-center">
      <h1 className="text-3xl font-bold">Logo</h1>
      <nav>
        <ul className="flex items-center space-x-6 text-white">
          <li>
            <a href={`#${t('home')}`} className="hover:underline">
              {t("home")}
            </a>
          </li>
          <li>
            <a href={`#${t('about')}`} className="hover:underline">
              {t("about")}
            </a>
          </li>
          <li>
            <a href={`#${t('projects')}`} className="hover:underline">
              {t("projects")}
            </a>
          </li>
          <li>
            <a href={`#${t('services')}`} className="hover:underline">
              {t("services")}
            </a>
          </li>
          <li>
            <a href={`#${t('contact')}`} className="hover:underline">
              {t("contact")}
            </a>
          </li>
          <li>
            <ThemeToggleButton/>
          </li>
        </ul>
      </nav>
    </header>
  );
}
