import React from 'react';

const NavBar = () => {
  return (
    <div id="home">
      {/* Nav Bar Start */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.amazon.in/ref=nav_logo">
            <img src="./images/amazon.png" alt="" width="140" height="50" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-white" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#review" className="nav-link">
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a href="log.html" className="nav-link" target="_blank">
                  Login
                </a>
              </li>
            </ul>
            <form action="#" className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search Here" />
              <button className="btn btn-warning" type="button" id="search">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
