import { NavLink } from "react-router-dom";
import style from "../css/NavBar.module.css";

export default function NavBar() {
  // var pathname = window.location.pathname
  var pathname = "/fzdg"
  return (
    <nav className={style.slide_in}>
      <div
        className={style.navbar_container}
      >
        <ul>
          <NavLink to="" className={`${style.nav_link} ${({isActive})=>isActive ? style.active : ""}`}>
            <li className={`${pathname === "/" ? style.active : ""}`}>
              Empower
            </li>
          </NavLink>
          <NavLink to="about" className={style.nav_link}>
            <li className={`${pathname === "/about" ? style.active : ""}`}>
              About
            </li>
          </NavLink>
          <NavLink to="meetups" className={style.nav_link}>
            <li className={`${pathname === "/meetups" ? style.active : ""}`}>
              Meet ups
            </li>
          </NavLink>
          <NavLink to="availableResources" className={style.nav_link}>
            <li className={`${pathname === "/availableResources" ? style.active : ""}`}>
              Resources
            </li>
          </NavLink>
          <NavLink to="onlineMeet" className={style.nav_link}>
            <li className={`${pathname === "/onlineMeet" ? style.active : ""}`}>
              Talk
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
