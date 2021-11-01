import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useCart from '../../Hooks/useCart';
import useFirebase from '../../Hooks/useFirebase';
import Cart from '../Cart/Cart';
import "./TourBooking.css"


const Details = () => {
    const [cart, setCart, handleCart, handleRemove] = useCart();
    const { id } = useParams();
    const [service, setService] = useState();
    useEffect(() => {
        fetch(`https://safe-savannah-74547.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])




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

                                    <button onClick={() => handleRemove(service._id)} className="btn btn-success">Remove</button>
                                    <button onClick={() => handleCart(service)} className="btn btn-success px-3 py-1 mt-3">add cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 orderNow d-flex my-5">
                        <div className="orderNowSticky">

                            <Cart
                                cart={cart}
                            ></Cart>
                        </div>
                    </div>
                </div>
                :
                <div className="d-flex justify-content-center py-5">
                    <div className="spinner-border  text-warning" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            }
        </div>
    );
};

export default Details;