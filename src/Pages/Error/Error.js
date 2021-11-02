import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="row m-0">
            <div className="col-lg-6 mx-auto">
                <img className="w-100" src="https://i.ibb.co/Xy5TH4B/404.png" alt="" />
                <Link to="/" className="btn btn-success">Go To Home</Link>
            </div>
        </div>
    );
};

export default Error;