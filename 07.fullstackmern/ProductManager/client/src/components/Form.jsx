import React, { useState } from 'react'
import axios from 'axios'

const Form = ({products, setProducts}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const createProduct = (e) => {
        e.preventDefault();
        // console.log(title, price, description);
        const newProduct = {title, price, description};

        axios.post("http://localhost:8000/api/product", newProduct)
        .then(res => {
            console.log("✅ ClIENT SUCCESS")
            console.log(res.data)
            setProducts([...products, res.data])
        })
        .catch(err => {
            console.log("❌✖ ClIENT ERROR")
            console.log(err)
        })
    }

    return (
        <div>
            Form State Variables: <br/>
            {JSON.stringify(title)}<br/>
            {JSON.stringify(price)}<br/>
            {JSON.stringify(description)} <br/>

            <form onSubmit={createProduct}>
                Title: <input type="text" onChange={e => setTitle(e.target.value)} value={title}/> <br/>
                Price: <input type="number" onChange={e => setPrice(e.target.value)} value={price}/> <br/>
                Description: <input type="text"  onChange={e => setDescription(e.target.value)} value={description}/><br/>
                <button>Create</button>
            </form>

        </div>
    )
}

export default Form