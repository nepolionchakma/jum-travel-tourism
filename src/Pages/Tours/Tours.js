
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import Tour from '../Tour/Tour';
import "./Tours.css"


const Tours = () => {
    const { services } = useAuth();
    const [cart, handleCart] = useCart();

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
                                <span className="sr-only"></span>
                            </div>
                        </div>
                        :
                        <div className="">

                            {
                                services.map(service =>
                                    <Tour
                                        key={service.key}
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
                        <Cart
                            cart={cart}
                        ></Cart>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Tours;

