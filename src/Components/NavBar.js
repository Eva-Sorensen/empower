import { NavLink } from "react-router-dom";
import { UserCircle } from "phosphor-react";
import style from "../css/NavBar.module.css";

export default function NavBar() {
  // var pathname = window.location.pathname
  var pathname = "/fzdg";
  return (
    <nav className={style.slide_in}>
      <div className={style.navbar_container}>
        <ul>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            <li className={`${pathname === "/" ? style.active : ""}`}>
              Empower
            </li>
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            <li className={`${pathname === "/about" ? style.active : ""}`}>
              About
            </li>
          </NavLink>
          <NavLink
            to="meetup"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            <li className={`${pathname === "/meetups" ? style.active : ""}`}>
              Meet ups
            </li>
          </NavLink>
          <NavLink
            to="availableResources"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            <li
              className={`${
                pathname === "/availableResources" ? style.active : ""
              }`}
            >
              Resources
            </li>
          </NavLink>
          <NavLink
            to="onlineMeet"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            <li className={`${pathname === "/onlineMeet" ? style.active : ""}`}>
              Talk
            </li>
          </NavLink>
        </ul>

        <ul>
          <NavLink
            to="offers"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            <li className={`${pathname === "/offers" ? style.active : ""}`}>
              <UserCircle size={32} color="black" className={style.icon} />
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
