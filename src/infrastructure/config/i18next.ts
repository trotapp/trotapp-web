import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const languages = ['es', 'en'];
import Backend from 'i18next-http-backend';

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // lng: 'es', // Utiliza el idioma del sistema
    fallbackLng: ['es'], // Idioma de respaldo en caso de que no se pueda detectar el idioma del sistema
    supportedLngs: languages,
    // TODO: Borrar al subir a producción
    // debug: true,
    detection: {
      order: ['localStorage', 'querystring', 'navigator', 'path'],
      lookupFromPathIndex: -1,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      formatSeparator: '.',
    },
    backend: {
      loadPath: (lng: string, ns: string) => {
        if (ns === 'components') {
          return `/locales/${lng}/components/${ns}.json`;
        }
        return `/locales/${lng}/${ns}.json`;
      },
    },
    ns: ['zod', 'message', 'components'],
    defaultNS: 'common',
  });

export default i18n;
