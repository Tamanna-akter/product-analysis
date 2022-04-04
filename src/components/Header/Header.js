import React from 'react';
// import { CustomLink } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import cameraImg from '../../images/camera.jpg';
import './Header.css'


const Header = () => {
    return (
        <div>
            <div>
                <nav className='menubar menubar-container'>
                    <CustomLink to='/home'>HOME</CustomLink>
                    <CustomLink to='/reviews'>REVIEWS</CustomLink>
                    <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                    <CustomLink to='/blogs'>BLOGS</CustomLink>
                </nav>
            </div>
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
            </div>
        </div>
    );
};

export default Header;