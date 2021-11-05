import React from 'react';
// get our font awesome imports
import { faClock, faLocationArrow, faPhoneVolume, faStar, faStarHalfAlt, faTrafficLight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./HomeOffer.css"
import { Link } from 'react-router-dom';

const HomeOffer = (props) => {
    const { name, img, price, offer, country, details, duration, _id, review } = props.service
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 homeOffer m-0 p-0">

            <div className="m-3 homeOfferCard border rounded">

                <div className="homeOfferImg">
                    <img className="w-100" src={img} alt="" />
                    <p>{offer}%</p>
                </div>
                <div className="homeOfferCardIn p-3">
                    <p className="text-start left"><FontAwesomeIcon className="text-warning" icon={faLocationArrow} /> {country}</p>

                    <Link to={`/services/${_id}`} className="text-decoration-none text-dark fs-4 fw-bold my-3 text-start limit-1">{name}</Link>
                    <div className="text-start">
                        <p className="limit-4 fs-5 text-muted">{details}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-muted">

                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStarHalfAlt} />

                        <span className="ms-2">{review}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3  text-muted">

                        <p className="m-0"> <FontAwesomeIcon className="text-warning" icon={faClock} />{duration} Hours</p>
                        <h5 className="m-0 text-color"><FontAwesomeIcon className="text-warning right" icon={faTrafficLight} /> ${price}</h5>

                    </div>
                </div>
                <div className="myIcon d-flex m-0 p-0 justify-content-between align-items-center p-2">
                    <Link to={`/services/${_id}`} className="btn btn-success  fw-bold  text-start limit-1">Book Now</Link>
                    <FontAwesomeIcon className="text-danger mx-2" icon={faFacebook} />
                    <FontAwesomeIcon className="text-danger mx-2" icon={faTwitter} />
                    <FontAwesomeIcon className="text-danger mx-2" icon={faInstagram} />
                    <FontAwesomeIcon className="text-danger mx-2" icon={faLinkedin} />
                    <FontAwesomeIcon className="text-danger mx-2" icon={faPhoneVolume} />
                </div>
            </div>
        </div>
    );
};

export default HomeOffer;