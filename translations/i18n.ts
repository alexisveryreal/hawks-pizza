import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en";
import es from "./es";
import fr from "./fr";

export const LANGUAGES = {
  en,
  es,
  fr,
};

export const LANGUAGE_CODES = Object.keys(LANGUAGES);

i18n.use(initReactI18next).init({
  resources: LANGUAGES,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
});
