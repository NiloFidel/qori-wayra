import { translations, defaultLocale, locales, Locale } from "../lib/i18n";

export default function HomePage({ params }: { params: { locale: string } }) {
  // Validar si el locale recibido está en la lista de locales permitidos
  const locale: Locale = locales.includes(params.locale as Locale) ? (params.locale as Locale) : defaultLocale;
  
  const t = translations[locale];

  return <h1>{t.welcome}</h1>;
}
