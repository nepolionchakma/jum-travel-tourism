import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComment } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./fakedata.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    // console.log(services)
    const sliceData = services.slice(0, 4);
    return (
        <div >

            <div className="p-5 blogs">
                <div className=" text-center text-color">
                    <div className="col-lg-6 mx-auto text-center ">
                        <h1 className="customFont ws">Blog Posts</h1>
                        <h5>One inspiring story is worth traveling. Discover more about local food, tradition and history. Read the stories that make you want to travel.</h5>
                    </div>
                </div>
                <div>
                    {sliceData?.length === 0 ?
                        <div className="d-flex justify-content-center py-5">
                            <div className="spinner-border  text-warning" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div>
                        :
                        <div className="row">
                            {
                                sliceData.map(service =>
                                    <div
                                        key={service.id}
                                        className="col-lg-3 col-md-6 col-sm-6 col-12 p-0">
                                        <div className="shadow m-3 homeOffer oh">
                                            <div className="">
                                                <img src={service.img} alt="" />
                                                <div className="p-3">
                                                    <h3 className="limit-2 mt-2">{service.name}</h3>
                                                    <p className="limit-4 text-start">{service.details}</p>
                                                    <div className="d-flex justify-content-between align-items-center align-self-center ">
                                                        <button className="btn btn-success">More</button>
                                                        <h6 className="my-2"><FontAwesomeIcon className="text-warning" icon={faClock} /> {service.date}</h6>
                                                        <h6 className="my-2"><FontAwesomeIcon className="text-warning" icon={faComment} />{service.comment}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default Blog;