import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import HomeOffer from '../HomeOffer/HomeOffer';
import "./HomeOffers.css"

const HomeOffers = () => {

    const { services } = useFirebase();
    const sliceData = services.slice(0, 8);
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
                        <div className="text-color">
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

                    </div>
            }
        </div>
    );
};

export default HomeOffers;