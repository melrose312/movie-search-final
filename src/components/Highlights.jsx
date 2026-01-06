
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
                
                    <Highlight
                    icon={<FontAwesomeIcon icon="fa-solid fa-bolt"/>}
                    title='Instant Search Results'
                    para='Hundreds of Titles and Genres'
                     />
                    <Highlight
                    icon={<FontAwesomeIcon icon="fa-solid fa-film"/>}
                    title='Search By Title or Year'
                    para='Movies and Series, Old and New'
                     />
                    <Highlight
                    icon={ <FontAwesomeIcon icon="fa-solid fa-video"/>}
                    title='Explore Trending Movies'
                    para='Discover the latest releases and trending titles'
                     />
            </div>
        </div>
    </section>
  )
}

export default Highlights;