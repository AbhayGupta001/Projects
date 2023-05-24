import React from 'react';
import {FaQuoteRight,FaQuoteLeft} from 'react-icons/fa';

export const Card = ({review}) => {
  return (
    <div className="Card">
        
        <div className="profile-container">
          <img src={review.image} className="profile" />
        </div>
        
        <div className="card-header">
            <h2>{review.name}</h2>
            <p>{review.job}</p>
        </div>
        <div className="profile-body">
          <FaQuoteLeft className="quote"/>
          <p className='profile-text'>{review.text}</p>
          <FaQuoteRight className="quote"/>
        </div>
    </div>
  )
}
