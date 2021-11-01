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
                        src=""
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mont Blanc</h3>
                        <p>Montblanc International is a German manufacturing company of luxury goods, based in Hamburg. The company was known as Simplizissiumus-Füllhalter in 1906, then changed its name to Simplo Filler Pen Co. GmbH in 1907, and was incorporated under that name in 1908. Its current name was adopted in 1934</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src=""
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=""
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;