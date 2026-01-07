import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlickLogo from "../assets/Flick Logo.resize.png";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/" className="nav__logo">
          <img src={FlickLogo} className="nav__logo--img" alt="" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
              Search
            </a>
          </li>
          <a href="/contact" className="nav__contact">
            Contact
          </a>
        </ul>
        {/* <button>
          <FontAwesomeIcon icon="bars" />
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <a href="/search" className="menu__link">
            Home</a>
          </li>
          <li className="menu__list">
            <a href="/search" className="menu__link">
            Search</a>
          </li>
          <li className="menu__list">
            <a href="/search" className="menu__link">
            Contact</a>
          </li>
        </ul> */}

      </div>
    </nav>
  );
};

export default Nav;
