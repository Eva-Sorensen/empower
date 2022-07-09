import { useNavigate } from "react-router-dom";
import {
  CookingPot,
  CarSimple,
  HouseLine,
  Briefcase,
  Wallet,
  DotsThreeOutline,
} from "phosphor-react";
import style from "../css/AvailableResources.module.css";

export default function AvailableResources() {
  const navigate = useNavigate();
  const selectFood = () => {
    navigate("/food", { replace: true });
  };
  return (
    <div className={style.background}>
      <h1 className={style.mainHeader}>WHAT DO YOU NEED . . .</h1>
      <div className={style.section}>
        <button onClick={selectFood} className={style.option}>
          <CookingPot size={120} color="#f26680" className={style.icon} />
          <h2 className={style.optionHeader}>Food</h2>
        </button>
        <button className={style.option}>
          <CarSimple size={120} color="#f26680" className={style.icon} />
          <h2 className={style.optionHeader}>Transport</h2>
        </button>
        <button className={style.option}>
          <HouseLine size={120} color="#f26680" className={style.icon} />
          <h2 className={style.optionHeader}>Housing</h2>
        </button>
      </div>
      <div className={style.section}>
        <button className={style.option}>
          <Briefcase size={120} color="#f26680" className={style.icon} />
          <h2 className={style.optionHeader}>Job</h2>
        </button>
        <button className={style.option}>
          <Wallet size={120} color="#f26680" className={style.icon} />
          <h2 className={style.optionHeader}>Financial</h2>
        </button>
        <button className={style.option}>
          <DotsThreeOutline size={120} color="#f26680" className={style.icon} />
          <h2 className={style.optionHeader}>Other</h2>
        </button>
      </div>
    </div>
  );
}
