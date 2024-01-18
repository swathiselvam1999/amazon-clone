// ProductCard.js

import React from 'react';

const products = [
  {
    title: 'Books',
    image: './images/books.jpg',
    description: 'Click here to view the product.',
  },
  {
    title: 'Clothing',
    image: './images/clothig.jpg',
    description: 'Click here to view the product.',
  },
  {
    title: 'Gadgets',
    image: './images/gadgets.jpg',
    description: 'Click here to view the product.',
  },
  {
    title: 'Groceries',
    image: './images/grocery.jpg',
    description: 'Click here to view the product.',
  },
  {
    title: 'Home Applinces',
    image: './images/home.jpg',
    description: 'Click here to view the product.',
  },
  {
    title: 'Toys',
    image: './images/toys.jpg',
    description: 'Click here to view the product.',
  },
  
];

const ProductCard = () => (
  <div className="container mt-4 pro">
    <div className="row">
      {products.map((product, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card pb-4">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <button type="button" className="btn btn-warning">View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductCard;
