import React from 'react';
import useReviews from '../customHooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='reviews-container'>
            <h1 className='fst-italic mt-2'>What our customer says!!</h1>
            <div className='reviews'>

                {reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>
                )}
            </div>
        </div>

    );
};

export default Reviews;