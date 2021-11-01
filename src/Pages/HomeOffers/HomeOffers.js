import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import HomeOffer from '../HomeOffer/HomeOffer';
import "./HomeOffers.css"

const HomeOffers = () => {

    const { services } = useFirebase();
    const sliceData = services.slice(0, 6);
    return (
        <div className="homeOffers">
            {
                services.length === 0 ?
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border  text-warning" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div> :
                    <div className="row p-5 m-0">
                        <div className="text-warning">
                            <h1 className="customFont ws">Modern & Beautiful</h1>
                            <h1 className="fw-bold mb-4">Explore the World for Yourself</h1>
                        </div>
                        {
                            sliceData.map(service =>
                                <HomeOffer
                                    key={service._id}
                                    service={service}
                                ></HomeOffer>
                            )
                        }
                        <div>
                            <Link to="/tours" className="btn btn-success my-3">View All</Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default HomeOffers;