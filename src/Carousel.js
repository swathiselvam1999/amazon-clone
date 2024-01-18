import React from 'react';


const Carousel = () => {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators/dots */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
      </div>

      {/* The slideshow/carousel */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="images/img1.jpg" alt="Los Angeles" className="d-block w-100" />
          <div className="carousel-caption">
            <h3 style={{ color: '#000' }}>Great Indian Festival</h3>
            <p style={{ color: 'black' }}>Flat 30% Offer</p>
          </div>
        </div>
        <div className="carousel-item active">
          <img src="images/img2.jpg" alt="Los Angeles" className="d-block w-100" />
          <div className="carousel-caption">
            <h3 style={{ color: '#000' }}>Great Indian Festival</h3>
            <p style={{ color: 'black' }}>Flat 30% Offer</p>
          </div>
        </div>
        <div className="carousel-item active">
          <img src="images/img3.jpg" alt="Los Angeles" className="d-block w-100" />
          <div className="carousel-caption">
            <h3 style={{ color: '#000' }}>Great Indian Festival</h3>
            <p style={{ color: 'black' }}>Flat 30% Offer</p>
          </div>
        </div>
        <div className="carousel-item active">
          <img src="images/img4.jpg" alt="Los Angeles" className="d-block w-100" />
          <div className="carousel-caption">
            <h3 style={{ color: '#000' }}>Great Indian Festival</h3>
            <p style={{ color: 'black' }}>Flat 30% Offer</p>
          </div>
        </div>
        <div className="carousel-item active">
          <img src="images/img5.jpg" alt="Los Angeles" className="d-block w-100" />
          <div className="carousel-caption">
            <h3 style={{ color: '#000' }}>Great Indian Festival</h3>
            <p style={{ color: 'black' }}>Flat 30% Offer</p>
          </div>
        </div>
        {/* ... (other carousel items) */}
      </div>

      {/* Left and right controls/icons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Carousel;
