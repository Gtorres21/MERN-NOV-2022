import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ListProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then(res => {
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>All Products</h1>
            {
                products.map((oneProduct) => {
                    return (
                        <div key={oneProduct._id}>
                            <Link to={`product/${oneProduct._id}`}>
                            {oneProduct.title}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListProducts