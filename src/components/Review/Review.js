import React from 'react';
import './Review.css';

const Review = (props) => {
    const { img, name, comment, ratings } = props.review;
    return (
        <div className='review'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{comment}</p>
            <p className='text-muted font-serif'>Ratings: {ratings}</p>
        </div>
    );
};

export default Review;