import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../travel-guru-master/Logo.png'

const Header = () => {
    return (
        <div className="container header bg-primary">
            <nav className="navbar navbar-expand-lg px-5">
        <Link to="/"><img src={logo} alt=""/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <input className="form-control mx-5 w-25 mr-sm-2" type="search" placeholder="Search your Destination" aria-label="Search"/>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item mx-3">
        <Link to="/" className="nav-link" href="#">News</Link>
      </li>
      <li className="nav-item mx-3">
        <Link to="/" className="nav-link" href="#">Destination</Link>
      </li>
      <li className="nav-item mx-3">
        <Link to="/" className="nav-link" href="#">Blog</Link>
      </li>
      <li className="nav-item mx-3">
        <Link to="/" className="nav-link" href="#">Contact</Link>
      </li>
    </ul>
   <button className="btn">Log In</button>
  </div>
</nav>
        </div>
    );
};

export default Header;