import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css"

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("https://safe-savannah-74547.herokuapp.com/services", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully added.");
                    reset();
                }
            })
    };
    return (
        <div className="add-service m-0">
            <div className="my-5 mx-0">
                <h2 className="text-color">Add Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Name" required />
                    <input {...register("country")} placeholder="Country" required />
                    <input type="number"{...register("rate")} placeholder="Rate" required />
                    <input {...register("review")} placeholder="Review" required />
                    <input type="number" {...register("price")} placeholder="Price" required />
                    <input {...register("category")} placeholder="Category" required />
                    <input type="number" step="0" min="0" max="100"{...register("offer")} placeholder="Offer Percentage" required />
                    <textarea  {...register("details")} placeholder="Details" required />
                    <input  {...register("img")} placeholder="Image" required />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;