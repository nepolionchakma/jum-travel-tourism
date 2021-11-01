import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const ManageServices = () => {
    const { services, setServices } = useFirebase();
    const refreshPage = () => {
        window.location.reload();
    }
    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("Successfully Delete.")
                    const remaining = services.filter(service => services._id !== id);
                    setServices(remaining);
                    refreshPage();
                }

            })
    }
    return (
        <div>
            <h4>all Services</h4>
            {
                services.map(service =>
                    <div
                        key={service._id}
                    >
                        <h4>{service.name}</h4>
                        <button onClick={() => handleDelete(service._id)}>Delete</button>
                    </div>
                )
            }
        </div>
    );
};

export default ManageServices;