import { useNavigate } from "react-router-dom";
import { Cards, Broadcast, MapPinLine } from "phosphor-react";
import style from "../css/WhereTo.module.css";

export default function WhereTo() {
  const navigate = useNavigate();
  const selectResources = () => {
    navigate("/", { replace: true });
  };
  const selectOnlineConnection = () => {
    navigate("/", { replace: true });
  };
  const selectMeetUp = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={style.background}>
      <h1 className={style.mainHeader}>WHAT ARE YOU LOOKING FOR . . .</h1>
      <div className={style.section}>
        <button onClick={selectResources} className={style.option}>
          <Cards size={120} color="#f26680" className={style.icon} />
          <h2 className={style.optionHeader}>Resources</h2>
        </button>
        <button onClick={selectOnlineConnection} className={style.option}>
          <Broadcast size={120} color="#f26680" className={style.icon} />
          <h2 className={style.optionHeader}>Connect Online</h2>
        </button>
        <button onClick={selectMeetUp} className={style.option}>
          <MapPinLine size={120} color="#f26680" className={style.icon} />
          <h2 className={style.optionHeader}>Attend a Meet Up</h2>
        </button>
      </div>
    </div>
  );
}
