import React, { useState } from 'react';
import useAuth from "../../Hooks/useAuth";
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import "./PlaceOrder.css"

const PlaceOrder = () => {
    const { user } = useAuth();
    // Popup
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { nameChange,
        handleEmail, } = useFirebase();
    // const handleEmailChange = e => {
    //     setEmail(e.target.value);
    // }
    // const handleNameChange = e => {
    //     setName(e.target.value);
    // }
    return (
        <div className="row m-0">
            <div className="col-lg-6 confirm-booking mx-auto">
                <div className=" my-5 mx-0">
                    <h2 className="text-color my-3">User Information</h2>
                    <form >
                        <input type="text" placeholder={user.displayName} onChange={nameChange} required />
                        <input type="email" placeholder={user.email} onChange={handleEmail} required />
                        <input placeholder="Address" required />
                        <>
                            <Button className="btn btn-success " onClick={handleShow}>
                                Submit
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Congratulation, Successfully Booking.</Modal.Title>

                                </Modal.Header>
                                <Modal.Body>
                                    <div>
                                        <img className="w-100" src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/10/Stop-Animation-Blog-Post-Wave.gif" alt="" />
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Link to="/"><Button variant="danger" onClick={handleClose}>
                                        Close
                                    </Button></Link>


                                </Modal.Footer>
                            </Modal>
                        </>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;