import { Link } from "react-router-dom";
import style from "../css/NavBar.module.css";

export default function NavBar() {
  // var pathname = window.location.pathname
  var pathname = "/"
  return (
    <nav className={style.slide_in}>
      <div
        className={style.navbar_container}
      >
        <ul>
          <Link to="" className={style.nav_link}>
            <li className={`${pathname === "/" ? style.active : ""}`}>
              Empower
            </li>
          </Link>
          <Link to="about" className={style.nav_link}>
            <li className={`${pathname === "/about" ? style.active : ""}`}>
              About
            </li>
          </Link>
          <Link to="meetups" className={style.nav_link}>
            <li className={`${pathname === "/meetups" ? style.active : ""}`}>
              Meet ups
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
