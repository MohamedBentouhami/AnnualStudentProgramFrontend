import i18n from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n.use(I18NextHttpBackend)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        backend: {
            loadPath: 'http://localhost:5173/lang/{{lng}}.json'
        }
    });

export default i18n;