
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import Tour from '../Tour/Tour';
import "./Tours.css"


const Tours = () => {
    const { services } = useAuth();
    const [cart, , handleCart, handleRemove] = useCart();

    return (
        <div>
            <div className="tourSearchBanner">
                <h2 className="text-start">Tour Search</h2>
            </div>

            <div className="row m-0 p-5 justify-content-between">
                <div className="col-lg-8 ">

                    {services.length === 0 ?
                        <div className="d-flex justify-content-center py-5">
                            <div className="spinner-border  text-warning" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div>
                        :
                        <div className="row m-0">

                            {
                                services.map(service =>
                                    <Tour
                                        key={service._id}
                                        service={service}
                                        handleCart={handleCart}
                                        handleRemove={handleRemove}
                                    >

                                    </Tour>
                                )
                            }
                        </div>
                    }
                </div>
                <div className="col-lg-3 orderNow d-flex my-5">
                    <div className="orderNowSticky">
                        <Cart

                            cart={cart}
                        ></Cart>

                        <Link to="/my-order" className="btn btn-success m-n-4">All Order</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tours;

