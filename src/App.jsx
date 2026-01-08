import './App.jsx'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Nav from "./components/Nav.jsx";
import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import Movie from './pages/Movie.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movie/:id" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
