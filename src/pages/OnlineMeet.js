import { UserCircle } from "phosphor-react";
import style from "../css/OnlineMeet.module.css";

export default function OnlineMeet() {
  return (
    <div className={style.background + " fade left"}>
      <h1 className={style.mainHeader}>TALK TO US . . .</h1>
      <div className={style.section}>
        <button className={style.option}>
          <UserCircle size={100} color="#f26680" className={style.icon} />
          <div className={style.infos}>
            <h2 className={style.optionHeader}>General Advice</h2>
            <p className={style.info}>Sarah</p>
            <p className={style.info}>Available to talk any time</p>
          </div>
        </button>
        <button className={style.option}>
          <UserCircle size={100} color="#f26680" className={style.icon} />
          <div className={style.infos}>
            <h2 className={style.optionHeader}>Financial Advice</h2>
            <p className={style.info}>Jane</p>
            <p className={style.info}>I'll get back to you</p>
          </div>
        </button>
        <button className={style.option}>
          <UserCircle size={100} color="#f26680" className={style.icon} />
          <div className={style.infos}>
            <h2 className={style.optionHeader}>General Advice</h2>
            <p className={style.info}>Sue</p>
            <p className={style.info}>Available to talk Sundays</p>
          </div>
        </button>
      </div>
      <div className={style.section}>
        <button className={style.option}>
          <UserCircle size={100} color="#f26680" className={style.icon} />
          <div className={style.infos}>
            <h2 className={style.optionHeader}>Car Advice</h2>
            <p className={style.info}>Rose</p>
            <p className={style.info}>Available on weekends</p>
          </div>
        </button>
        <button className={style.option}>
          <UserCircle size={100} color="#f26680" className={style.icon} />
          <div className={style.infos}>
            <h2 className={style.optionHeader}>Just Vent</h2>
            <p className={style.info}>Mary</p>
            <p className={style.info}>Available to talk most times</p>
          </div>
        </button>
        <button className={style.option}>
          <UserCircle size={100} color="#f26680" className={style.icon} />
          <div className={style.infos}>
            <h2 className={style.optionHeader}>General Advice</h2>
            <p className={style.info}>Lue</p>
            <p className={style.info}>Just ask</p>
          </div>
        </button>
      </div>
    </div>
  );
}
