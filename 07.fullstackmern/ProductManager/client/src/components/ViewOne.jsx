import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ViewOne = (props) => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [thisProduct, setThisProduct] = useState(null);

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res =>{
            console.log(res.data)
            setThisProduct(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])

    // go to update route
    const goEdit = (productID) =>{
        console.log(productID)
        navigate(`/product/${productID}/edit`)
    }

    // Delete Route
    const deleteProduct = (deleteID) => {
        axios.delete(`http://localhost:8000/api/product/${deleteID}`)
        .then(res => {
            console.log("DELETE SUCCESS", res.data)
            // Navigates to Home after successful delete
            navigate('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            {
                thisProduct ? (
                    <div>
                        {thisProduct.title}
                        <p>Price: ${thisProduct.price}</p>
                        <p>Description: {thisProduct.description}</p>
                        <button onClick={()=> goEdit(thisProduct._id)}>Edit</button> 
                        <button onClick={() => deleteProduct(thisProduct._id)}>Delete</button>
                    </div>
                ):(
                    <p>loading</p>

                )

            }

        </div>
    )
}

export default ViewOne