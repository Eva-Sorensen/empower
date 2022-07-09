import { useNavigate } from "react-router-dom";
import style from "../css/NewOffer.module.css";

export default function NewOffer() {
  const navigate = useNavigate();
  const submitClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={style.background + " fade left"}>
      <div className={style.mainSection}>
        <div className={style.formContainer}>
          <h1 className={style.mainHeader}>New Offer</h1>
          <form className={style.form}>
            <h2 className={style.subHeader}> Your Details</h2>
            <input
              type="text"
              className={style.input}
              placeholder="Name"
            ></input>
            <input
              type="text"
              className={style.input}
              placeholder="Contact Email"
            ></input>
            <input
              type="text"
              className={style.input}
              placeholder="Location (optional)"
            ></input>
            <h2 className={style.subHeader}> Your Offer</h2>
            <div className={style.radiobox}>
              <div className={style.radio}>
                <input
                  type="checkbox"
                  id="advice"
                  name="advice"
                  value="advice"
                />
                <label for="advice">Advice and an open ear</label>
              </div>
              <div className={style.radio}>
                <input type="checkbox" id="food" name="food" value="advice" />
                <label for="food">Food</label>
              </div>
              <div className={style.radio}>
                <input
                  type="checkbox"
                  id="transport"
                  name="transport"
                  value="advice"
                />
                <label for="transport">Transport</label>
              </div>
              <div className={style.radio}>
                <input
                  type="checkbox"
                  id="housing"
                  name="housing"
                  value="advice"
                />
                <label for="housing">Housing</label>
              </div>
            </div>
          </form>
          <button
            type="button"
            className={style.listLink}
            onClick={submitClick}
          >
            Offer Help
          </button>
        </div>
      </div>
    </div>
  );
}
