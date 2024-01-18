// ContactUs.js

import React from 'react';

const ContactUs = () => (
  <div id="contact" className="container mt-3">
    
      <h2>Contact Us <i className="fa-regular fa-envelope"></i></h2>
      <p>Feel free to reach out to us.</p>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter Your Name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter Your Email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Enter Your Message Here.." required></textarea>
        </div>

        <div className="btn d-grid">
          <button type="submit" className="btn btn-warning btn-block">Submit </button>
        </div>
      </form>
    </div>
 
);

export default ContactUs;
