import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import AddService from '../AddService/AddService';

const ManageServices = () => {

    const { services, setServices } = useFirebase();
    const reload = () => {
        window.location.reload(false);
    }
    const handleDelete = id => {
        const url = `https://safe-savannah-74547.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    const remaining = services.filter(service => services._id !== id);
                    setServices(remaining);
                    reload();
                }

            })
    }

    return (
        <div className="row m-0 p-5">
            <h1 className="my-5 customFont text-color">Manage Services</h1>
            <div className="col-lg-6 ">
                <div className="row">
                    {
                        services.map(service =>
                            <div
                                key={service._id} className="col-lg-6 col-md-6 col-sm-6 col-12 my-2"
                            >

                                <div className=" p-4 m-0 shadow">
                                    <div className="tourImg">
                                        <img src={service.img} alt="" />
                                    </div>
                                    <div className="">
                                        <h4>{service.name}</h4>
                                        <p>Price : {service.price}$</p>


                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            Delete
                                        </button>


                                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">{service.name}</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="tourImg">
                                                            <img src={service.img} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button className="btn btn-danger" onClick={() => handleDelete(service._id)}>confirm</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        )
                    }
                </div>
            </div>
            <div className="col-lg-6">
                <AddService></AddService>
            </div>
        </div>
    );
};

export default ManageServices;