// Review.js

import React from 'react';

const reviews = [
  {
    title: 'Must Buy!!!',
    content: "This phone has a lot of things to like. Its display quality is excellent which is good for watching YouTube and Netflix. Camera quality is also decent...both daylight and nighttime shots look fine. Performance-wise, the phone is good because of the 90 Hz refresh rate. I think this phone is good for a regular user who doesn't want to spend too much money. One thing that I didn't like about this phone is its weight...it is a little bit heavy on hands.",
    image: './images/r1.jpeg',
    rating: 5,
    date: 'January 1, 2023',
  },
  // Add more reviews as needed
  // {
  //   title: 'Not Satisfied',
  //   content: 'Product is good but stitching quality is not good and strong. Color also slightly varies from what is shown in the picture. But ok. Should check after wash, how long it lasts.',
  //   image: './images/r2.jpg',
  //   rating: 2,
  //   date: 'January 5, 2023',
  // },
  {
    title: 'Awesome!',
    content: "Loved it completely, it's a very relatable book for anyone who wants to quit and start up their own thing. He has written beautifully about transforming one's mindset and finally achieving a life of your calling by timing it as per the calculation of one's financial situation. Karan himself is such a big example of someone who paved a path to freedom by showing the world the quickest startup to exit business journey!",
    image: './images/r3.avif',
    rating: 4,
    date: 'January 5, 2023',
  },
  {
    title: 'Worth the Money',
    content: "This is a fantastic product. I've been using it for a month, and it has exceeded my expectations.",
    image: './images/r4.jpg',
    rating: 5,
    date: 'January 5, 2023',
  },
  {
    title: 'Good One',
    content: "I ordered this particular piece to use as my product backdrop. As you can see in pictures, it enhanced the look of my products, a perfect thing for small businesses. Go for it.",
    image: './images/r5.jpg',
    rating: 4,
    date: 'January 5, 2023',
  },
];

const Review = () => (
  <div className="container" id="review">
    <h1 className="mt-4 mb-4">Customer Reviews</h1>

    {reviews.map((review, index) => (
      <div key={index} className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{review.title}</h5>
          <p className="card-text">{review.content}</p>
          <img src={review.image} className="img-fluid" alt="Review" style={{ width: '200px', height: '100px' }} />
          <p>
            Rating 
            {Array.from({ length: review.rating }, (_, i) => (
              <i key={i} className="fa-sharp fa-solid fa-star"></i>
            ))}
          </p>
          <p className="card-text">
            <small className="text-muted">Posted on {review.date}</small>
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default Review;
