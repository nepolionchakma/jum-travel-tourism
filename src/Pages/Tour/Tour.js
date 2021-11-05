import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// get our font awesome imports
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Tour.css"
import { Button, Modal } from 'react-bootstrap';

const Tour = (props) => {
    const { name, img, price, _id, rate, details } = props.service;
    // Popup
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const added = () => {
        props.handleCart(props.service);
        handleClose();
    }
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 py-4 my-4 ">

            <div className="shadow  p-3">
                <div className=" tourImg">
                    <div>
                        <span>{rate} <FontAwesomeIcon className="text-warning" icon={faStarHalfAlt} /></span>
                        <img src={img} alt="" />
                    </div>
                </div>
                <h2 className="text-start py-2">{name}</h2>
                <hr />
                <p>{details}</p>
                <hr />
                <h6><span className="fs-3">Price : {price}$</span>/Per Person</h6>
                <div className="d-flex justify-content-evenly  p-2 ">


                    <Link to={`/services/${_id}`} className="btn btn-success ">Details</Link>

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
                                    <h2 className="text-start py-2">{name}</h2>
                                    <img className="w-100" src={img} alt="" />
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
        </div >
    );
};

export default Tour;