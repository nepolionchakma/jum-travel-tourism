import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img, key } = props.service;
    const { handleRemove } = props;
    return (
        <div className="p-3">
            <div className="row p-4 m-0 shadow">
                <div className="col-lg-5">
                    <img src={img} alt="" />
                </div>
                <div className="col-lg-5">
                    <h4>{name}</h4>
                    <p>{price}</p>
                    <p>{quantity}</p>
                    <button onClick={() => handleRemove(key)} className="btn btn-success">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;