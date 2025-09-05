// LanguageSelector.js
import { useTranslation } from "react-i18next";
import i18n from "./index";

const LanguageSelector = () => {
  const { t } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleLanguageChange} value={i18n.language}>
      <option value="en">🇺🇸</option>
      <option value="fr">🇫🇷</option>
      <option value="ki">🇷🇼</option>
    </select>
  );
};

export default LanguageSelector;
