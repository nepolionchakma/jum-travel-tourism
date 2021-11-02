import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css";



const Banner = () => {
    return (
        <div className="banner">


            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fXsWRvR/hallstatt-3609863.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold">Summer Hallstatt Austria</h3>
                        <p>Hallstatt became rich in Austria few hundreds of years ago because of its salt mines</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/xhMnySq/london-eye-945497.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Paradise Island Koh Rong Cambodia</h3>
                        <p>The villas are a private tropical hideaway on the island of Koh Rong Sanloem, off the coast of Sihanoukville. The island is less developed.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/r2W8gNm/mountains-5526265.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Sapa Trekking, Homestay</h3>
                        <p> Summer / Rainy Season. You can certainly still trek in Sapa during the rainy season, you just need to bring a rain jacket as it is ..</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;