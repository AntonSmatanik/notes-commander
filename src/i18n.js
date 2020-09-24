import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from './config/en.json';
import translationCZ from './config/cz.json';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'en',
        debug: false,

        resources: {
            en: {
                translation: translationEN
            },
            cz: {
                translation: translationCZ
            },
        },

        interpolation: {
            escapeValue: false,
        },

        react: {
            wait: true,
        },
    });

export default i18n;