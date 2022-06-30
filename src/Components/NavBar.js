import React from "react";
import { Link } from "react-router-dom";


function NavBar(){


    return(
        <>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">TechLogex</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav mynav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tv">TV Series</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
 
      </ul>

      <form className="d-flex myform">
        <input className="form-control me-2" type="text" placeholder="Search" />
        <button className="btn btn-danger" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>




        </>
    )
}

export default NavBar