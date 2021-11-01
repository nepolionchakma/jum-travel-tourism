import React from 'react';
import { Link } from 'react-router-dom';
// get our font awesome imports
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tour.css"

const Tour = (props) => {
    const { name, img, price, _id, rate, details } = props.service;

    return (
        <div className="col-lg-6 py-4 my-4 ">

            <div className="shadow  p-3">
                <div className=" tourImg">
                    <div>
                        <span>{rate} <FontAwesomeIcon className="text-warning" icon={faStarHalfAlt} /></span>
                        <img src={img} alt="" />
                    </div>
                </div>
                <h2 className="text-start py-2">{name}</h2>
                <hr />
                <p>{details}</p>
                <hr />
                <h6><span className="fs-3">Price : {price}$</span>/Per Person</h6>
                <div className="d-flex justify-content-evenly  p-2 ">

                    <Link to={`/tour-booking/${_id}`}>
                        <button className="btn btn-success px-3 py-1 mt-3">Details</button></Link>
                    <button onClick={() => props.handleCart(props.service)} className="btn btn-success px-3 py-1 mt-3">add cart</button>

                </div>
            </div>
        </div>
    );
};

export default Tour;