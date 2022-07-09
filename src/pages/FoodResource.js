import LocationComponent from "../Components/LocationComponent";
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
          <LocationComponent
            heading="Community Food Bank"
            date="Everyday 9am-8pm"
            color="#20639b"
            description="Avaliable at 14 Auckland City, Auckland"
          />
          <LocationComponent
            heading="Food Drive"
            date="Monday 10am - 12pm"
            color="#f6d55c"
            description="Avaliable at 112 Auckland City, Auckland"
          />
          <LocationComponent
            heading="Sunday Roast Dinner"
            date="message for time"
            color="#ed553b"
            description="Avaliable at 9 Auckland City, Auckland"
          />
        </div>
      </div>
    </div>
  );
}
