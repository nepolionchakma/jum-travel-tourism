import React from 'react';
import choose1 from "../../img/h1-custom-icon-1-hover.jpg";
import choose2 from "../../img/h1-custom-icon-2-hover.png";
import choose3 from "../../img/h1-custom-icon-3-hover.png";
import choose4 from "../../img/h1-custom-icon-4-hover.png";
import choose5 from "../../img/h1-custom-icon-5-hover.jpg";
import "./ChooseTour.css"

const ChooseTour = () => {
    return (
        <div className="p-5 chooseTour">
            <div className="col-lg-6 mx-auto text-center text-white">
                <h1 className="customFont ws">Choose Tour</h1>
                <h5 >Find your next travel adventure and make it memorable. Explore wildlife, enjoy seaside or book a cruise tour. Check out our popular destinations.</h5>
            </div>
            <div className="row m-o justify-content-evenly p-5 text-white">
                <div className="col-lg-2 col-md-2 col-sm-4 col-4 my-2">
                    <img src={choose1} alt="" />
                    <h4>Self-Guided</h4>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-4 my-2">
                    <img src={choose2} alt="" />
                    <h4>Cruises</h4>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-4 my-2">
                    <img src={choose3} alt="" />
                    <h4>Adventure</h4>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 my-2">
                    <img src={choose4} alt="" />
                    <h4>Wildlife</h4>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-6 my-2">
                    <img src={choose5} alt="" />
                    <h4>Seaside</h4>
                </div>
            </div>
        </div>
    );
};

export default ChooseTour;