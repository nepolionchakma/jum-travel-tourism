import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeOffer from '../HomeOffer/HomeOffer';

const Offer = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./fakedata.json")
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
            {
                services.length === 0 ?
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border  text-warning" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div> :
                    <div className="row p-5 m-0">
                        <div>
                            <h4>Modern & Beautiful</h4>
                            <h1>Explore the World for Yourself</h1>
                        </div>
                        {
                            services.map(service =>
                                <HomeOffer
                                    key={service.id}
                                    service={service}
                                ></HomeOffer>
                            )
                        }
                        <div>
                            <h4 className="btn btn-success my-3">View All</h4>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Offer;