import NavBar from "../Components/NavBar.js";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex-container">
      <NavBar />
      <Outlet />
    </div>
  );
}
