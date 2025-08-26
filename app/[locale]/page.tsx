import { useTranslations } from "next-intl";


export default function HomePage() {

  const t = useTranslations('home');

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p>{t('greeting')}</p>
      <h1>{t('title')}</h1>
      <h2>{t('subtitle')}</h2>
      <p>{t('description')}</p>

    </div>
  );
}
