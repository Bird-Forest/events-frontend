import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import lngEN from './translation/en.json';
import lngUA from './translation/uk.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: true,
    resources: {
      en: { translation: lngEN },
      uk: { translation: lngUA },
    },

    languages: ['en', 'uk'],
    fallbackLng: ['uk'],

    // interpolation: {
    //   escapeValue: false, // react already safes from xss
    // },
  });

// .use(Backend)
// .use(LanguageDetector)
// .use(initReactI18next)
// .init({
//   debug: true,
//   // languages: ['en', 'uk', 'ru', 'de'],
//   fallbackLng: 'en',
//   returnEmptyString: false,
//   // interpolation: {
//   //   escapeValue: false, // not needed for react as it escapes by default
//   // },

//   react: {
//     useSuspense: false,
//   },
// });

export default i18n;
