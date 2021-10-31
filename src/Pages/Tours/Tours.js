
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Tour from '../Tour/Tour';
import "./Tours.css"

const Tours = () => {
    const { services } = useAuth();
    console.log(services)
    const [cart, setCart] = useState([]);

    const handleCart = (service) => {
        // console.log(service)
        const newCart = [...cart, service];
        setCart(newCart);
    }
    return (
        <div>
            <div className="tourSearchBanner">
                <h2 className="text-start">Tour Search</h2>
            </div>

            <div className="row m-0 p-5">
                <div className="col-lg-8 ">

                    {services.length === 0 ?
                        <div className="d-flex justify-content-center py-5">
                            <div className="spinner-border  text-warning" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                        <div className="">

                            {
                                services.map(service =>
                                    <Tour
                                        key={service.id}
                                        service={service}
                                        handleCart={handleCart}
                                    >

                                    </Tour>
                                )
                            }
                        </div>
                    }
                </div>
                <div className="col-lg-4 orderNow d-flex my-5">
                    <div className="orderNowSticky">
                        <h5 className="my-5">Order Now</h5>
                        <h4>Item : {cart.length}</h4>
                        <hr />
                        <h4>Total : 500$</h4>
                        <button className="btn btn-success">Place To Order</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Tours;

