import { useLang } from "../../context/LangContext";
import { translations } from "./Translations";

const AutoTranslate = ({ children }) => {
  const { lang } = useLang();

  if (typeof children !== "string") return children;

  if (lang === "tr") return children;

  const translated = translations[lang]?.[children] || children;

  return translated;
};

export default AutoTranslate;
