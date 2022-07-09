import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul className="mainSection">
      <Link to="About" className="listLink">
        <li className="listItem">About</li>
      </Link>
      <Link to="" className="listLink">
        <li className="listItem">Home</li>
      </Link>
    </ul>
  );
}
