import { useTranslations } from "next-intl";

export default function Home() {
  const { t } = useTranslations("Home");

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p>teste</p>
      <p>{t('title')}</p>
    </div>
  );
}
