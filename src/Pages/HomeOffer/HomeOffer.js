import React from 'react';
// get our font awesome imports
import { faPhoneVolume, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./HomeOffer.css"
import { Link } from 'react-router-dom';

const HomeOffer = (props) => {
    const { name, img, price, _id, rate, country, details } = props.service
    return (
        <div className="col-lg-4 homeOffer p-0">

            <div className="m-3 homeOfferCard shadow rounded p-3">

                <div className="homeOfferImg">
                    <img src={img} alt="" />
                    <p>{rate} <FontAwesomeIcon className="text-warning" icon={faStarHalfAlt} /></p>
                </div>
                <div className="homeOfferCardIn">
                    <h3 className="my-3 text-start limit-1">{name}</h3>
                    <p className="text-start">{country}</p>
                    <div className="text-start">
                        <p className="limit-4 fs-5 text-muted">{details}</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/services/${_id}`} className="btn btn-success">Booking Now</Link>
                        <h5 className="my-auto">${price}</h5>
                        <div>
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon className="text-warning" icon={faStarHalfAlt} />
                        </div>
                    </div>
                </div>
                <div className="py-3">
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