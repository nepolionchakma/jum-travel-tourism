import React from 'react';


const ReviewItem = (props) => {
    const { name, price, quantity, img, _id } = props.service;
    const { handleRemove } = props;
    return (
        <div className="p-3">
            <div className="row p-4 m-0 shadow">
                <div className="col-lg-5 tourImg">
                    <img src={img} alt="" />
                </div>
                <div className="col-lg-5">
                    <h4>{name}</h4>
                    <p>Price : {price}</p>
                    <p>Items : {quantity}</p>
                    <button onClick={() => handleRemove(_id)} className="btn btn-success">Remove</button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;