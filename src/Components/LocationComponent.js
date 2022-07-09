import style from "../css/LocationComponent.module.css";

export default function LocationComponent(props) {
    return (
      <div className={style.location_component}>
        <svg className={style.icon} width="50px" fill={props.color || "#000"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 5a21 21 0 0 0-21 21c0 17 21 33 21 33s21-16 21-33A21 21 0 0 0 32 5zm0 31a10 10 0 1 1 10-10 10 10 0 0 1-10 10z"/></svg>
        <p className={style.date}>{props.date}</p>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
      </div>
    );
  }
  