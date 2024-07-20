import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Implement your form submission logic here
  };

  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input className="subscribe-input" placeholder="example@mail.com" type="email" />
        <button className="subscribe-btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewsLetter;
