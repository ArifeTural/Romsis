import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import tEN from "./translation/en/translation.json";
import tTR from "./translation/tr/translation.json";

const resources = {
    en: {
        translation: tEN,
    },
    tr: {
        translation: tTR,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en", 
        debug: false,
        resources,
        interpolation: {
            escapeValue: false, 
        },
    });

export default i18n;
