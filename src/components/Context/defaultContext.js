import LOCALES from "../../i118n/constants";
const LANGUAGE = JSON.parse(localStorage.getItem("locale"));

const defaultLocale = {
  locale: LANGUAGE ? LANGUAGE : LOCALES.ENGLISH,
};

export default defaultLocale;
