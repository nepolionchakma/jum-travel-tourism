import React from 'react';
// get our font awesome imports
import { faPhoneVolume, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./HomeOffer.css"

const HomeOffer = (props) => {
    const { name, img, price } = props.service
    return (
        <div className="col-lg-4 homeOffer ">

            <div className="m-3 homeOfferCard shadow rounded p-3">

                <div className="homeOfferImg">
                    <img src={img} alt="" />
                </div>
                <div className="homeOfferCardIn">
                    <h2 className="fw-bold my-3">{name}</h2>
                    <div className="">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, doloribus?</h5>
                    </div>

                    <div className="d-flex justify-content-evenly align-items-center">
                        <button className="btn btn-success">Booking Now</button>
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