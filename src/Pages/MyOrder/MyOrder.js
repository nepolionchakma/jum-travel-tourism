
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useFirebase from '../../Hooks/useFirebase';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const MyOrder = () => {
    const { services } = useFirebase();
    const [cart, setCart] = useCart(services);

    const handleRemove = _id => {
        const newCart = cart.filter(service => service._id !== _id);
        setCart(newCart);
    }
    return (
        <div>
            <div className="tourSearchBanner">
                <h2 className="text-start">My Orders</h2>
            </div>

            <div className="row m-0 p-5">
                <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                    {
                        cart.map(service => <ReviewItem
                            key={service._id}
                            service={service}
                            handleRemove={handleRemove}
                        ></ReviewItem>)
                    }

                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 orderNow d-flex py-5 my-3">
                    <div className="orderNowSticky">

                        <Cart
                            cart={cart}
                        ></Cart>

                        <Link to="/place-order" className="btn btn-success m-n-4">Place To Order</Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyOrder;

