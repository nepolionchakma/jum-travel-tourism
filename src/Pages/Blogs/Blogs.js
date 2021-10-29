import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Blogs.css"

const Blogs = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./fakedata.json")
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className="p-5 blogs">

            <div className=" text-center text-warning">
                <div className="col-lg-6 mx-auto text-center ">
                    <h2 className="fw-bold">Blog Posts</h2>
                    <h5>One inspiring story is worth traveling. Discover more about local food, tradition and history. Read the stories that make you want to travel.</h5>
                </div>
            </div>
            <div>
                {
                    services.length === 0 ?
                        <div className="d-flex justify-content-center py-5">
                            <div className="spinner-border  text-warning" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div> :
                        <div className="row p-5 m-0">

                            <div className="row">
                                {
                                    services.map(service =>
                                        <div
                                            key={service.id} className="col-lg-3">
                                            <div>
                                                <img src={service.img} alt="" />
                                                <h3>{service.name}</h3>
                                                <h6>{service.date}</h6>
                                                <h6>{service.comment}</h6>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                }
            </div>
        </div>

    );
};

export default Blogs;