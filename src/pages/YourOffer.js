import style from "../css/YourOffer.module.css";

export default function YourOffer() {
  return (
    <div className={style.background + " container fade left"}>
      <h1 className={style.mainHeader}>YOUR OFFERS</h1>
      <div className={style.offersSection}>
        <div className={style.offer}>
          <h2 className={style.offerHeader}>Transport</h2>
          <p className={style.info}>Name: Jane Doe</p>
          <p className={style.info}>Email: janedoe4@gmail.com</p>
          <p className={style.info}>Location: 20 Auckand City, Auckland</p>
          <p className={style.openDate}>Open Since: 20/02/2022</p>
          <div className={style.buttons}>
            <button className={style.edit}>edit</button>
            <button className={style.close}>close offer</button>
          </div>
        </div>
        <div className={style.offer}>
          <h2 className={style.offerHeader}>Advice</h2>
          <p className={style.info}>Name: Jane Doe</p>
          <p className={style.info}>Email: janedoe4@gmail.com</p>
          <p className={style.info}>Location: n/a</p>
          <p className={style.openDate}>Open Since: 10/07/2022</p>
          <div className={style.buttons}>
            <button className={style.edit}>edit</button>
            <button className={style.close}>close offer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
