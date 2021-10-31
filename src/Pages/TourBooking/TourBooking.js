// import React, { useState } from 'react';

import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import "./TourBooking.css"


const Details = () => {

    const { id } = useParams();
    const { services } = useAuth();
    const service = services.find(ser => ser.id === id);
    console.log(service)


    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity(quantity + 1)
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    return (
        <div>
            {service?.name ?
                <div className="row m-0 p-5">
                    <div className="col-lg-8 p-0">
                        <div className="row  m-0">
                            <div className="details-img col-lg-8">
                                <img className="bg-danger p-3 rounded w-100" src={service.img} alt="" />
                                <div>
                                    <h3 className="fw-bold text-danger">{service.name}</h3>
                                    <h5 className="py-3">{service.details}</h5>

                                </div>
                            </div>
                            <div className="col-lg-4 tourBooking py-5">
                                <div className="orderNowSticky my-4">
                                    <h5>Price : ${service.price}</h5>
                                    <h6 className="fw-bold p-3">Quantity:</h6>
                                    <div className="border d-flex my-4">
                                        <button className="btn btn-white fw-bold border-end fs-3 " onClick={increaseQuantity}>+</button>
                                        <h4 className="fw-bold p-3 m-0">{quantity}</h4>
                                        <button className="btn btn-white fw-bold border-start fs-3 " onClick={decreaseQuantity}>-</button>



                                    </div>
                                    <button className="btn border">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 orderNow2">
                        <div className="orderNowSticky">
                            <h5 className="my-5">Order Now</h5>


                            <h4 className="mx-4 fw-bold">Total : {quantity * service.price}</h4>
                            <hr />
                            <button className="btn btn-success">Place To Order</button>
                        </div>
                    </div>
                </div>
                :
                <div><h5>hello</h5></div>
            }
        </div>
    );
};

export default Details;