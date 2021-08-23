import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../LogoB"

class Navbar extends Component {
  render() {
    return (
      
             
        <nav className="navbar navbar-expand-lg sticky-top d-flex justify-content-between">
          <Link className="navbar-brand" >
            <img src="././public/LogoB.png" width="30" height="30" alt="React App Logo"/>
          </Link>
        <h1>Bunuba Bushfoods</h1>

        <li className="nav-item dropdown float-none">
            <a className="nav-link  bi bi-filter-right" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"/>
           
            <div className="dropdown-menu float-none" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/main.js">Home</a>
              <a className="dropdown-item" href="#">About</a>
              <a className="dropdown-item" href="#">Contact</a>
              <a className="dropdown-item" href="/spelling.js">Spelling and Pronunciation</a>
              <a className="dropdown-item" href="Muwayi.html">Bunuba Muwayi</a>
              <a className="dropdown-item" href="Winthali.html"> Winthali</a>
              <a className="dropdown-item" href="animals.html">Animals</a>
              <a className="dropdown-item" href="Muwayi.html">Mayi and Lundu</a>
            </div>
          </li>

            
    
        </nav>
      
    );
  }
}
export default Navbar;
