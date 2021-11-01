import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css"

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("http://localhost:5000/services", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successfully added.");
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
            <h2>Add Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <input {...register("lastName")} placeholder="" />
                <input type="number" {...register("price")} placeholder="Price" />
                <textarea  {...register("details")} placeholder="Details" />
                <input  {...register("img")} placeholder="Image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;