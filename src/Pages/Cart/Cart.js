import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const service of cart) {
        if (!service.quantity) {
            service.quantity = 1;
        }
        total = total + service.price * service.quantity;
        totalQuantity = totalQuantity + service.quantity;
    }

    return (
        <div>
            <h5 className="my-5">Order Now</h5>
            <h4>Item : {totalQuantity}</h4>
            <hr />
            <h4>Total : {total}$</h4>
            <Link to="/my-order" className="btn btn-success">Review My Orders</Link>
        </div>
    );
};

export default Cart;