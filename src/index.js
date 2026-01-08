
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faBars, faBolt, faMagnifyingGlass, faFilm, faVideo, faArrowLeft, faStar, faStarHalfStroke  } from '@fortawesome/free-solid-svg-icons';

library.add ( faBars, faBolt, faMagnifyingGlass, faFilm, faVideo, faArrowLeft, faStar, faStarHalfStroke )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
