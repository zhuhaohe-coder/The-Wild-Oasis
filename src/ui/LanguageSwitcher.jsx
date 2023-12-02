import { GrLanguage } from "react-icons/gr";
import ButtonIcon from "./ButtonIcon";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <ButtonIcon
      onClick={() =>
        i18n.changeLanguage(
          localStorage.getItem("i18nextLng") === "en" ? "zh" : "en"
        )
      }
    >
      <GrLanguage />
    </ButtonIcon>
  );
}

export default LanguageSwitcher;
