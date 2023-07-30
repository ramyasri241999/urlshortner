import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Link } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import CreateShortUrl from './Components/CreateShortUrl/CreateShortUrl';
import SearchAndOpenUrl from './Components/SearchAndOpenUrl/SearchAndOpenUrl';

import './index.css';
const routing = (
  <Router>
        <nav className ='headerBar'>
              <Link to="/" className='link linkHomeGrid'>Home</Link>   
              <Link to="/searchAndOpenUrl" className='link linkSearchGrid'>Search </Link>
              <Link to="/createShortUrl" className='link linkCreateGrid'>Create short link</Link>
        </nav>
    <Routes  basename = {process.env.PUBLIC_URL}>
        <Route exact path = "/" element ={<HomeComponent/>} />
        <Route path="/createShortUrl" element={<CreateShortUrl />} />
        <Route path="/searchAndOpenUrl" element={<SearchAndOpenUrl />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routing);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
