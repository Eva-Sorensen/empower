import { useNavigate } from "react-router-dom";
import { FilePlus, Cards } from "phosphor-react";
import style from "../css/Offers.module.css";

export default function Offers() {
  const navigate = useNavigate();
  const selectNewOffer = () => {
    navigate("/newoffer", { replace: true });
  };
  const selectYourOffers = () => {
    navigate("/youroffer", { replace: true });
  };
  return (
    <div className={style.background + " fade left"}>
      <h1 className={style.mainHeader}>OFFER RESOURCES OR ADVICE . . .</h1>
      <div className={style.section}>
        <button onClick={selectNewOffer} className={style.option}>
          <FilePlus size={100} color="#f26680" className={style.icon} />
          <h2 className={style.optionHeader}>Create a New Offer</h2>
        </button>
        <button onClick={selectYourOffers} className={style.option}>
          <Cards size={100} color="#f26680" className={style.icon} />
          <h2 className={style.optionHeader}>View Your Offers</h2>
        </button>
      </div>
    </div>
  );
}
