
import Highlight from "./ui/Highlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Highlights() {
  return (
    <section id="highlights">
        <div className="container">
            <div className="row">
             <h2 className="section__title">
                Welcome to Flicktionary!</h2>   
            </div>
            <div className="highlight__wrapper">
                <div className="highlight">
                    <div className="highlight__img">
                        <FontAwesomeIcon icon=""/>
                    </div>
                    <h3 className="highlight__subtitle">
                       Instant Search Results 
                    </h3>
                    <p className="highlight__para">Enter Text Here</p>
                </div>
                <div className="highlight">
                    <div className="highlight__img">
                        <FontAwesomeIcon icon=""/>
                    </div>
                    <h3 className="highlight__subtitle">
                       Search by title or year
                    </h3>
                    <p className="highlight__para">Enter Text Here</p>
                </div>
                <div className="highlight">
                    <div className="highlight__img">
                        <FontAwesomeIcon icon=""/>
                    </div>
                    <h3 className="highlight__subtitle">
                       Explore trending movies
                    </h3>
                    <p className="highlight__para">Enter Text Here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights;