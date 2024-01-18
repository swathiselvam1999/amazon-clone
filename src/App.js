import React from 'react';
import NavBar from './NavBar';
import Carousel from './Carousel';
import ProductCard from './ProductCard';
import Review from './Review';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';


const App = () => {
 

  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <ProductCard />
      <Review />
      <AboutUs />
      <ContactUs />
      <Footer />
      <ScrollToTopButton />
   
    </div>
  );
};

export default App;
