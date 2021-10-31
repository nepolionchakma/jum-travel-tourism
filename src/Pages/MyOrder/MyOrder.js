import React from 'react';
import useAuth from '../../Hooks/useAuth';
import "./MyOrder.css"

const MyOrder = () => {

    const { services } = useAuth();
    console.log(services)
    return (
        <div>
            <div className="tourSearchBanner">
                <h2 className="text-start">Tour Search</h2>
            </div>

            <div className="row m-0 text-">
                <div className="col-lg-8 ">
                    <div className="row p-5 ">
                        {services.length === 0 ?
                            <div className="d-flex justify-content-center py-5">
                                <div className="spinner-border  text-warning" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            :
                            <div className="row p-2 shadow">

                                <h4>hello</h4>
                            </div>
                        }
                    </div>
                </div>
                <div className="col-lg-3 p-4 orderNow d-flex m-5">
                    <div className="orderNowSticky">
                        <h5 className="my-5">Order Now</h5>
                        <h4>Item : 1</h4>
                        <hr />
                        <h4>Total : 500$</h4>
                        <button className="btn btn-success">Proceed to Checkout</button>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default MyOrder;

