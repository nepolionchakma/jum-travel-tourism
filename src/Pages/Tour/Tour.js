import React from 'react';
import { Link } from 'react-router-dom';

const Tour = (props) => {
    const { name, img, price, id } = props.service;
    return (
        <div className="row p-2">
            <div className="col-lg-4 tourImg">
                <span>4.5</span>
                <img src={img} alt="" />
            </div>
            <div className="col-lg-8">
                <h2 className="text-start">{name}</h2>

                <p className="text-start">{ }</p>
                <hr />
                <h5>Price : {price}/Per Person</h5>
                <div className="d-flex justify-content-evenly bg-warning p-2 ">

                    <Link to={`/tour-booking/${id}`}>
                        <button className="btn btn-success px-3 py-1 mt-3">Details</button></Link>
                    <button onClick={() => props.handleCart(props.service)} className="btn btn-success px-3 py-1 mt-3">add cart</button>

                </div>
            </div>
        </div>
    );
};

export default Tour;