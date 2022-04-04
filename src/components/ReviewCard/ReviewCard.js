import React from 'react';
import './ReviewCard.css'

const ReviewCard = (props) => {
    const { img, name, comment, ratings } = props.card;
    return (
        <div className='review'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{comment}</p>
            <p className='text-muted font-serif'>Ratings: {ratings}</p>
        </div>
    );
};

export default ReviewCard;