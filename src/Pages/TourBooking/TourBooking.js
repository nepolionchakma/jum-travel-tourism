import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import "./TourBooking.css";


const Details = () => {
    const [cart, , handleCart] = useCart();
    const { id } = useParams();
    const [service, setService] = useState();
    useEffect(() => {
        fetch(`https://safe-savannah-74547.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])


    // Popup
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const added = () => {
        handleCart(service);
        handleClose();
    }

    return (
        <div>
            {service?.name ?
                <div className="row m-0 p-5">
                    <div className="col-lg-8 col-md-6 col-sm-6 col-12 p-0">
                        <div className="row  m-0">
                            <div className="details-img col-lg-8">
                                <img className="bg-danger p-3 rounded w-100" src={service.img} alt="" />
                                <div>
                                    <h3 className="fw-bold text-danger">{service.name}</h3>
                                    <h5 className="py-3">{service.details}</h5>

                                </div>
                            </div>
                            <div className="col-lg-4 tourBooking py-5">
                                <div className="orderNowSticky my-4 mt-5">
                                    <h5>Price : ${service.price}</h5>

                                    {/* <button onClick={removeFromDb} className="btn btn-danger d-block my-3">Remove</button> */}
                                    <>
                                        <Button className="btn btn-success " onClick={handleShow}>
                                            Add Cart
                                        </Button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Are You Sure ?</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div>
                                                    <h2 className="text-start py-2">{service.name}</h2>
                                                    <img className="w-100" src={service.img} alt="" />
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="danger" onClick={handleClose}>
                                                    Cancel
                                                </Button>
                                                <Button variant="primary" onClick={added}>
                                                    add
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 orderNow d-flex ">
                        <div className="orderNowSticky py-3">

                            <Cart
                                cart={cart}
                            ></Cart>
                            <Link to="/my-order" className="btn btn-success">Review My Orders</Link>
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