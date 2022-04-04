import React from 'react';
import { Link } from 'react-router-dom';
import cameraImg from '../../images/camera.jpg';
import useReviews from '../customHooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Home.css';
const Home = () => {
    const [reviews, setReviews] = useReviews();
    const reviewsCard = reviews.slice(0, 3);
    return (

        <div className="header-container">
            <div className="row my-3">
                <div className="col-md-6">
                    <h1 className="text fst-italic mt-5">The Best Digital Camera in 2022</h1>
                    <h3 className='nikon'>Nikon D3500</h3>
                    <p className="text-start fst-italic fs-4">Every time we use the D3500 we're reminded how good its it's the perfect no-frills beginner DSLR.
                        The Nikon D3500 is a long-standing favorite of ours.
                        It's by no means the most advanced DSLR you can get, but its simplicity, its controls and the quality of the images it can create make
                        it our top recommendation for anyone just starting out. </p>
                </div>
                <div className="col-md-6">
                    <img className="header-img" src={cameraImg} alt="" />
                </div>
            </div>
            <div>
                <h1>Customer Reviews</h1>
                <div className='reviews'>
                    {
                        reviewsCard.map(card => <ReviewCard key={card.id}
                            card={card}
                        ></ReviewCard>)
                    }
                </div>
                <Link className='btn btn-success  mt-2' to="/reviews">See All Reviews</Link>
            </div>

        </div>

    );
};

export default Home;