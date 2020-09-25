import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en.json';
import translationCZ from './cz.json';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: false,

        resources: {
            en: {
                translation: translationEN
            },
            cz: {
                translation: translationCZ
            },
        },

        react: {
            wait: true,
        },
    });

export default i18n;