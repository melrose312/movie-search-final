import UndrawImg from "../assets/undraw_home-cinema_jdm1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Landing() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/Movies?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="container">
      <section id="landing">
        <header>
          <div className="header__container">
            <div className="header__description">
              <h2> Search A Movie Title</h2>
              <div className="search__wrapper">
                <input
                  type="text"
                  className="search__input"
                  placeholder="Search by Title or Keyword..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  onKeyDown={(event) => event.key === "Enter" && handleSearch()}
                />
                <button className="search__btn" onClick={handleSearch}>
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </button>
              </div>

            </div>
            <figure className="header__img--wrapper">
              <img src={UndrawImg} alt="" />
            </figure>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Landing;
