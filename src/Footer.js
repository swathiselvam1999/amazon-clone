

import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="container-fluid bg-dark text-white">
      <div className="row">
        <div className="col-md-4">
          <img src="./images/amazon.png" className="img-fluid" alt="Amazon Logo" style={{ width: '140px', height: '50px' }} id="footer-logo" />
        </div>
        <div className="col-md-3">
          <h5>Get to Know Us</h5>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Amazon Payment Products</h5>
          <ul className="footer-links">
            <li><a href="#">Your Payment Hub</a></li>
            <li><a href="#">Amazon Pay</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Let Us Help You</h5>
          <ul className="footer-links">
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Orders</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p className="footer-small justify-content-center">© 2023 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
