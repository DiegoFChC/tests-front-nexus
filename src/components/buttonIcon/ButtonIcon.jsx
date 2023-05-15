import "./buttonIcon.scss";
import { useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { Context } from "../../context/Context";
import { useContext } from "react";

const ButtonIcon = ({ text, icon, link }) => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();
  const context = useContext(Context);

  return (
    <div
      className="ButtonIcon"
      
    >
      <p>{text}</p>
      <img src={icon} alt="icon" />
    </div>
  );
};

export default ButtonIcon;
