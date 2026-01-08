import { Link } from "react-router-dom";
import FlickLogo from "../assets/Flick Logo.resize.png";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/" className="nav__logo">
          <img src={FlickLogo} className="nav__logo--img" alt="" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/Movies" className="nav__link">
              Search
            </Link>
          </li>
          <span className="nav__contact" onClick={(event) => event.preventDefault()}>
            Contact
          </span>
        </ul>

      </div>
    </nav>
  );
};

export default Nav;
