// AboutUs.js

import React from 'react';

const AboutUs = () => (
  <div className="aboutus" id="about">
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h2 className="text-left text-black">About Us</h2>
        <h3 style={{ color: 'gray' }}>India's Largest E-Commerce Website.</h3>
        <p className="m-1 text-dark ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum animi eum quibusdam vel veniam quisquam vitae in tempore, officiis iste, magni mollitia? Assumenda dolorum reiciendis incidunt quae qui, labore sed?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sapiente voluptatem amet quia at explicabo eos quasi corporis, qui maiores sint nam commodi eveniet fuga ad! Dolore non laborum tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto porro rerum error? Dolorum qui sunt ratione obcaecati possimus nihil, architecto provident expedita? Amet fugit alias laborum quasi. Possimus, officiis cum
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis delectus voluptatem officiis natus a expedita, in aut. Sapiente magnam temporibus nemo esse voluptatum, consequuntur laborum commodi, hic dolor iusto asperiores.
          <br /> <br />
        </p>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src="./images/amazon office.png" alt="About" style={{ width: '100%', height: '95%' }} />
      </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
