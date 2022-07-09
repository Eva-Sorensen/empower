import LocationComponent from "../Components/LocationComponent"
import style from "../css/Meetup.module.css";

export default function Meetup() {
  return <div className="container fade left">
      <h2>Meet up, Network and Make Friends</h2>
      <div className={style.content}>
        <div className={style.left}>
            <LocationComponent heading="Hackathon" date="09/07" color="#0070aa"
            description="Awesome event in the PWC building" />
            <LocationComponent heading="Networking" date="13/12" color="#009030"
            description="Build your network, meet cool people" />
            <LocationComponent heading="Catchup" date="28/02" color="#a00070"
            description="Girls get together - come have a talk in a safe place" />
            <LocationComponent heading="Meet'n'greet" date="10/07" color="#5500bb"
            description="town square on some long street name" />
            <LocationComponent heading="Coffee dates" date="13/12" color="#000"
            description="Come join at the coffee club for some catchups and meet new people :)" />
            <LocationComponent heading="GirlBoss" date="18/05" color="#b02020"
            description="Own your freedom, own your individuality, own you" />
        </div>
        <img alt="map" width="400px" height="400px" classname={style.img} src="https://media.istockphoto.com/vectors/map-with-pins-vector-id670449718?k=6&m=670449718&s=170667a&w=0&h=6jaTkVRvJranN6qsS18RxPIXNgIwcJ6vxLuBAtye6fo=" />
      </div>
    </div>
}
