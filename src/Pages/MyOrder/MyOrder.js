
import React from 'react';
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
                <h2 className="text-start">Tour Search</h2>
            </div>

            <div className="row m-0 p-5">
                <div className="col-lg-8 ">
                    {
                        cart.map(service => <ReviewItem
                            key={service._id}
                            service={service}
                            handleRemove={handleRemove}
                        ></ReviewItem>)
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

export default MyOrder;

