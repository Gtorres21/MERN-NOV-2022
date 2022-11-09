import React, {useState, useEffect}from 'react'
import Form from '../components/Form'
import ListProducts from '../components/ListProducts'
import axios from 'axios'

const Main = () => {
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
        <Form products={products} setProducts={setProducts}/>
        <ListProducts products={products}/>

        </div>
    )
}

export default Main