import React from 'react';
// get our font awesome imports
import { faClock, faLocationArrow, faPhoneVolume, faStar, faStarHalfAlt, faTrafficLight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./HomeOffer.css"

const HomeOffer = (props) => {
    const { name, img, price, offer, country, details } = props.service
    return (
        <div className="col-lg-3 homeOffer p-0">

            <div className="m-3 homeOfferCard border rounded">

                <div className="homeOfferImg">
                    <img src={img} alt="" />
                    <p>{offer}%</p>
                </div>
                <div className="homeOfferCardIn p-3">
                    <p className="text-start left"><FontAwesomeIcon className="text-warning" icon={faLocationArrow} /> {country}</p>
                    <h3 className="my-3 text-start limit-1">{name}</h3>
                    <div className="text-start">
                        <p className="limit-4 fs-5 text-muted">{details}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-muted">

                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStarHalfAlt} />

                        <span className="ms-2">308 Reviews</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3  text-muted">
                        {/* <Link to={`/services/${_id}`} className="btn btn-success">Booking Now</Link> */}
                        <p className="m-0"> <FontAwesomeIcon className="text-warning" icon={faClock} /> 10 Hours</p>
                        <h5 className="m-0 text-color"><FontAwesomeIcon className="text-warning right" icon={faTrafficLight} /> ${price}</h5>

                    </div>
                </div>
                <div className="myIcon">
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