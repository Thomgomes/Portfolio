import { useTranslations } from "next-intl";


export default function HomePage() {

  const t = useTranslations('');

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p>{t('home.greeting')}</p>
      <h1>{t('home.title')}</h1>
      <h2>{t('home.subtitle')}</h2>
      <p>{t('about.title')}</p>

    </div>
  );
}
