import React, { useState } from 'react';
import './Admin.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            image: imageURL
        }

        const url = `https://pacific-caverns-37791.herokuapp.com/addEvent`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side responsed', res))
    };

    const handleImageUpload = event => {
        // console.log(event.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', '17f8427538013c9995498fd25b5bee6a')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="admin">
            <h2>Admin Panle</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="New Book Name" {...register('name')} />
                <br />
                <br />
                <input name="price" defaultValue="50" {...register('price')} />
                <br />
                <br />
                <input type="file" {...register("image")} onChange={handleImageUpload} />
                <br />
                <br />
                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default Admin;