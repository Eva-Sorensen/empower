import style from "../css/FoodResource.module.css";

export default function FoodResource() {
  console.log("Food Resource");
  return (
    <div className={style.background}>
      <h1 className={style.mainHeader}>FOOD NEAR YOU</h1>
      <input
        type="text"
        className={style.address}
        placeholder="enter your address"
        value="20 Auckand City, Auckland"
      ></input>
      <div className={style.mapSection}>
        <img src="map.png" alt="map" className={style.map} />
        <div className={style.foodSection}>
          <div className={style.food1}>
            <h2 className={style.foodTitle}>Community Food Bank</h2>
            <p className={style.foodLocation}>14 Auckland City, Auckland</p>
            <p className={style.foodAvailability}>Open: Everyday 9AM - 8PM</p>
          </div>
          <div className={style.food2}>
            <h2 className={style.foodTitle}>Food Drive</h2>
            <p className={style.foodLocation}>112 Auckland City, Auckland</p>
            <p className={style.foodAvailability}>Open: Monday 10AM - 12PM</p>
          </div>
          <div className={style.food3}>
            <h2 className={style.foodTitle}>Sunday Roast Dinner</h2>
            <p className={style.foodLocation}>9 Auckland City, Auckland</p>
            <p className={style.foodAvailability}>Open: message for time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
