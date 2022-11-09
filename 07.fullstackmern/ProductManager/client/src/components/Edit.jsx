import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';



const Edit = (props) => {
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            console.log(res.data)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const editProduct = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/product/${id}`, {title, price, description})
        .then(res => {
            console.log("✅ ClIENT SUCCESS")
            console.log(res.data)
            navigate("/")
        })
        .catch(err => {
            console.log("❌✖ ClIENT ERROR")
            console.log(err)
        })
    }

    return (
        <div>

            <form onSubmit={editProduct}>
                Title: <input type="text" onChange={e => setTitle(e.target.value)} value={title}/> <br/>
                Price: <input type="number" onChange={e => setPrice(e.target.value)} value={price}/> <br/>
                Description: <input type="text"  onChange={e => setDescription(e.target.value)} value={description}/><br/>
                <button>Edit</button>
            </form>

        </div>
    )
}

export default Edit