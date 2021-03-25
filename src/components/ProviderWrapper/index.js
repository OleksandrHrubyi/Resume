import { I18nProvider } from "../../i118n";
import { useContext } from "react";
import { AppContext } from "../Context";
import LOCALES from "../../i118n/constants";

const ProviderWrapper = ({ children }) => {
  useContext(AppContext);
  const language = JSON.parse(localStorage.getItem("locale"));
  return (
    <I18nProvider locale={language ? language : LOCALES.ENGLISH}>
      {children}
    </I18nProvider>
  );
};

export default ProviderWrapper;
