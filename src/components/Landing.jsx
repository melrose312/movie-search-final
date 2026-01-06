import UndrawImg from "../assets/undraw_home-cinema_jdm1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h2> Search a Movie Title</h2>
            <div className="search__wrapper">
              <input 
                type="text" 
                className="search__input" 
                placeholder="Search by Title or Keyword..." 
              />
              <button className="search__btn"> Search
                <FontAwesomeIcon icon=""/>
              </button>
            </div>
            
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawImg} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
