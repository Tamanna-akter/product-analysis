import React from 'react';
import './NotFound.css';
import notFoundImg from '../../images/notFound.gif';

const NotFound = () => {
    return (
        <div className="error-container">
            <div>
                <img className="error-img" src={notFoundImg} alt="" />
            </div>
            <div>
                <h1>Error 404 - Page not found ... Opps!</h1>
            </div>

        </div>
    );
};

export default NotFound;